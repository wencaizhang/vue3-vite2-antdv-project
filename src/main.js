import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import router from './router';
import './styles/index.less';

createApp(App).use(Antd).use(router).mount('#app')
