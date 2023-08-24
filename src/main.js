import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

const videoContainer = document.querySelector(".wrapper");
const title = document.querySelector(".title");

const LERP_ALPHA = 0.5;

let titlePos = {
  x: -50,
  y: -50
};

videoContainer.addEventListener("mousemove", (e) => {
  const x = -50 + ((e.pageX - innerWidth / 2) / (innerWidth / 2)) * 2;
  const y = -50 + ((e.pageY - innerHeight / 2) / (innerHeight / 2)) * 2;

  titlePos.x = titlePos.x * (1 - LERP_ALPHA) + x * LERP_ALPHA;
  titlePos.y = titlePos.y * (1 - LERP_ALPHA) + y * LERP_ALPHA;
});

videoContainer.addEventListener("mouseout", (e) => {
  titlePos.x = titlePos.x * (1 - LERP_ALPHA) + -50 * LERP_ALPHA;
  titlePos.y = titlePos.y * (1 - LERP_ALPHA) + -50 * LERP_ALPHA;
});

setInterval(function () {
  title.style.transform = `translate(${titlePos.x}%, ${titlePos.y}%)`;
}, 10);

document.addEventListener("contextmenu", (event) => event.preventDefault());


