<script setup>
import {ref} from "vue";
import {Lock, User} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus";

const form = ref();
const formModel = ref({
  username: "",
  password: "",
  repassword: "",
});
const rules = {
  username: [
    {required: true, message: "请输入用户名", trigger: "blur"},
    {min: 5, max: 10, message: "用户名必须是5~10位字符", trigger: "blur"},
  ],
  password: [
    {required: true, message: "请输入密码", trigger: "blur"},
    {pattern: /^\S{6,15}$/, message: "密码必须是5~15位非空字符", trigger: "blur"}
  ],
  repassword: [
    {required: true, message: "请再次输入密码", trigger: "blur"},
    {pattern: /^\S{6,15}$/, message: "密码必须是6~15位非空字符", trigger: "blur"},
    {
      validator: (rule, value, callback) => {
        if (value !== formModel.value.password) {
          callback(new Error("两次密码不一致！"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ]
};

const registerClick = async () => {
  await form.value.validate();
  const ret = `用户名：${formModel.value.username} 密码：${formModel.value.password} 再次密码：${formModel.value.repassword}`;
  ElMessage.success(ret);
};
</script>

<template>
  <el-row class="page">
    <el-col :span="6" class="horizontal-center">
      <el-form ref="form" :model="formModel" :rules="rules" autocomplete="off">
        <el-form-item size="large">
          <h1>注册</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="formModel.username" :prefix-icon="User" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="formModel.password" :prefix-icon="Lock" placeholder="请输入密码"
                    type="password"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input v-model="formModel.repassword" :prefix-icon="Lock" placeholder="请再次输入密码"
                    type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="primary" auto-insert-space @click="registerClick">注册</el-button>
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