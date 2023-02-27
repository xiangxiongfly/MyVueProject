<script>
import { inject } from "vue"
export default {
    setup() {
        const name = inject("name");
        const userName = inject("userName");
        return { name, userName };
    }
}
</script>
<template>
    <h3>组合式API-子组件</h3>
    <p>{{ name }}</p>
    <p>{{ userName }}</p>
</template>