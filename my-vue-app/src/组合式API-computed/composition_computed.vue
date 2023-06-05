<script >
import { ref, reactive, computed } from 'vue'
export default {
    setup() {
        const msg = ref("hello");
        //计算属性
        const reverseMsg = computed(() => {
            return msg.value.split("").reverse().join("");
        });

        //计算属性
        const name = ref("小明");
        const age = ref(18);
        const userInfo = computed({
            get() {
                return name.value + "-" + age.value;
            },
            set(newValue) {
                [name.value, age.value] = newValue.split(",");
            }
        })
        function handleClick() {
            userInfo.value = "小红,38";
        }

        //计算属性
        const userObj = reactive({
            name: "小白",
            age: 10
        });
        const userComputed = computed({
            get() {
                return userObj.name + "-" + userObj.age;
            },
            set(newValue) {
                [userObj.name, userObj.age] = newValue.split(",");
            }
        })
        function handleClick2() {
            userComputed.value = "小黑,20";
        }

        return { msg, reverseMsg, userInfo, handleClick, userComputed, handleClick2 };
    }
}
</script>

<template>
    <p> {{ msg }}</p>
    <p> {{ reverseMsg }}</p>
    <div>
        <p> {{ userInfo }}</p>
        <button @click="handleClick">点击</button>
    </div>
    <div>
        <p>{{ userComputed }}</p>
        <button @click="handleClick2">点击2</button>
    </div>
</template>