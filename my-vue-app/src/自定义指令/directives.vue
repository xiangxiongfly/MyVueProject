<!-- <script>
const focus = {
    mounted: (el) => el.focus()
}
export default {
    directives: {
        focus
    }
}
</script> 

<template>
    <div>
        <input v-focus />
    </div>
</template> -->

<template>
    <div>
        <div class="header" v-pos:left="100">
            <input />
        </div>
    </div>
</template>

<style>
.header {
    position: absolute;
}
</style>