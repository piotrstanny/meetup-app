<template>
  <v-app>
    <v-navigation-drawer absolute dark class="secondary" v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
        v-if="userIsAuthenticated"
        @click="onSignOut"
        >
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Sign out
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar id="top-toolbar" app dark class="primary">
      <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Our Meetups</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn @click="onSignOut" v-if="userIsAuthenticated" flat>
          <v-icon left>exit_to_app</v-icon>
          Sign out
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container id="main-container">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        {icon: 'person', title: 'Sign in', link: '/signin'},
        {icon: 'person_add', title: 'Sign up', link: '/signup'}
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          {icon: 'perm_media', title: 'View Meetups', link: '/meetups'},
          {icon: 'room', title: 'Create Meetup', link: '/meetups/new'}
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onSignOut () {
      this.$store.dispatch('signOut')
      this.$router.push('/')
    }
  },
  name: 'App'
}
</script>

<style>
  #main-container {
    max-width: 1080px;
  }
</style>
