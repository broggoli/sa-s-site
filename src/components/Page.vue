<template>
  <div class="page">
    <h1>{{ page.title.rendered }}</h1>
    <div v-html="page.content.rendered"></div>
  </div>
</template>

<script>

export default {
  name: 'Page',
  props:  ['page'],
  // data: () => {
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "Page.sass"
</style>
