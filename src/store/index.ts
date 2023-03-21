import { createStore } from 'vuex';
// import createPersistedstate from "vuex-persistedstate";
import systemInfo from './system';
import userInfo from './user';
const mutations = {
  setTicket (state, ticket) {
    state.ticket = ticket;
  },
  setUser (state, user) {
    state.user = user;
  }
};
export default createStore({
  modules: {
    user: userInfo,
    system: systemInfo
  },
  mutations
});
