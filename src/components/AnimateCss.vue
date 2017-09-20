<template>
  <div>
    <button @click="show = !show">
    Toggle
    </button>
    <transition 
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated bounceOutRight">
        <h1 v-if="show">Hello, Vue.js</h1>
    </transition>
  </div>
</template>

<script>
    export default {
        name: 'animateCss',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                show: ''
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>