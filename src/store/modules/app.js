const app = {
  state: {
    isLoading:false,
    isLogin:false,
    alertstate:[]
  },
  mutations: {
    //讀取中
    LOGIN(state){
      state.isLogin = true;
    },
    //關閉讀取中
    CHANGE_LOADING: (state,loadingstate) => {
      state.isLoading = loadingstate;
    },
    //
    CHANGE_ALERT: (state,alertstate) => {
      state.alertstate = alertstate;
    }
  },
  actions: {
    // Change Loading
    ChangeLoading: ({ commit },{ loadingstate }) => {
      console.log(loadingstate);
      commit('CHANGE_LOADING',loadingstate);
    },
    // Change login
    loginByUserName({ commit }, userinfo) {
      return new Promise(resole => {
        setTimeout(() => {
          commit('LOGIN');
          resole();
        }, 1000);
      });
    },
    // Alert
    ChangeAlert({ commit }, data) {
      return new Promise(resole => {
        setTimeout(() => {
          commit('CHANGE_ALERT',loadingstate);
          resole();
        }, 1000);
      });
    }
  }
};

export default app;