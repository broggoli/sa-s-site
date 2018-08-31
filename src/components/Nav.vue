<template>
  <nav v-bind:class="{ open: isOpen }">
    <div class="nav-header">
      <img class="close-menu" :src="closeMenuImg" v-on:click="$emit('toggle-menu')"  />
    </div>
    
    <div class="menu">
      <ul>
        <li v-for="(page, index) in pages" v-bind:key="index">
          <router-link tag="div" 
              :to="{ path: '/'+page.route}" 
              class="menu-item" 
              v-bind:class="{ active: pageIsActive(page.route) }">

            <div class="current-page-indicator"></div>
            
            <div class="item-text"  v-on:click="$emit('toggle-menu')">
              <span>{{ page.title }}</span> 
            </div>
          <img v-if="page.children.length > 0" 
                class="show-more" 
                :src="arrow"
                v-bind:class="{ down: page.showChildren}"
                v-on:click="page.showChildren = !page.showChildren"/>
          </router-link>

          <router-link tag="div"
              v-if="page.showChildren"
              v-for="(subPage, index) in page.children"
              :to="{ path: '/'+page.route+'/'+subPage.route}" 
              class="menu-item sub-item"            
              v-bind:key="index"
              v-bind:class="{ active: currentRoute === subPage.route }">
            <div class="current-page-indicator"></div>
            <div class="item-text" v-on:click="$emit('toggle-menu')">
              <span>{{ subPage.title }}</span>
            </div>

          </router-link>
        </li>
      </ul>
    </div>
    <div class="acknowledgement">
      <div id="madeBy">
        <p>
          <a href="http://www.broggoli.ch">Web design by Nick Bachmann</a>
        </p>
      </div>
    </div>  
  </nav>
</template>

<script>
import closeMenuImg from "../assets/svg/close-menu.svg"
import arrow from "../assets/svg/arrow.svg"
export default {
  created() {
    this.getPageTitles()
  },
  name: 'Nav',
  props: ['isOpen', 'currentRoute'],
  data: () => ({
    closeMenuImg,
    arrow,

    pages: [],
    errors: []
  }), 
  methods: {
    getPageTitles: function() {
      this.$http.get('http://wp.sa-s.ch/wp-json/wp/v2/pages')
      .then( response => {
        const pages = response.data
        let mainPages = []
        let subPages = []
        
        for( const page of pages ) {
          if( page.parent === 0 && page.menu_order > 0) {
            // This page is a main page
            mainPages.push(
              {
                id: page.id,
                title: page.title.rendered, 
                route: page.slug, 
                order: page.menu_order,
                showChildren: this.$router.currentRoute.path.indexOf(page.slug) > -1,
                children: []
              })
          }else if( page.parent > 0){
            // This page is a sub page
            subPages.push(
              {
                id: page.id,
                title: page.title.rendered, 
                route: page.slug, 
                order: page.menu_order,
                parent: page.parent
              })
          }
          
        }
        const sortByOrder = (a, b) => {
          if(a.order < b.order) return -1;
          if(a.order > b.order) return 1;
        }
        // sort both
        mainPages.sort( sortByOrder )
        subPages.sort( sortByOrder )
        for(const subPage of subPages) {
          const parent = mainPages.filter( a => a.id === subPage.parent)[0]
          const index = mainPages.indexOf(parent)
          if( index > -1) {
            mainPages[index].children.push(subPage)
          }
        }
        this.pages = mainPages
      })
      .catch(e => {
        if( e.msg ) {
          this.errors.push(e)
        }
      })
    },
    pageIsActive( route ) {
        return this.currentRoute.toLowerCase() === route
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "Nav.sass"
</style>
