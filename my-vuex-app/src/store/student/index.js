const student = {
    namespaced: true, // 开启命名空间
    state: {
        age: 18
    },
    getters: {
        oddOrEven(state) {
            return state.age % 2 === 1 ? "奇数" : "偶数";
        }
    },
    mutations: {
        increaseAge(state, num) {
            state.age += num;
        }
    },
    actions: {
        increaseAgeAsync(context, num) {
            setTimeout(() => {
                context.commit('increaseAge', num);
            }, 1000);
        }
    }
};

export default student;