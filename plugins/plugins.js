import Vue from 'vue';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';

//VueLodash
Vue.use(VueLodash, { name: 'custom', lodash: lodash });
