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
            <div>
              <div class="headline">{{ meetup.title }}</div>
              <div class="secondary--text">{{ meetup.date }} - {{ meetup.location }}</div>
            </div>
          </v-card-title>

          <v-card-text>
            <div>Arrival time: {{ meetup.time }} </div>
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
    }
  }
}
</script>
