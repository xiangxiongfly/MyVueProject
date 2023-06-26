<!-- <script>
export default {
    data() {
        return {
            name: "",
            age: 0
        }
    },
    mounted() {
        //接收数据
        const params = this.$route.params;
        console.log(params); //{name: '小明', age: '18'}
        this.name = params.name;
        this.age = params.age;
    }
}

</script>
<template>
    <h2>About页面</h2>
    <p>name:{{ name }} age:{{ age }}</p>
</template> -->


<script>
import { ref } from "vue";
import { useRoute } from 'vue-router';
export default {
    setup() {
        const name = ref("")
        const age = ref(0)
        const route = useRoute()
        name.value = route.params.name
        age.value = route.params.age
        return {
            name, age
        }
    }
}

</script>
<template>
    <h2>About页面</h2>
    <p>name:{{ name }} age:{{ age }}</p>
</template>