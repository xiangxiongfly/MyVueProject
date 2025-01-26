import {defineStore} from "pinia";

const useCounterStore = defineStore("counterStore", {
    state: () => {
        return {
            count: 0
        };
    },
    getters: {
        oddOrEven() {
            return this.count % 2 === 1 ? "奇数" : "偶数";
        }
    },
    actions: {
        increase(num) {
            this.count += num;
        },
        decrease(num) {
            this.count -= num;
        },
        increaseAsync(num) {
            setTimeout(() => {
                this.increase(num);
            }, 1000);
        }
    }
});

export default useCounterStore;