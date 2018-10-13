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
      </v-list>
    </v-navigation-drawer>

    <v-toolbar id="top-toolbar" app dark color="red darken-4">
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
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        {icon: 'perm_media', title: 'View Meetups', link: '/meetups'},
        {icon: 'room', title: 'Organize Meetup', link: '/meetups/new'},
        {icon: 'account_box', title: 'Profile', link: '/profile'},
        {icon: 'person', title: 'Sign in', link: '/signin'},
        {icon: 'person_add', title: 'Sign up', link: '/signup'}
      ]
    }
  },
  name: 'App'
}
</script>
<style>
</style>
