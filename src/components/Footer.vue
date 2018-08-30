<template>
  <footer>
    <router-link tag="span" class="impressum" :to="{path: '/impressum'}">Impressum</router-link>
    <span>2018 © sa-s solutions academy scherrer</span>
    <!--<span>{{ data.copyright }}</span>-->
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    data: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "Footer.sass"
</style>
