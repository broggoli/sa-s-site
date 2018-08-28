<template>
  <div id="app">
    <header-component></header-component>
    <nav-component></nav-component>

    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HomeComponent from './components/Home.vue'
import HeaderComponent from './components/Header.vue'
import NavComponent from './components/Nav.vue'
import FooterComponent from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent
  }
}
</script>

<style lang="sass">
  @import "app.sass"
</style>
