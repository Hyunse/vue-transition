<template>
  <div id="app">
    <button @click="show = !show">
      Toggle
    </button>
    <transition name="slide-fade">
      <div v-if="show">Hello, Vue.js</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show: false
    }
  },
  components: {
  }
}
</script>

<style>
  /**
   *엘리먼트가 등장할 때 순서
   * .[name]-enter -> .[name]-enter-active -> .[name]-enter-to
   * opacity: 0  opacity: 0->1          opacity: 1
   */

  /**
   * 엘리먼트가 삭제될 때 순서
   * .[name]-leave -> .[name]-leave-active -> .[name]-leave-to 
   *  opacity: 1        opacity: 1->0          opacity: 0
   */
  #app {
    padding: 200px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  /* ease */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s ease-out;
  }
  .slide-fade-enter, .slide-fade-leave {
    transform: translateX(50px);
    opacity: 0;
  }


</style>
