<template>
  <nav class="nav" v-bind:class="{ open: isOpen }">
    <div class="nav-header">
      <img class="close-menu" :src="closeMenuImg" v-on:click="$emit('toggle-menu')"  />
    </div>
    
    <div class="menu">
      <ul>
        <li v-for="(title, index) in pageTitles" 
            v-bind:key="index">
          <div class="menu-item">
            <div class="current-page-indicator"></div>
            <div class="item-text">
              <span>{{ title }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import closeMenuImg from "../assets/svg/close-menu.svg"
export default {
  created() {
    this.getPageTitles(),
    this.isOpen = false
  },
  name: 'Nav',
  props: ['isOpen'],
  data: () => ({
    closeMenuImg,

    pageTitles: [],
    errors: []
  }), 
  methods: {
    getPageTitles: function() {
      this.$http.get('http://wp.sa-s.ch/wp-json/wp/v2/pages')
      .then( response => {
        const pages = response.data;
        
        for( const page of pages ) {
          //menu_order
          this.pageTitles.push(page.title.rendered)
        }
      })
      .catch(e => {
        if( e.msg ) {
          this.errors.push(e)
        }
    })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "Nav.sass"
</style>
