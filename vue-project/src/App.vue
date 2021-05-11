<template>

  <div class="container">
    <ul class="nav nav-pills">

      <li class="nav-item">
        <router-link class="nav-link" exact :to="'/'" active-class="active">Home</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" :to="'/cars'" active-class="active">Cars</router-link>

      </li>

      <li class="nav-item">
        <router-link class="nav-link" :to="'/car/3'" active-class="active">Cars 3</router-link>

      </li>

      <li class="nav-item">
        <router-link class="nav-link" :to="'/car/4'" active-class="active">Cars 4</router-link>

      </li>


    </ul>
    <router-view></router-view>
  </div>

</template>

<script>
  export default {

  }
</script>
