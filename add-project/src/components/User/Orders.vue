<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mt-5 mb-4">Orders</h1>
        <v-list
            subheader
            three-line
        >

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle>Set the content filtering level to restrict appts that can be downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
            flat
            subheader
            three-line
        >
          <v-subheader>General</v-subheader>

          <v-list-item-group
              v-model="settings"
              multiple
              active-class=""
          >

            <v-list-item>
              <template>

                <div v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active"></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>Notifications</v-list-item-title>
                    <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                  </v-list-item-content>
                </div>


                <v-list-item-action>
                  <v-btn>
                    Open
                  </v-btn>
                </v-list-item-action>


              </template>
            </v-list-item>


          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: 'fds3',
          name: 'Vladilen',
          phone: '8-832-334-43-23',
          adId: '1234',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
    }
  }
}
</script>

<style scoped>

</style>