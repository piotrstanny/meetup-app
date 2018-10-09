<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-carousel>
                    <v-carousel-item
                    v-for="(meetup) in meetups"
                    :key="meetup.id"
                    :src="meetup.imageUrl">
                    <div class="meetup-title">
                        {{ meetup.title }}
                    </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-3">
            <v-flex xs12 sm6 class="text-sm-right text-xs-center">
                <v-btn large router to="/meetups" class="accent">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-sm-left text-xs-center">
                <v-btn large router to="/meetups/new" class="accent">Organize Meetup</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-3">
            <v-flex xs12 class="text-xs-center">
                <h1>Join our amazing Trips!</h1>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        // eslint-disable-next-line
        data () {
            // eslint-disable-next-line
            return {
                // eslint-disable-next-line
                meetups: [
                    {imageUrl: 'https://3.bp.blogspot.com/-BSH0BrwZdiI/VyYNspLlLMI/AAAAAAAAIaU/DnyPstUOU1AKF186zhphr7jvrFxPpmwXwCLcB/s1600/zmarz%25C5%2582e%2Bczuby.jpg', id: 'wwgrrege', title: 'Tatry Mountain Trip'},
                    {imageUrl: 'https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F11c28fb2-133d-11e8-9ac6-bbf931a203ee.jpg', id: 'wwgvwre', title: 'Mount Blanc Trip'}
                ]
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
