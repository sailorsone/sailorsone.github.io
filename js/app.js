const RootComponent = {
    data() {
        return {
          message: 'Hello World!'
        }
    }
}
const app = Vue.createApp(RootComponent)
const vm = app.mount('#app')