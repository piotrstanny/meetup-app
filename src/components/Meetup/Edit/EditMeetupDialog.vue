<template>
  <v-dialog max-width="350" persistent v-model="editDialog">
    <v-btn fab small slot="activator" color="error"><v-icon>edit</v-icon></v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>
              <h2>Edit Meetup</h2>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
            name="title"
            id="title"
            label="Title"
            v-model="editedTitle"
            :rules="titleRules"
            ></v-text-field>
            <v-textarea
            name="description"
            id="description"
            label="Description"
            v-model="editedDescription"
            :rules="descriptionRules"
            multi-line
            ></v-textarea>
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
      descriptionRules: [
        v => !!v || 'Description is required'
      ],
      titleRules: [
        v => !!v || 'Title is required'
      ],
      editDialog: false,
      editedTitle: this.meetup.title,
      editedDescription: this.meetup.description
    }
  },
  methods: {
    onSaveChanges () {
      if (this.editedTitle.trim() === '' || this.editedDescription.trim() === '') {
        return
      }
      this.editDialog = false
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        title: this.editedTitle,
        description: this.editedDescription
      })
    }
  }
}
</script>
