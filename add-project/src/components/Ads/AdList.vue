<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My ads</h1>

        <v-card
            elevation="10"
            class="mb-7"
            v-for="ad in ads"
            :key="ad"
        >
          <v-layout row>
            <v-flex xs4>
              <v-img
                  :src="ad.imageSrc"
                  height="160"
              >

              </v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--secondary">{{ ad.title }}</h2>
                <p>{{ ad.description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    :to="'/ad/' + ad.id"
                    color="blue-grey darken-2"
                    dark
                >Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      ads: [
        {
          title: 'First ad',
          description: 'Hello qadan alim',
          promo: false,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          id: '1234'
        },
        {
          title: 'Second ad',
          description: 'Hello brother',
          promo: true,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          id: '123'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>