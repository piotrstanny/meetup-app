<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <v-form>
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
                    color="black--text">Sign Up</v-btn>
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
        v => !!v || 'E-mail is required'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      confirmPasswordRules: [
        v => !!v || 'You have to type your password again'
      ]
    }
  }
}
</script>
