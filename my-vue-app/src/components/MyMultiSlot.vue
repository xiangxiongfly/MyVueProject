<template>
  <h2>使用具名插槽</h2>
  <div>
    <slot name="a"><button>默认按钮</button></slot>
    <slot name="b"></slot>
    <slot name="c"></slot>
  </div>
</template>
