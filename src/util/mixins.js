import Vue from 'vue'

// Local Mixin
export var createdMixin = {
    created () {
        // $el 마운팅된 DOM : created시 마운트가 안되서 undefined
        console.log(`created: ${this.$el}`);
    }
}
export var mountedMixin = {
    mounted () {
        // $el 마운팅된 DOM
        console.log(`mounted: ${this.$el}`);
    }
}

export default (Vue) => {
    // Global
    // 모든 컴포넌트에 적용 가능
    Vue.mixin({
        created() {
            this.alertMessage("Hello, It's Global Mixin ");
        },
        methods: {
            alertMessage(messages) {
                console.log(messages);
            }
        }
    });
}