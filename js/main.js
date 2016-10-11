import Vue from 'vue';
import App from './components/App.vue';
import store from './state/store.js';

const main = new Vue({
    el: '#app',
    render: (c) => c('app'),
    components: {
        App
    },
    store
});

// accept replacement modules
if (module.hot) {
    module.hot.accept();
}