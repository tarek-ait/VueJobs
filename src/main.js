import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // automatically importing the index file from the folder 

createApp(App).use(router).mount('#app')
