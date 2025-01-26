import {computed, ref, watch} from "vue";

export default (initCount = 0) => {
    const msg = ref("hello world");
    const count = ref(initCount);
    const increase = () => {
        count.value++;
    };
    const doubleCount = computed(() => {
        return count.value * 2;
    });
    watch(doubleCount, (newVal, oldVal) => {
        console.log("doubleCount发生变化了", newVal, oldVal);
    });
    return {
        msg,
        count,
        increase,
        doubleCount,
    };
}