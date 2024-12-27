<script>
export default {
    data() {
        return {
            msg: "hello",
            msg2: "world",
            userInfo: {
                account: "",
                password: "",
                age: 18,
                sex: "boy",
                hobby: ["study"],
                city: "beijing",
                other: "",
                agree: false
            },
            desc1: "",
            desc2: "",
            desc3: "",
        }
    },
    methods: {
        onConfirm() {
            alert(`用户信息：${JSON.stringify(this.userInfo)}`)
        }
    }
}
</script>

<template>
    <h1>v-model</h1>
    <h2>使用双向绑定</h2>
    <input type="text" v-model="msg">
    <h2>双向绑定原理</h2>
    <input type="text" :value="msg2" @input="msg2 = $event.target.value">
    <h2>表单提交</h2>
    <form @submit.prevent="onConfirm">
        账号：<input type="text" v-model="userInfo.account"> <br>
        密码：<input type="password" v-model="userInfo.password"> <br>
        年龄：<input type="number" v-model="userInfo.age"> <br>
        性别：
        男<input type="radio" name="sex" value="boy" v-model="userInfo.sex">
        女<input type="radio" name="sex" value="girl" v-model="userInfo.sex"><br>
        爱好：
        学习<input type="checkbox" value="study" v-model="userInfo.hobby">
        游戏<input type="checkbox" value="game" v-model="userInfo.hobby">
        运动<input type="checkbox" value="sport" v-model="userInfo.hobby">
        <br>
        所在城市：
        <select type="text" v-model="userInfo.city">
            <option value="">选择城市</option>
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="guangzhou">广州</option>
        </select>
        <br>
        其他信息：<textarea v-model="userInfo.other"></textarea> <br>
        同意：<input type="checkbox" v-model="userInfo.agree"><a href="www.baidu.com">《用户协议》</a><br>
        <button>提交</button>
    </form>
    <div>用户信息：{{ userInfo }}</div>
    <h2>指令修饰符</h2>
    <form>
        .lazy: <input type="text" v-model.lazy="desc1"><br>
        .trim: <input type="text" v-model.trim="desc2"><br>
        .number: <input type="text" v-model.number="desc3"><br>
    </form>
    <div>输出预览1：{{ desc1 }}</div>
    <div>输出预览2：{{ desc2 }}</div>
    <div>输出预览3：{{ desc3 }}</div>
</template>