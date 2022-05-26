import { createApp } from 'vue'
import App from './App.vue'
import WavesurferPlugin from './WavesurferPlugin';

const app = createApp(App);

app.use(WavesurferPlugin);

app.mount('#app')