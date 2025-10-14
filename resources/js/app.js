import './bootstrap';
import '../css/app.css';
import { createApp, reactive } from 'vue';
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
const globalState = reactive({
  loginSuccess: false
});


app.config.globalProperties.$systemName = 'IT Ops Queuing System';

app.config.globalProperties.$globalState = globalState;
/* in any component */
/* 

<script setup>
import { getCurrentInstance } from 'vue'
const { appContext } = getCurrentInstance()
const globalState = appContext.config.globalProperties.$globalState

function onLoginSuccess() {
  globalState.loginSuccess = true
}
</script>

<template>
  <div v-if="globalState.loginSuccess">
    ✅ Logged in successfully!
  </div>
</template>


*/



// Register FontAwesomeIcon component globally
app.component('FontAwesomeIcon', FontAwesomeIcon);


app.use(router).mount('#app');