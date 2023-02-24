<script>
import MySlot from "../components/MySlot.vue"
import MyMultiSlot from "../components/MyMultiSlot.vue"
import MyListSlot from "../components/MyListSlot.vue"
export default {
    //组件
    components: {
        MySlot,
        MyMultiSlot,
        MyListSlot
    }
}
</script>

<template>
    <!-- 单个插槽 -->
    <MySlot>
        <button>按钮</button>
    </MySlot>
    <MySlot>
        <input type="text" placeholder="请输入123">
        <input type="text" placeholder="请输入abc">
    </MySlot>

    <!-- 具名插槽，支持多个插槽 -->
    <MyMultiSlot>
        <template v-slot:a>
            <button>按钮一</button>
        </template>
        <template v-slot:b>
            <button>按钮二</button>
        </template>
        <template v-slot:c>
            <button>按钮三</button>
        </template>
    </MyMultiSlot>
    <MyMultiSlot>
        <template v-slot:a>

        </template>
        <template v-slot:b>
            <button>按钮二</button>
        </template>
        <template v-slot:c>
            <button>按钮三</button>
        </template>
    </MyMultiSlot>

    <!-- 作用域插槽，父组件替换插槽标签，但是数据由子组件提供 -->
    <!-- 无序列表 -->
    <MyListSlot>
        <template v-slot:default="slotProps">
            <p>{{ slotProps.message }}</p>
            <ul>
                <li v-for="item in slotProps.list" :key="item">{{ item }}</li>
            </ul>
        </template>
    </MyListSlot>
    <!-- 有序列表 -->
    <MyListSlot>
        <template v-slot:default="slotProps">
            <ol>
                <li v-for="item in slotProps.list" :key="item">{{ item }}</li>
            </ol>
        </template>
    </MyListSlot>
</template>

<style></style>
