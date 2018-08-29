<template>
  <div id="app">
    <header-component v-on:toggle-menu="menuIsOpen = !menuIsOpen;"></header-component>
    <nav-component v-on:toggle-menu="menuIsOpen = !menuIsOpen" v-bind:isOpen='menuIsOpen'></nav-component>
    
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import LoaderComponent from './components/Loader.vue'
import HeaderComponent from './components/Header.vue'
import NavComponent from './components/Nav.vue'
import FooterComponent from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LoaderComponent
  },
  data: function() {
    return {
      menuIsOpen: false
    }
  },
}
</script>

<style lang="sass">
  @import "app.sass"
</style>
