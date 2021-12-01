const RootComponent = {
    data() {
        return {
          messagge: 'Hello World!'
        }
    }
}
const app = Vue.createApp(RootComponent)
const vm = app.mount('#app')