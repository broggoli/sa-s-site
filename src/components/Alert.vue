<template>
  <div class="page">
    <p v-for="(error, index) in errors" v-bind:key="index">
      {{ index }}. {{ error }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'Page',
  props:  ['errors'],
  // data: () => {
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  
</style>
