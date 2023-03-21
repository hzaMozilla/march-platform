import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from '@app/components/Menu';
import store from './store';
import 'element-plus/dist/index.css';
import './style/index.less';

const app = createApp(App);
app.use(store);
app.use(ElementPlus);
app.mount('#app');
createApp(App).mount('#app');
