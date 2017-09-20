<template>
  <div id="app">
    <h1>Animation</h1>
    <button @click="show = !show">
      Toggle
    </button>
    <transition name="bounce">
      <div v-if="show">Hello, Vue.js</div>
    </transition>
    <h1>Animate CSS</h1>
    <animate-css></animate-css>
    <h1>Dynamic</h1>
    <dynamic></dynamic>
  </div>
</template>

<script>
  import animateCss from '@/components/AnimateCss'
  import dynamic from '@/components/Dynamic'
  import { createdMixin, mountedMixin } from '@/util/mixins'

  export default {
    name: 'app',
    data() {
      return {
        show: false
      }
    },
    components: {
      animateCss: animateCss,
      dynamic: dynamic
    },
    mixins: [createdMixin, mountedMixin]
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

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  /* ease */

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .5s ease-out;
  }

  .slide-fade-enter,
  .slide-fade-leave {
    transform: translateX(50px);
    opacity: 0;
  }
  /* bounce */

  .bounce-enter-active {
    animation: bounce-animation .5s;
  }

  .bounce-leave-active {
    animation: bounce-animation .5s reverse;
  }

  @keyframes bounce-animation {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>