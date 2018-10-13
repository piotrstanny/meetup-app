<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card color="blue-grey lighten-3">
                        <v-layout>
                            <v-flex xs5 sm3>
                                <v-img
                                    src="https://3.bp.blogspot.com/-BSH0BrwZdiI/VyYNspLlLMI/AAAAAAAAIaU/DnyPstUOU1AKF186zhphr7jvrFxPpmwXwCLcB/s1600/zmarz%25C5%2582e%2Bczuby.jpg"
                                    aspect-ratio="1"
                                ></v-img>
                            </v-flex>
                            <v-flex xs7 sm9>
                                <v-card-title primary-title>
                                    <div>
                                        <div class="headline">My meetup</div>
                                        <div>23th September 2018</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn to="/meetups/1">
                                        <v-icon left light>arrow_forward</v-icon>
                                        View Meetup</v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
