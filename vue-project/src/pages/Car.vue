<template>
    <h1>Car id {{ id }}</h1>
</template>

<script>
export default {
  name: "Car",
  data() {
    return {
      id: this.$router.currentRoute.params['id']
    }
  }
}
</script>

<style scoped>

</style>