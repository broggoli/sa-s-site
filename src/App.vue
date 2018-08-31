<template>
  <div id="app" >
    <div class="content" v-bind:class="{ 'is-blurred': menuIsOpen }" @click="toggleMenuIfOpen"> 
      <header-component 
        v-on:toggle-menu="toggleMenu()" 
        v-bind:menuIsOpen='menuIsOpen'>
      </header-component>
      
      <loader-component 
        v-bind:currentRoute='currentRoute'>
      </loader-component>
      <footer-component v-bind:data="footerData"></footer-component>
    </div>
    <nav-component 
        v-on:toggle-menu="toggleMenu()"
        v-bind:isOpen='menuIsOpen' 
        v-bind:currentRoute='currentRoute'>
      </nav-component>
  </div>
  
</template>

<script>
import LoaderComponent from "./components/Loader.vue";
import HeaderComponent from "./components/Header.vue";
import NavComponent from "./components/Nav.vue";
import FooterComponent from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LoaderComponent
  },
  data: function() {
    return {
      menuIsOpen: false,
      currentRoute: this.getCurrentPage(),
      footerData: {
        copyright: "copyright Nick Bachmann 2018"
      }
    };
  },
  watch: {
    $route() {
      this.currentRoute = this.getCurrentPage();
    }
  },
  methods: {
    getCurrentPage: function() {
      const routePath = this.$router.currentRoute.path;
      if (routePath === "/") {
        return this.$router.currentRoute.name;
      } else {
        const routeArray = routePath.split("/");
        const pageName = routeArray[routeArray.length - 1];
        return pageName;
      }
    },
    toggleMenu: function(){
      this.menuIsOpen = !this.menuIsOpen
      document.body.classList.toggle('no-scrolling');
    },
    toggleMenuIfOpen: function(event) {
      if( !event.target.classList.contains("burger-menu")
          && this.menuIsOpen ) {
        this.menuIsOpen = false
        document.body.classList.toggle('no-scrolling');
      }
    }
  }
};
</script>

<style lang="sass">
  @import "app.sass"
</style>