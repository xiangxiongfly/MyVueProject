<script setup>
import {markRaw, ref} from "vue";
import Comp1 from "./components/Comp1.vue";
import Comp2 from "./components/Comp2.vue";
import Comp3 from "./components/Comp3.vue";

// 标记为原始对象，表示内部不能被修改
const tab = ref(markRaw(Comp1));

// 切换组件
function switchTab(comp) {
  tab.value = markRaw(comp);
}

// 默认显示
switchTab(Comp1);
</script>

<template>
  <h1>内置组件之component</h1>
  <button @click="switchTab(Comp1)">切换组件一</button>
  <button @click="switchTab(Comp2)">切换组件二</button>
  <button @click="switchTab(Comp3)">切换组件三</button>
  <component :is="tab"></component>
</template>