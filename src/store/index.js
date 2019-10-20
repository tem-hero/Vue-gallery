import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isModalShowed: false,
        isPostShowed: false
    },
    getters: {},
    actions: {},
    mutations: {
        showModal(state) {
            state.isModalShowed = true;
        },
        hideModal(state) {
            state.isModalShowed = false;
        },
        showPost(state) {
            state.isPostShowed = true;
        },
        hidePost(state) {
            state.isPostShowed = false;
        }
    }
})