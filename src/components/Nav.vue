<template>
  <div class="">
    <h1>{{ msg }}</h1>
    Nav
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "Nav.sass"
</style>
