<script>
export default {
    data() {
        return {
            show: false,
            message: "hello world"
        }
    },
    methods: {
        handleClick() {
            this.show = !this.show;
        }
    }
}
</script>

<template>
    <div id="box2">
    </div>
    <div id="box1">
        <button @click="handleClick">点击</button>
        <Teleport to="#box2">
            <div class="mask" v-show="show">{{ message }}</div>
        </Teleport>
    </div>
</template>

<style>
.mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.5;
    color: white;
    font-size: 50px;
    text-align: center;
}
</style>