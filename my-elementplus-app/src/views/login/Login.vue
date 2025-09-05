<script setup>
import {ref} from "vue";
import {Lock, User} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus";

// 定义引用对象
const formRef = ref();
// 定义表单数据对象
const formModel = ref({
  username: "",
  password: "",
  isRemember: false
});
// 定义规则对象
const rules = {
  username: [
    {required: true, message: "请输入用户名", trigger: "blur"},
    {min: 6, max: 10, message: "用户名必须是5~10位字符", trigger: "blur"}
  ],
  password: [
    {required: true, message: "请输入密码", trigger: "blur"},
    {pattern: /^\S{6,15}$/, message: "密码是5~15位的非空字符", trigger: "blur"}
  ]
};

const loginClick = async () => {
  await formRef.value.validate();
  const ret = `用户名：${formModel.value.password} 密码：${formModel.value.password} 是否记住：${formModel.value.isRemember}`;
  ElMessage.success(ret);
};
</script>

<template>
  <el-row class="page">
    <el-col :span="6" class="horizontal-center">
      <el-form ref="formRef" :model="formModel" :rules="rules" autocomplete="off" size="large">
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="formModel.username" :prefix-icon="User" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="formModel.password" :prefix-icon="Lock" type="password" placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item>
          <div class="flex-space-between">
            <el-checkbox v-model="formModel.isRemember">记住我</el-checkbox>
            <el-link type="primary" :underline="false">忘记密码？</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loginClick">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.el-form {
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 2rem;
  }

  .el-button {
    width: 100%;
  }
}
</style>