<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <v-form @submit.prevent="onSignup">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                    name="email"
                    id="email"
                    label="E-mail"
                    type="email"
                    v-model="email"
                    :rules="emailRules"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                    name="password"
                    id="password"
                    label="Password"
                    type="password"
                    v-model="password"
                    :rules="passwordRules"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                    name="confirmPassword"
                    id="confirmPassword"
                    label="Confirm password"
                    type="password"
                    v-model="confirmPassword"
                    :rules="confirmPasswordRules"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn
                    type="submit"
                    large
                    class="warning mt-5"
                    color="black--text"
                    :disabled="!signupIsValid"
                    >Sign Up</v-btn>
                    <v-progress-circular v-if="loading" class="mt-5"
                    indeterminate
                    color="primary"
                    ></v-progress-circular>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      confirmPasswordRules: [
        v => !!v || 'Confirm your password',
        v => v === this.password || 'Passwords do not match'
      ]
    }
  },
  computed: {
    signupIsValid () {
      return this.email !== '' &&
      this.password !== '' &&
      this.confirmPassword !== '' &&
      this.password === this.confirmPassword
    },
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    error (value) {
      if (value !== null && value !== undefined) {
        console.log(value)
      } else {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignup () {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
