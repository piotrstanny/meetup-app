<template>
  <v-dialog persistent max-width="350px" v-model="registerDialog">
    <v-btn
    slot="activator"
    outline
    color="red darken-4"
    >
    {{ buttonValue }}
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title v-if="userIsRegistered">
              <h3>Unregister from this meetup?</h3>
            </v-card-title>
            <v-card-title v-else>
              <h3>Register for this meetup?</h3>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <p>We always want you to take a part in our meetups, but You can always change your decision later! ;)</p>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 class="mt-3">
            <v-card-actions>
              <v-btn flat class="grey--text" @click="registerDialog = false">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-btn class="success black--text" @click="onConfirm">Confirm</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['meetupId'],
  data () {
    return {
      registerDialog: false
    }
  },
  computed: {
    userIsRegistered () {
      return this.$store.getters.user.registeredMeetups.findIndex(meetupId => {
        return meetupId === this.meetupId
      }) >= 0
    },
    buttonValue () {
      if (this.userIsRegistered) {
        return 'Unregister'
      } else {
        return 'Register'
      }
    }
  },
  methods: {
    onConfirm () {
      if (this.userIsRegistered) {
        this.$store.dispatch('unregisterUserFromMeetup', this.meetupId)
      } else {
        this.$store.dispatch('registerUserForMeetup', this.meetupId)
      }
      this.registerDialog = false
    }
  }
}
</script>
