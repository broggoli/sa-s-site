<template>
  <div class="">
    <h2>{{ msg }}</h2>
    <pre> {{ page }}</pre>
    <div v-html="content"></div>
    
  </div>
</template>

<script>
export default {
  created() {
    this.getPage()
  },
  name: 'Home',
  data: function() {
    return {
      name: 'Home',
      msg: "TestMsg",
      page: "nothing loaded yet",
      content: "loading..."
    }
  },
  methods: {
    getPage: function() {
      this.$http.get('http://wp.sa-s.ch/wp-json/wp/v2/pages?slug='+this.name)
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
        this.errors.push(e)
    })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "Home.sass"
</style>
