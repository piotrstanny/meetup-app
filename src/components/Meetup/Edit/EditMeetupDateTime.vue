<template>
  <v-dialog max-width="350px" persistent v-model="editDialog">
    <v-btn small slot="activator" color="error" class="ma-0">Edit date or time<v-icon right>edit</v-icon></v-btn>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h2>Choose to set new date and time for your meetup:</h2>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-date-picker
            v-model="editDatePicker"
            :min="tomorrowDate"
            actions
            ></v-date-picker>
            <v-time-picker
            v-model="editTimePicker"
            format="24hr"
            actions
            ></v-time-picker>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn flat class="grey--text" @click="editDialog = false">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-btn class="success black--text" @click="onSaveChanges">Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['meetup'],
  data () {
    return {
      editDialog: false,
      editDatePicker: null,
      editTimePicker: null
    }
  },
  computed: {
    tomorrowDate () {
      const today = new Date()
      return this.formatDate(today)
    }
  },
  created () {
    this.editDatePicker = this.meetup.date
    this.editTimePicker = this.meetup.time
  },
  methods: {
    formatDate (date) {
      const year = date.getFullYear()
      let month = `${date.getMonth() + 1}`
      let day = `${date.getDate() + 1}`

      if (month.length < 2) {
        month = `0${month}`
      }
      if (day.length < 2) {
        day = `0${day}`
      }
      return [year, month, day].join('-')
    },
    onSaveChanges () {
      this.editDialog = false
      const newDate = this.editDatePicker
      const newTime = this.editTimePicker
      // console.log(date, time)
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        date: newDate,
        time: newTime
      })
    }
  }
}
</script>
