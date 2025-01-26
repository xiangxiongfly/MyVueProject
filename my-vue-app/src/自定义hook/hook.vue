<script setup>
import {markRaw, ref} from "vue";
import Comp1 from "./components/Comp1.vue";
import Comp2 from "./components/Comp2.vue";

const tab = ref(null);

function changeTab(comp) {
  tab.value = markRaw(comp);
}

changeTab(Comp1);
</script>

<template>
  <h1>自定义hook</h1>
  <button @click="changeTab(Comp1)">Comp1</button>
  <button @click="changeTab(Comp2)">Comp2</button>
  <component :is="tab"></component>
</template>
