import { createApp } from 'vue';
import 'element-plus/es/components/message-box/style/css';
import 'element-plus/es/components/message/style/css';
//美化滚动条样式
import '@/components/PrettyScrollbar/index.css';
import messages from '@intlify/unplugin-vue-i18n/messages';
import { createI18n } from 'vue-i18n';
import VueLayoutPage from 'vue-layout-page';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
const i18n = createI18n({
  locale: 'zh-cn',
  fallbackLocale: 'zh-cn',
  messages,
});
app.use(router);
app.use(store);
app.use(i18n);
//@ts-ignore
app.use(VueLayoutPage);
app.mount('#app');
