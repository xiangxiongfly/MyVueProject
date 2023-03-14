import { defineStore } from "pinia";
import { computed, ref } from "vue";

//使用选项API
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
    gettersAge2() {
      //this指向store
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

//使用setup
export const useCounterStore = defineStore("counter", () => {
  //相当于state
  const counter = ref(30);
  //相当于getters
  const gettersCounter = computed(() => {
    return counter.value + 5;
  });
  //相当于actions
  function addCounter() {
    counter.value++;
  }
  return { counter, gettersCounter, addCounter };
});
