<template>
  <div class="">
    <h1>{{ msg }}</h1>
    Header
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "Header.sass"
</style>
