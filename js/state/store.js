import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    oldMessages: [],
    message: 'Hello JavaScript Lj Meetup people'
};

// actions can perform async calls
// (e.g., send message to database or other connected sockets)
const actions = {
    addMessage({ commit }, message) {
        commit('addMessage', message);
    },
    deleteMessage({ commit }, index) {
        commit('deleteMessage', index);
    }
};

// mutations are always synchronous
const mutations = {
    addMessage(state, message) {
        state.oldMessages.unshift(state.message);
        state.message = message;
    },
    deleteMessage(state, index) {
        state.oldMessages.splice(index, 1);
    },
    deleteAllMessages(state) {
        state.oldMessages = [];
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions
});