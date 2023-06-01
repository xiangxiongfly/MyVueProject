<!-- 简单使用 -->
<!-- <script>
export default {
    data() {
        return {
            show: false,
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
    <div>
        <transition>
            <div v-if="show">hello world</div>
        </transition>
        <button @click="handleClick">切换</button>
    </div>
</template>
<style>
/* 简单使用 */
/* 入场效果 */
.v-enter-from {
    opacity: 0;
}

/* 定义过渡效果 */
.v-enter-active {
    transition: opacity 3s ease-out;
}

.v-enter-to {
    opacity: 1;
}

/* 出场效果 */
.v-leave-from {
    opacity: 1;
}

.v-leave-active {
    transition: opacity 3s ease-in;
}

.v-leave-to {
    opacity: 0;
}
</style> -->
<!-- 简单使用 -->

<!-- 过渡效果命名 -->
<!-- <script>
export default {
    data() {
        return {
            show: false,
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
    <div>
        <transition name="abc">
            <div v-if="show">hello world222</div>
        </transition>
        <button @click="handleClick">切换</button>
    </div>
</template>
<style>
@keyframes my-anim {
    0% {
        transform: translateX(50px);
    }

    50% {
        transform: translateX(-50px);
    }

    100% {
        transform: translateX(50px);
    }
}

.abc-enter-active {
    animation: my-anim 3s;
}

.abc-leave-active {
    animation: my-anim 3s ease-out;
}
</style> -->
<!-- 过渡效果命名 -->

<!-- 自定义过渡class -->
<!-- <script>
export default {
    data() {
        return {
            show: false,
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
    <div>
        <transition enter-active-class="myenter" leave-active-class="myleave">
            <div v-if="show">hello world333</div>
        </transition>
        <button @click="handleClick">切换</button>
    </div>
</template>
<style>
@keyframes my-anim {
    0% {
        transform: translateX(50px);
    }

    50% {
        transform: translateX(-50px);
    }

    100% {
        transform: translateX(50px);
    }
}

.myenter {
    animation: my-anim 3s;
}

.myleave {
    animation: my-anim 3s;
}
</style> -->
<!-- 自定义过渡class -->

<!-- JavaScript钩子 -->
<!-- <script>
export default {
    data() {
        return {
            show: false,
        }
    },
    methods: {
        handleClick() {
            this.show = !this.show;
        },
        handleBeforeEnter(el) {
            el.style.color = "red";
        },
        handleEnter(el, done) {
            let animation = setInterval(() => {
                let color = el.style.color;
                if (color === "red") {
                    el.style.color = "green";
                } else {
                    el.style.color = "red";
                }
            }, 1000)
            setTimeout(() => {
                clearInterval(animation);
                done(); //通知动画结束
            }, 3000)
        },
        handleAfterEnter(el) {
            alert("结束")
        },
    }
}
</script>
<template>
    <div>
        <transition :css="false" @before-enter="handleBeforeEnter" @enter="handleEnter" @after-enter="handleAfterEnter">
            <div v-if="show">hello world444</div>
        </transition>
        <button @click="handleClick">切换</button>
    </div>
</template> -->
<!-- JavaScript钩子 -->

<!-- 元素间过渡 -->
<!-- <script>
export default {
    data() {
        return {
            show: false,
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
    <div>
        <transition mode="out-in" appear>
            <div v-if="show">hello</div>
            <div v-else="show">world</div>
        </transition>
        <button @click="handleClick">切换</button>
    </div>
</template>
<style>
.v-enter-to,
.v-leave-from {
    opacity: 1;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease-in;
}
</style> -->
<!-- 元素间过渡 -->

<!-- 列表动画 -->
<!-- <script>
export default {
    data() {
        return {
            list: [1, 2, 3]
        }
    },
    methods: {
        handleClick() {
            this.list.unshift(this.list.length + 1);
        }
    }
}
</script>
<template>
    <div>
        <transition-group>
            <span class="list-item" v-for="item in list" :key="item">{{ item }}</span>
        </transition-group>
        <button @click="handleClick">添加</button>
    </div>
</template>
<style>
.list-item {
    display: inline-block;
    margin-right: 10px;
}

.v-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.v-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.v-enter-active {
    transition: all 0.5s ease-in;
}

.v-move {
    transition: all 0.5s ease-in;
}
</style> -->
<!-- 列表动画 -->

<!-- 状态动画 -->
<script>
export default {
    data() {
        return {
            animNum: 1
        }
    },
    methods: {
        handleClick() {
            if (this.animNum < 10) {
                let interval = setInterval(() => {
                    this.animNum++;
                    if (this.animNum === 10) {
                        clearInterval(interval);
                    }
                }, 100);
            }
        }
    }
}
</script>
<template>
    <div>
        <transition-group>
            <div>{{ animNum }}</div>
        </transition-group>
        <button @click="handleClick">添加</button>
    </div>
</template>
<!-- 状态动画 -->