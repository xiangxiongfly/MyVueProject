<template>
  <p v-highlight:background.delayed.blink="{
    mainColor:'red',
    secondColor:'green',
    delay:500,
  interval:1000
  }">hello world</p>
</template>