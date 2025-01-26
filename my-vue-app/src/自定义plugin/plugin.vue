<template>
  <Header></Header>
  <p v-upper:large="'hello large'"></p>
  <p v-upper:medium="'hello medium'"></p>
  <p v-upper:small="'hello small'"></p>
  <p>{{ globalMethod("Hello World") }}</p>
</template>
