import {createStore} from 'vuex';
import user from "@/store/user/index.js";
import student from "@/store/student/index.js";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    // 状态
    state: {
        count: 0
    },
    // 计算属性
    getters: {
        addOrEven(state) {
            return state.count % 2 === 1 ? "奇数" : "偶数";
        }
    },
    // 更新状态方法
    mutations: {
        increase(state, num) {
            state.count += num;
        },
        decrease(state, num) {
            state.count -= num;
        }
    },
    // 异步或同步更新状态方法
    actions: {
        increaseAsync({commit}, num) {
            setTimeout(() => {
                commit('increase', num);
            }, 1000);
        },
        decreaseAsync(context, num) {
            setTimeout(() => {
                context.commit('decrease', num);
            }, 1000);
        },
    },
    // 配置模块
    modules: {
        user,
        student,
    },
    // 配置插件
    plugins: [
        // createPersistedState() // 持久化缓存所有状态
        createPersistedState({
            paths: ["student"], // 只缓存student模块
        })
    ]
});

export default store;