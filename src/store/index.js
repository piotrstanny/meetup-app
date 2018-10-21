import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedMeetups (state, payload) {
      state.loadedMeetups = payload
    },
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    loadMeetups ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('meetups').once('value')
      .then(
        data => {
          const meetups = []
          const obj = data.val()
          for (let key in obj) {
            meetups.push({
              id: key,
              title: obj[key].title,
              location: obj[key].location,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              time: obj[key].time,
              creatorId: obj[key].creatorId
            })
          }
          commit('setLoadedMeetups', meetups)
          commit('setLoading', false)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          console.log(error)
        }
      )
    },
    createMeetup ({commit, getters}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        date: payload.date,
        time: payload.time,
        creatorId: getters.user.id
      }
      let imageUrl
      let key
      firebase.database().ref('meetups').push(meetup)
      .then(
        data => {
          key = data.key
          return key
        }
      ).then(key => {
        const filename = payload.image.name
        const ext = filename.slice(filename.lastIndexOf('.'))
        return firebase.storage().ref('meetups/' + key + ext).put(payload.image)
      })
      .then(fileData => {
        return fileData.ref.getDownloadURL()
      })
      .then(url => {
        imageUrl = url
        return firebase.database().ref('meetups').child(key).update({imageUrl: imageUrl})
      })
      .then(() => {
        commit('createMeetup', {
          ...meetup,
          imageUrl: imageUrl,
          id: key
        })
      })
      .catch(
        error => {
          console.log(error)
        }
      )
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          commit('clearError')
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
        }
      )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          commit('clearError')
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        }
      ).catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
        }
      )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {id: payload.uid, registeredMeetups: []})
    },
    signOut ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
