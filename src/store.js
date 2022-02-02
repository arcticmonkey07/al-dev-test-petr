import { createStore } from 'vuex';
import { children } from './store/children.js';

const store = createStore({
	modules: {
    children
	}
});

export default store;