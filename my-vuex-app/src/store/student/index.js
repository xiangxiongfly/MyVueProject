const student = {
  namespaced: true, //开启命名空间
  state() {
    return {
      userName: "xiaohei",
    };
  },
  getters: {
    userNameAge(state, getters, rootState) {
      return state.userName + " 8岁";
    },
  },
  mutations: {
    updateStudentName(state) {
      state.userName = "小黑";
    },
  },
};
export default student;
