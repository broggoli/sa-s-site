<template>
  <div class="">
    <h2>{{ msg }}</h2>
    <!--<pre> {{ page }}</pre>-->
    {{ content }}
    <button v-on:click.prevent="getPage">
      Fetch Data
    </button>
    
  </div>
</template>

<script>
export default {
  created() {
    return this.getPage()
  },
  name: 'Home',
  data() {
    return {
      msg: "TestMsg",
      page: "nothing loaded yet",
      content: "",
      name: 'Home'
    }
  },
  methods: {
    getPage: function() {
      this.$http.get('http://wp.sa-s.ch/wp-json/wp/v2/pages?slug='+this.name)
      .then( response => {
        // get body data
        this.page = response.body[0];
        if( this.page.status == "publish") {
          this.content = this.page.content.rendered
        }else{
          this.content = "Nothing to see here!"
        }

      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "Home.sass"
</style>
