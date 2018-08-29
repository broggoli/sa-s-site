<template>
  <div class="page">
    <page-component v-if="errors.length==0" v-bind:page="page" class="content"></page-component>
    <alert-component v-if="errors.length > 0" v-bind:errors="errors"></alert-component>
  </div>
</template>


<script>
import PageComponent from './Page.vue'
import AlertComponent from './Alert.vue'
export default {
  created() {
    this.getPage(this.currentRoute)
  },
  name: 'Loader',
  props: ['currentRoute'],
  data: function() {
    return {
      name: 'Home',
      msg: "TestMsg",
      content: "loading...",
      errors: [],
      page: {content: "no page loaded Yet", title: "No title"}
    }
  },
  watch: { 
      currentRoute: function(to) {
        this.getPage(to)
      }
  },
  methods: {
    getPage: function(pageName) {
      this.$http.get('http://wp.sa-s.ch/wp-json/wp/v2/pages?slug='+pageName)
      .then( response => {
        // get body data
        this.page = response.data[0];
        if( this.page.status == "publish") {
          this.content = this.page.content.rendered
        }else{
          this.content = "Nothing to see here!"
        }
      })
      .catch(e => {
        if( e.msg ) {
          this.errors.push(e)
        }
      })
    }
  },
  components: {
    PageComponent,
    AlertComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "Loader.sass"
</style>
