import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
//导入路由并挂载到全局
createApp(App).use(router).mount('#app')
