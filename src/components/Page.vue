<template>
  <div class="content">
    <h1 v-if="!loading"> {{ page.title.rendered }} </h1>
    <h1 class="loadingHeader" v-if="loading"></h1>

    <div v-if="!loading" v-html="page.content.rendered" class="text"></div>
    <div v-if="loading" class="loadingContent">
      <p class="loadingP" v-for="n in 45" :key="n" :style="{ width: randomWidth()+'%' }"></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Page',
  props:  {
    page: Object,
    loading: Boolean
  },
  // data: function() {
  //   console.log(this.props)
  //   return {
  //     page: this.props.page,
  //     loading: this.props.loading
  //   }
  // },
  methods: {
    randomWidth: function() {
      return  Math.max(Math.min(Math.ceil( Math.random() * 100 ), 90 ), 20)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "Page.sass"
</style>
