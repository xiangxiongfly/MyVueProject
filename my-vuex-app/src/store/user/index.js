const user = {
  state() {
    return {
      userName: "xiaoming",
    };
  },
  getters: {
    userNameAge(state, getters, rootState) {
      return state.userName + " 18岁";
    },
  },
  mutations: {
    updateUserName(state) {
      state.userName = "小明";
    },
  },
};
export default user;
