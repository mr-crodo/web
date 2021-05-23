<template>

  <div id="app">
    <v-app id="inspire">
      <v-card
          class="mx-auto overflow-hidden"
          width="100%"
          height="100%"
          color="grey lighten-5"
      >
        <v-system-bar color="blue-grey lighten-5"></v-system-bar>

        <v-app-bar
            color="grey darken-3"
            dark
        >
          <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
              class="d-flex d-md-none d-print-flex"
              color="blue-grey lighten-5"
          >
          </v-app-bar-nav-icon>

          <v-toolbar-title>
            <router-link to="/" tag="span" class="pointer">Ad application</router-link>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items class="d-none d-md-flex d-print-flex ">
            <v-btn
                color="grey darken-3 blue-grey--text-lighten-5 text--accent-4"
                class="ml-2"
                v-for="link in links"
                :key="link.title"
                :to="link.url"
            >
              <v-icon left>{{ link.icon }}</v-icon>
              {{ link.title }}
            </v-btn>
          </v-toolbar-items>

        </v-app-bar>

            <v-navigation-drawer
                v-model="drawer"
                absolute
                right
                temporary
            >
              <v-list
                  nav
                  dense
              >
                <v-list-item-group
                    v-model="group"
                    active-class="blue-grey lighten-4 blue-grey--text-lighten-5 text--accent-4"
                >
                  <v-list-item
                      v-for="link of links"
                      :key="link.title"
                      :to="link.url"
                  >
                    <v-icon left>
                      {{ link.icon }}
                    </v-icon>
                    <v-list-item-title v-text="link.title"></v-list-item-title>
                  </v-list-item>

                </v-list-item-group>
              </v-list>


            </v-navigation-drawer>


        <v-container>
          <v-content>
            <router-view></router-view>
          </v-content>
        </v-container>

      </v-card>
    </v-app>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    drawer: false,
    group: null,
    links: [
      {title: 'Login', icon: 'mdi-lock', url: '/login'},
      {title: 'Registration', icon: 'mdi-face', url: '/registration'},
      {title: 'Orders', icon: 'mdi-bookmark', url: '/orders'},
      {title: 'New ad', icon: 'mdi-file-plus', url: '/new'},
      {title: 'My ads', icon: 'mdi-format-list-bulleted', url: '/list'}
    ]
  }),

  // watch: {
  //   group () {
  //     this.drawer = false
  //   },
  // },

}
</script>

<style>
.v-toolbar__title {
  color: #ECEFF1;
}

.pointer {
  cursor: pointer;
}
</style>


