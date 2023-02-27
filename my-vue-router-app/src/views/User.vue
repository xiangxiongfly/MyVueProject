<script>
export default {
    data() {
        return {
            id: ""
        }
    },
    mounted() {
        console.log(this.$route.params); // {id: '123'}
        this.id = this.$route.params.id;
    }
}
</script>

<template>
    <p>用户 {{ id }}</p>
</template>