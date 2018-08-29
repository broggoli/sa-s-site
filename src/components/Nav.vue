<template>
  <nav class="nav backdrop-blur" v-bind:class="{ open: isOpen }">
    <div class="nav-header">
      <img class="close-menu" :src="closeMenuImg" v-on:click="$emit('toggle-menu')"  />
    </div>
    
    <div class="menu">
      <ul>
        <router-link v-for="(page, index) in pages" 
          tag="li" 
          :to="page.route" 
          v-bind:key="index">
          <div class="menu-item"
              v-on:click="$emit('toggle-menu')"
              v-bind:class="{ active: currentRoute === page.route }">
            <div class="current-page-indicator"></div>
            <div class="item-text">
              <span>{{ page.title }}</span>
            </div>
          </div>
        </router-link >
      </ul>
    </div>
  </nav>
</template>

<script>
import closeMenuImg from "../assets/svg/close-menu.svg"
export default {
  created() {
    this.getPageTitles()
  },
  name: 'Nav',
  props: ['isOpen', 'currentRoute'],
  data: () => ({
    closeMenuImg,

    pages: [],
    errors: []
  }), 
  methods: {
    getPageTitles: function() {
      this.$http.get('http://wp.sa-s.ch/wp-json/wp/v2/pages')
      .then( response => {
        const pages = response.data;
        
        for( const page of pages ) {
          //menu_order
          this.pages.push({ title: page.title.rendered, route: page.slug})
        }
      })
      .catch(e => {
        if( e.msg ) {
          this.errors.push(e)
        }
      })
    },
    getCurrentPage: function() {
      const routeArray = this.$router.currentRoute.path.split("/");
      const pageName = routeArray[ routeArray.length - 1 ]
      console.log(pageName)
      return pageName 
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "Nav.sass"
</style>
