<template>
  <v-dialog max-width="350">
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
            ></v-text-field>
            <v-textarea
            name="description"
            id="description"
            label="Description"
            v-model="editedDescription"
            multi-line
            ></v-textarea>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn flat class="grey--text">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-btn class="success black--text">Save</v-btn>
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
      editedTitle: this.meetup.title,
      editedDescription: this.meetup.description
    }
  }
}
</script>
