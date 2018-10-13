import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {imageUrl: 'https://3.bp.blogspot.com/-BSH0BrwZdiI/VyYNspLlLMI/AAAAAAAAIaU/DnyPstUOU1AKF186zhphr7jvrFxPpmwXwCLcB/s1600/zmarz%25C5%2582e%2Bczuby.jpg', id: 'wwgrrege', title: 'Tatry Mountain Trip'},
            {imageUrl: 'https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F11c28fb2-133d-11e8-9ac6-bbf931a203ee.jpg', id: 'wwgvwre', title: 'Mount Blanc Trip'}
        ],
        user: {
            id: 'egefbr34',
            registeredMeetups: ['wwgrrege']
        }
    },
    mutations: {},
    actions: {},
    getters: {
        loadedMeetups (state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        }
    }
})