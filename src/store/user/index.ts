const state = {
  userInfo: {
    avatarUrl: '',
    city: '',
    gender: 1,
    nickName: '小安同学',
    province: ''
  },
  BasicsInfo: {
    cloudID: 0,
    encryptedData: {},
    errMsg: 'getUserInfo:ok',
    iv: '',
    rawData: '',
    signature: ''
  }
};
const mutations = {
  setUserInfo (state, { userInfo, ...BasicsInfo }) {
    state.userInfo = userInfo;
    state.basicsInfo = BasicsInfo;
  }
};
export default {
  namespaced: true,
  state,
  mutations
};
