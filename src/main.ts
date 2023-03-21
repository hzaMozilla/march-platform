import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from '@app/components/Menu';
import 'element-plus/dist/index.css';
import './style/index.less';

const app = createApp(App);

app.use(ElementPlus);
app.mount('#app');
createApp(App).mount('#app');
