<template>
  <div>
    <buttnon class="btn btn-success m-2" @click="updateCounter(1)">Add</buttnon>
    <buttnon class="btn btn-danger m-2" @click="updateCounter(-1)">Subtrack</buttnon>
  </div>
</template>

<script>
export default {
  name: "Actions",
  methods: {
    updateCounter(val) {
      // this.$store.state.counter += val
      // this.$store.commit('changeCounter', val)
      this.$store.dispatch('asyncChangeCounter', {
        counterValue: val,
        timeoutDelay: 0
      })
    }


  }
}
</script>

<style scoped>

</style>