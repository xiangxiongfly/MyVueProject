<script>
const myMixin = {
    number: 222,
    data() {
        return { num: 456 }
    },
    methods: {
        handleClick() {
            console.log("myMixin handleClick");
        }
    },
    created() {
        console.log("myMixin created");
    }
}
export default {
    mixins: [myMixin],
    number: 111,
    data() {
        return {
            num: 123,
        }
    },
    methods: {
        handleClick() {
            console.log("handleClick");
        }
    },
    created() {
        console.log("created");
    }
}
</script>

<template>
    <div>
        <div>{{ num }}</div>
        <div>{{ this.$options.number }}</div>
        <button @click="handleClick">点击</button>
    </div>
</template>