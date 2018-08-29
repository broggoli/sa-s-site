<template>
   <header>
        <a href="/">
            <img class="sa-s_logo" :src="logo" />
        </a>
        <img v-on:click="$emit('toggle-menu')" class="burger-menu" :src="burgerMenuImg" />
    </header>
</template>

<script>
import burgerMenuImg from "../assets/svg/burger-menu.svg"
import logo from "../assets/svg/sa-s_logo.svg"

export default {
  name: 'Header',
  data: function () {
    return {
      burgerMenuImg,
      logo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "Header.sass"
</style>
