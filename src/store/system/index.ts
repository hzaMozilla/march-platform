const state = {
  system: {}
};
const getters = {
  isIos: (store) => {
    return false;
  }
};
const mutations = {
  setSystemInfo (state, systemInfo) {
    state.system = systemInfo;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
