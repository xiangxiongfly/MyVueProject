import { defineStore } from "pinia";
import { computed, ref } from "vue";

// 使用选项式API
export const useUserStore = defineStore("user", {
  //类似于data
  state: () => {
    return { name: "小明", age: 30, address: "北京", arr: [1, 2, 3] };
  },
  //类似于computed
  getters: {
    gettersAge: (state) => {
      console.log("state", state);
      return state.age + 10;
    },
    //this指向store
    gettersAge2() {
      console.log("this", this);
      return this.age + 10;
    },
    gettersNameAge: (state) => {
      return state.name + "-" + state.age;
    },
    gettersOther() {
      //调用其他state
      const counterStore = useCounterStore();
      return this.age + counterStore.counter;
    },
  },
  //类似于methods
  actions: {
    //不能使用箭头函数
    addAge() {
      //this指向store
      this.age++;
    },
  },
});

// 使用组合式API
export const useCounterStore = defineStore(
  "counter",
  () => {
    // state
    const counter = ref(30);
    const num = ref(10);

    // getters
    const gettersCounter = computed(() => {
      return counter.value + 5;
    });
    // actions
    function addCounter() {
      counter.value++;
    }
    function subCounter() {
      counter.value--;
    }
    function addNum() {
      num.value++;
    }
    return { counter, num, gettersCounter, addCounter, subCounter, addNum };
  },
  {
    persist: {
      key: "hello", // 唯一标识
      paths: ["num"], //只保持num
    },
  }
);
