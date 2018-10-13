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
              <div class="secondary--text">{{ meetup.date }}</div>
            </div>
          </v-card-title>

          <v-card-text>
            <div>Three day excursion assumes an approach to the famous Orla Perc trial. The potential accomodations are full booked. We're going to occupy a floor space. There is as well a threat for the weather breakdown.</div>
          </v-card-text>

          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="red darken-4">Register</v-btn>
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
