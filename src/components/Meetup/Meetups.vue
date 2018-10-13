<template>
  <v-container>
    <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-3">
      <v-flex xs12 sm10 offset-sm1>
        <v-card color="blue-grey lighten-3">
          <v-layout style="max-height: 170px;">
            <v-flex xs5 sm4>
              <v-img
                :src="meetup.imageUrl"
                aspect-ratio="1"
                height="170px"
              ></v-img>
            </v-flex>
            <v-flex xs7 sm8>
              <v-card-title primary-title class="mb-0 pb-0">
                <div>
                  <div class="meetup-list-title">{{ meetup.title }}</div>
                  <div>{{ meetup.date }}</div>
                </div>
              </v-card-title>
              <v-card-actions class="btn-bottom">
                <v-spacer></v-spacer>
                <v-btn class="secondary" to="/meetups/">
                  <v-icon left light>arrow_forward</v-icon>
                  View Meetup
                </v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}
</script>

<style>
  .meetup-list-title {
    font-weight: bold;
    font-size: 3vh;
    max-height: 60px;
  }
  .btn-bottom {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
