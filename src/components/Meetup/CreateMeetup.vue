<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="mt-2 mb-3">Organize a new Meetup!</h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
              v-model="title"
              name="title"
              id="title"
              label="Title"
              :rules="titleRules"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
              v-model="location"
              name="location"
              id="location"
              label="Location"
              :rules="locationRules"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row class="mb-3">
            <v-flex xs12 sm6 offset-sm3>
              <h2 class="mt-4">Choose a date and time:</h2>
            </v-flex>
          </v-layout>
          <v-layout row class="mb-3">
            <v-flex xs12 sm6 offset-sm3>
              <v-date-picker
              v-model="datePicker"
              :min="tomorrowDate"
              ></v-date-picker>
            </v-flex>
          </v-layout>
          <v-layout row class="mb-3">
            <v-flex xs12 sm6 offset-sm3>
              <v-time-picker
              v-model="timePicker"
              format="24hr"
              ></v-time-picker>
            </v-flex>
          </v-layout>
          <v-layout row class="mb-3">
            <v-flex xs12 sm6 offset-sm3>
              <h2 class="mt-4">Place an image and description:</h2>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
              class="success"
              color="black--text"
              @click="onUploadFile"
              >Upload File</v-btn>
              <input
              type="file"
              ref="fileInput"
              style="display: none"
              accept="image/*"
              @change="onFilePicked"
              >
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="150px">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-textarea
              v-model="description"
              name="description"
              id="description"
              label="Description"
              multi-line
              :rules="descriptionRules"
              ></v-textarea>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
              type="submit"
              :disabled="!formIsValid"
              large
              class="success"
              color="black--text"
              >Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      titleRules: [
        v => !!v || 'Title is required'
      ],
      locationRules: [
        v => !!v || 'Location is required'
      ],
      imageRules: [
        v => !!v || 'Image is required'
      ],
      descriptionRules: [
        v => !!v || 'Description is required'
      ],
      title: '',
      location: '',
      description: '',
      imageUrl: '',
      datePicker: null,
      timePicker: null,
      image: null
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' &&
      this.localtion !== '' &&
      this.description !== '' &&
      this.imageUrl !== '' &&
      this.datePicker !== null &&
      this.timePicker !== null
    },
    tomorrowDate () {
      const today = new Date()
      return this.formatDate(today)
    }
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
    onCreateMeetup () {
      if (!this.formIsValid) {
        return
      }
      if (!this.image) {
        return
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        image: this.image,
        description: this.description,
        date: this.datePicker,
        time: this.timePicker
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    },
    onUploadFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please upload valid image!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    }
  }
}
</script>
