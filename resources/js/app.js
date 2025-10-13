import './bootstrap';
import '../css/app.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(fas);

const app = createApp(App);


// Register globally
app.config.globalProperties.$systemName = 'IT Ops Queuing System';

app.component('FontAwesomeIcon', FontAwesomeIcon);


app.use(router).mount('#app');