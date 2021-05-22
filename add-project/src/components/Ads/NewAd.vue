<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mt-5 mb-4">Create new Ad</h1>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="mb-4"
        >
          <v-text-field
              label="Ad title"
              name="title"
              type="text"
              v-model="title"
              :rules="[v => !!v || 'Title is required']"
              required
              color="blue-grey"
          ></v-text-field>

          <v-textarea
              label="Ad description"
              name="description"
              v-model="description"
              type="text"
              :rules="[v => !!v || 'Description is required']"
              color="blue-grey"

          ></v-textarea>
        </v-form>

        <v-form>
          <v-layout row mb-3>
            <v-flex xs12>
              <v-btn
                  :loading="loading3"
                  :disabled="loading3"
                  color="warning"
                  class="ma-2 black--text"
                  @click="loader = 'loading3'"
              >
                Upload
                <v-icon
                    right
                    dark
                >
                  mdi-cloud-upload
                </v-icon>
              </v-btn>

            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12>
              <img src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg" alt="" height="100">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-switch
                  v-model="promo"
                  flat
                  label="Add to promo?"
                  color="blue-grey lighten-2"
              ></v-switch>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
             <v-spacer></v-spacer>
              <v-btn
                  :disabled="!valid"
                  @click="createAd"
                  color="blue-grey darken-2"
                  dark
              >
                Create Add</v-btn>
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
      title: '',
      description: '',
      promo: false,
      valid: false

    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo
        }

        console.log(ad)
      }
    }
  }
}
</script>

<style scoped>

</style>