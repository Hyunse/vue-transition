<template>
    <div>
        <div>Home</div>
        <input type="text" placeholder="Input Text" v-focus>
        <div v-counter>10000</div>
        <div v-counter>20000</div>
        <div v-counter>50000</div>
    </div>
</template>

<script>
    import { mountedMixin } from '@/util/mixins'
    export default {
        name : 'home',
        data () {
            return {
            }
        },
        mixins: [mountedMixin]
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div {
        position: relative;
    }
</style>