const user = {
    state: {
        name: "小明",
        age: 18
    },
    getters: {
        ageOddOrEven(state) {
            return state.age % 2 === 1 ? "奇数" : "偶数";
        }
    },
    mutations: {
        increaseAge(state, num) {
            state.age += num;
        },
        changeName(state, name) {
            state.name += name;
        }
    },
    actions: {
        increaseAgeAsync(context, num) {
            setTimeout(() => {
                context.commit('increaseAge', num);
            }, 1000);
        },
        changeNameAsync({commit}, name) {
            setTimeout(() => {
                commit('changeName', name);
            }, 1000);
        }
    }
};

export default user;