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
        <a href="../src/生命周期/lifecycle.html">
            <button>生命周期</button>
        </a>
        <a href="../src/模板语法/template_options.html">
            <button>模板语法(Options)</button>
        </a>
        <a href="../src/模板语法/template_composition.html">
            <button>模板语法(Composition)</button>
        </a>
        <a href="../src/计算属性/computed_options.html">
            <button>计算属性(Options)</button>
        </a>
        <a href="../src/计算属性/computed_composition.html">
            <button>计算属性(Composition)</button>
        </a>
        <a href="../src/侦听器/watch_options.html">
            <button>侦听器(Options)</button>
        </a>
        <a href="../src/侦听器/watch_composition.html">
            <button>侦听器(Composition)</button>
        </a>
        <a href="../src/v-on/v-on.html">
            <button>v-on</button>
        </a>
        <a href="../src/v-bind/v-bind.html">
            <button>v-bind</button>
        </a>
        <a href="../src/v-model/v-model.html">
            <button>v-model</button>
        </a>
        <a href="../src/使用组件/use_component.html">
            <button>使用组件</button>
        </a>
        <a href="../src/使用插槽/use_slots.html">
            <button>使用插槽</button>
        </a>
        <a href="../src/组件之间父子通信/props_options.html">
            <button>组件之间父子通信(Options)</button>
        </a>
        <a href="../src/组件之间父子通信/props_composition.html">
            <button>组件之间父子通信(Composition)</button>
        </a>
        <a href="../src/组件之间跨级通信/provide_inject_options.html">
            <button>组件之间跨级通信(Options)</button>
        </a>
        <a href="../src/组件之间跨级通信/provide_inject_composition.html">
            <button>组件之间跨级通信(Composition)</button>
        </a>
        <a href="../src/过渡和动画/transition.html">
            <button>过渡和动画</button>
        </a>
        <a href="../src/混入mixins/mixin.html">
            <button>mixins</button>
        </a>
        <a href="../src/自定义指令/directives.html">
            <button>自定义指令</button>
        </a>
        <a href="../src/传送门teleport/teleport.html">
            <button>传送门</button>
        </a>
        <a href="../src/ref_reactive/ref_reactive.html">
            <button>ref & reactive</button>
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
