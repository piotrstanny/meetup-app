<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-img
          :src="meetup.imageUrl"
          aspect-ratio="2"
          ></v-img>

          <v-card-title primary-title>
            <div class="headline">{{ meetup.title }}</div>
            <v-spacer></v-spacer>
            <template v-if="userIsCreator" >
                <app-edit-meetup-dialog :meetup="meetup"></app-edit-meetup-dialog>
            </template>
          </v-card-title>

          <v-card-text>
            <div class="primary--text">{{ meetup.date }}
              <br/>{{ meetup.location }}
              <br/>Arrival time: {{ meetup.time }}
            </div>
            <div>{{ meetup.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outline color="red darken-4">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    userIsCreator () {
      if (!this.userIsAuthenticated) {
        return false
      }
      return this.$store.getters.user.id === this.meetup.creatorId
    }
  }
}
</script>
