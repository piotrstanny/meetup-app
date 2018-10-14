import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://3.bp.blogspot.com/-BSH0BrwZdiI/VyYNspLlLMI/AAAAAAAAIaU/DnyPstUOU1AKF186zhphr7jvrFxPpmwXwCLcB/s1600/zmarz%25C5%2582e%2Bczuby.jpg',
        id: 'wwgrrege',
        title: 'Tatry Mountain Trip',
        date: '09-07-2018'
      },
      {
        imageUrl: 'https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F11c28fb2-133d-11e8-9ac6-bbf931a203ee.jpg',
        id: 'mnoih36',
        title: 'Mount Blanc Trip',
        date: '21-09-2018'
      }
    ],
    user: {
      id: 'egefbr34',
      registeredMeetups: ['wwgrrege']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'veni345'
      }
      // reach out to firebase and store it
      commit('createMeetup', meetup)
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
    }
  }
})
