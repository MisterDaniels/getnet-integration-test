import Vue from "vue";
import Vuex from "vuex";
import * as company from '@/store/modules/company.js';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		company
	}
});