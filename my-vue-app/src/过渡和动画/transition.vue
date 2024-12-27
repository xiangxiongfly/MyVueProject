<script>
export default {
  data() {
    return {
      show: false,
      elWidth: 100,
      numbers: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    handleClick() {
      this.show = !this.show;
    },
    beforeEnter(el) {
      // 设置初始宽度
      this.elWidth = 100
      el.style.width = this.elWidth + "px"
    },
    enter(el, done) {
      let count = 1
      // 每间隔20ms宽度增加10px
      const interval = setInterval(() => {
        el.style.width = this.elWidth + count * 10 + "px"
        count++;
        if (count > 20) {
          clearInterval(interval)
          done() // 动画完成
        }
      }, 20)
    },
    beforeLeave(el) {
      this.elWidth = 300
      el.style.width = this.elWidth + "px"
    },
    leave(el, done) {
      let count = 1
      // 每间隔20ms宽度减少10px
      const interval = setInterval(() => {
        el.style.width = this.elWidth - count * 10 + "px"
        count++;
        if (count > 20) {
          clearInterval(interval)
          done() // 动画完成
        }
      }, 20)
    },
    // 随机添加一个元素
    addItem() {
      const randomPosition = Math.floor(Math.random() * this.numbers.length)
      this.numbers.splice(randomPosition, 0, this.numbers.length + 1)
    },
    // 删除元素
    deleteItem(index) {
      this.numbers.splice(index, 1)
    }
  }
}
</script>

<template>
  <h1>过渡和动画</h1>
  <h2>过渡动画和过渡动画重命名</h2>
  <transition>
    <div v-if="show">hello</div>
  </transition>
  <transition name="abcd">
    <div v-if="show">world</div>
  </transition>
  <h2>逐帧动画</h2>
  <transition name="myslide">
    <div v-if="show">hello world</div>
  </transition>
  <h2>自定义动画</h2>
  <transition enter-active-class="myenter" leave-active-class="myout">
    <div v-if="show">hello 自定义动画</div>
  </transition>
  <h2>基于JavaScript的动画</h2>
  <transition :css="false" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
    <div style="width:100px;height:100px;background-color: green;" v-if="show">hello 基于JavaScript的动画</div>
  </transition>
  <button @click="handleClick">切换 {{ show }}</button>
  <h2>transition-group</h2>
  <transition-group tag="ul" enter-active-class="myenter" leave-active-class="myout">
    <li v-for="(number,index) in numbers" :key="number">
      {{ number }}
      <button @click="deleteItem(index)">删除</button>
    </li>
  </transition-group>
  <button @click="addItem">添加元素</button>
</template>

<style>
/* 开始动画 */
.abcd-enter-from {
  opacity: 0;
}

.abcd-enter-active {
  transition: opacity 6s ease-out;
}

.abcd-enter-to {
  opacity: 1;
}

/* 结束动画 */
.abcd-leave-from {
  opacity: 1;
}

.abcd-leave-active {
  transition: opacity 6s ease-in;
}


.abcd-leave-to {
  opacity: 0;
}

@keyframes slide-in {
  0% {
    transform: translateX(100px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100px);
  }
}

.myslide-enter-active {
  animation: slide-in 6s ease;
}

.myslide-leave-active {
  animation: slide-out 6s ease;
}

@keyframes anim-scale {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(2);
  }
}

.myenter {
  animation: anim-scale 3s;
}

.myout {
  animation: anim-scale 3s reverse;
}
</style>