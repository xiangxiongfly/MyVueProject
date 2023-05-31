<script >
import custom_store from "./custom_store"
import Home from "./views/Home.vue"

export default {
    data() {
        return {
            count: 0
        }
    },
    provide: {
        store: custom_store
    },
    components: {
        Home
    }
}
</script>

<template>
    <div>
        <a href="../src/模板语法/template.html">
            <button>模板语法</button>
        </a>
        <a href="../src/计算属性/computed.html">
            <button>计算属性</button>
        </a>
        <a href="../src/侦听器/watch.html">
            <button>侦听器</button>
        </a>
        <a href="../src/类和样式绑定/classstyle.html">
            <button>类和样式绑定</button>
        </a>
        <a href="../src/事件处理/event.html">
            <button>事件处理</button>
        </a>
        <a href="../src/双向绑定/vmodel.html">
            <button>v-model双向绑定</button>
        </a>
        <a href="../src/使用组件/use_component.html">
            <button>使用组件</button>
        </a>
        <a href="../src/使用插槽/use_slots.html">
            <button>使用插槽</button>
        </a>
        <a href="../src/组件之间跨级通信/provide_inject.html">
            <button>组件之间跨级通信</button>
        </a>
        <a href="../src/过渡和动画/transition.html">
            <button>过渡和动画</button>
        </a>
        <a href="../src/组合式API-响应式/composition_reactive.html">
            <button>组合式API-响应式</button>
        </a>
        <a href="../src/组合式API-watch/composition_watch.html">
            <button>组合式API-响应式</button>
        </a>
        <a href="../src/组合式API-computed/composition_computed.html">
            <button>组合式API-computed</button>
        </a>
        <a href="../src/组合式API-使用props/composition_props.html">
            <button>组合式API-使用props</button>
        </a>
        <a href="../src/组合式API-provide_inject/composition_provide_inject.html">
            <button>组合式API-provide_inject</button>
        </a>
        <a href="../src/组合式API-setup/composition_setup.html">
            <button>组合式API-setup</button>
        </a>
    </div>
    <p>{{ count }}</p>
    <button @click="count++">count++</button>

    <p>
        自定义状态管理：
        <Home></Home>
    </p>
</template>

<style></style>
