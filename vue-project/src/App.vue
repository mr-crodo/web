<template>
  <div>

      <app-car >
        <h2 slot="title">{{ carName }}</h2>
        <p slot="text">Lorem ipsum dolor.</p>
      </app-car>
<!--    <router-view/>-->
  </div>

  
</template>

<style scoped>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/

/*#nav {*/
/*  padding: 30px;*/
/*}*/

/*#nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*#nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
  h2 {
    color: darkblue;
  }

</style>

<script>
import Car from './Car.vue'
export default {
  data() {
    return {
      carName: 'Lamborjinni'
    }
  },
  components: {
     appCar: Car,
   }
}
</script>
