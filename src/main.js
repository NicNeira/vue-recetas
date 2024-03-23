import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiMusicPlayer, FcGlobe, OiRepoPull, ViFileTypeGridsome } from 'oh-vue-icons/icons';

// Asegúrate de usar los nombres correctos de los íconos
addIcons(BiMusicPlayer, FcGlobe, OiRepoPull, ViFileTypeGridsome);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
createApp(App).mount('#app')
