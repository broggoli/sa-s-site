<template>
  <div class="">
    <h1>{{ msg }}</h1>
    Footer
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "Footer.sass"
</style>
