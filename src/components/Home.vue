<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel style="cursor: pointer;">
          <v-carousel-item
          v-for="meetup in meetups"
          :key="meetup.id"
          :src="meetup.imageUrl"
          @click="onLoadMeetup(meetup.id)">
          <div class="meetup-title">
            {{ meetup.title }}
          </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-3">
      <v-flex xs12 sm6 class="text-sm-right text-xs-center">
        <v-btn large to="/meetups" class="secondary">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left text-xs-center">
        <v-btn large to="/meetups/new" class="secondary">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-3">
      <v-flex xs12 class="text-xs-center">
        <h1>Join our amazing meetups and trips!</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push(`/meetups/${id}`)
      }
    }
  }
</script>

<style>
  .meetup-title {
    position: absolute;
    bottom: 50px;
    padding: 10px;
    font-size: 5vw;
    background-color: rgba(0,0,0,0.5);
    color: white;
  }
</style>
