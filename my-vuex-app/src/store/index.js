import { createStore } from "vuex";
import { ADD } from "../mutation-type";
import user from "./user";
import student from "./student";

const store = createStore({
  state() {
    return {
      count: 0,
      msg: "hello world",
    };
  },
  getters: {
    reverseMsg(state) {
      return state.msg.split("").reverse().join("");
    },
    reverseMsgLength(state, getters) {
      return getters.reverseMsg.length;
    },
  },
  mutations: {
    increment(state) {
      //修改状态
      state.count++;
    },
    //载荷
    [ADD](state, num) {
      state.count += num;
    },
    //载荷为对象
    add2(state, payload) {
      state.count += payload.num;
    },
  },
  actions: {
    // increment(context) {
    //   context.commit("increment");
    // },
    //使用参数解构简化代码
    increment({ commit }) {
      commit("increment");
    },
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
  },
  modules: {
    user,
    student,
  },
});
export default store;
