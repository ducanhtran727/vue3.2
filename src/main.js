import { createApp } from 'vue'
import App from './App.vue'
import {router} from '../src/router/routes'
createApp(App).use(router).mount('#app')
