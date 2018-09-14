<template>
  <v-app>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Trip Meetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-for="item in menuItems" :key="item.title" flat>
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
          </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer dark class="secondary" v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        {icon: 'perm_media', title: 'View Meetups'},
        {icon: 'room', title: 'Organize Meetup'},
        {icon: 'account_box', title: 'Profile'},
        {icon: 'person', title: 'Sign in'},
        {icon: 'person_add', title: 'Sign up'}
      ]
    }
  },
  name: 'App'
}
</script>
