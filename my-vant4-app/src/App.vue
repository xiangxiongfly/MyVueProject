<script setup>
import {reactive} from 'vue';
import {showToast} from 'vant';

// 表单数据
const formData = reactive({
  username: '',
  phone: '',
  password: '',
  remark: ''
});

// 提交表单
const onSubmit = (values) => {
  console.log('表单数据：', values);
  // 这里可以添加您的提交逻辑，例如发送 API 请求
  showToast({
    type: 'success',
    message: '提交成功'
  });
};
</script>

<template>
  <div class="submit-form">
    <van-form @submit="onSubmit">
      <!-- 用户名输入 -->
      <van-cell-group inset>
        <!-- 用户名输入 -->
        <van-field
            v-model="formData.username"
            name="username"
            label="用户名"
            placeholder="请输入用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"/>

        <!-- 手机号输入 -->
        <van-field
            v-model="formData.phone"
            name="phone"
            label="手机号"
            placeholder="请输入手机号"
            :rules="[
            { required: true, message: '请填写手机号' },
            { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' }
          ]"/>

        <!-- 密码输入 -->
        <van-field
            v-model="formData.password"
            type="password"
            name="password"
            label="密码"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"/>

        <!-- 备注信息 -->
        <van-field
            v-model="formData.remark"
            name="remark"
            label="备注"
            type="textarea"
            placeholder="请输入备注信息"
            rows="2"
            maxlength="50"
            show-word-limit/>
      </van-cell-group>

      <!-- 提交按钮 -->
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style scoped>
.submit-form {
  padding: 16px 0;
}
</style>