<script setup>
import {ref} from "vue";
import axios from "axios";

const url = "/path/banner/json";

function ajax(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          // 请求失败
          reject(new Error(`请求失败：${xhr.status} - ${xhr.statusText}`));
        }
      }
    };
    xhr.send();
  });
}

function handleAjax() {
  requestTool.value = "ajax";
  list.value = [];
  ajax(url)
      .then((res) => {
        list.value = res.data;
      })
      .catch((err) => {
        alert(err.message);
      });
}

function handleFetch() {
  requestTool.value = "fetch";
  list.value = [];
  fetch(url).then(res => res.json())
      .then((res) => {
        list.value = res.data;
      })
      .catch((err) => {
        alert(err.message);
      });
}

function handleAxios() {
  requestTool.value = "axios";
  list.value = [];
  axios.get(url).then(res => {
    list.value = res.data.data;
  }).catch((err) => {
    alert(err.message);
  });
}

const list = ref([]);
const requestTool = ref("ajax");

</script>

<template>
  <h1>网络请求</h1>
  <p> {{ requestTool }} </p>
  <button @click="handleAjax">ajax</button>
  <button @click="handleFetch">fetch</button>
  <button @click="handleAxios">axios</button>
  <ul>
    <li v-for="item in list" :key="item.id">
      <span>{{ item.title }}</span>
      <img style="width: 150px;" :src="item.imagePath" alt="">
    </li>
  </ul>
</template>
