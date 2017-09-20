<template>
  <div>
    <div class="contrainer">
      <ul class="nav nav-tabs">
        <li @click="currentView = 'home'">
          <a href="#">Home</a>
        </li>
        <li @click="currentView = 'profile'">
          <a href="#">Profile</a>
        </li>
        <li @click="currentView = 'messages'">
          <a href="#">Message</a>
        </li>
      </ul>
      <!-- mode : in-out , out-in -->
      <transition name="fade" mode="in-out">
        <component :is="currentView"></component>
      </transition>
    </div>
  </div>
</template>

<script>
  import home from '@/components/Home'
  import profile from '@/components/Profile'
  import messages from '@/components/Messages'

  export default {
    name: 'dynamic',
    data() {
      return {
        currentView: 'home'
      }
    },
    components: {
      home: home,
      profile: profile,
      messages: messages
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>