import {defineStore} from "pinia";
import {computed, ref} from "vue";

// const useCounterStore = defineStore("counterStore", {
//     state: () => {
//         return {
//             count: 0
//         };
//     },
//     getters: {
//         oddOrEven() {
//             return this.count % 2 === 1 ? "奇数" : "偶数";
//         }
//     },
//     actions: {
//         increase(num) {
//             this.count += num;
//         },
//         decrease(num) {
//             this.count -= num;
//         },
//         increaseAsync(num) {
//             setTimeout(() => {
//                 this.increase(num);
//             }, 1000);
//         }
//     }
// });
//
// export default useCounterStore;

export const useCounterStore = defineStore("counterStore", () => {
    const count = ref(0);

    const oddOrEven = computed(() => {
        return count.value % 2 === 1 ? "奇数" : "偶数";
    });

    function increase(num) {
        count.value += num;
    }

    function decrease(num) {
        count.value -= num;
    }

    function increaseAsync(num) {
        setTimeout(() => {
            increase(num);
        }, 1000);
    }

    return {
        count, oddOrEven, increase, decrease, increaseAsync
    };
});