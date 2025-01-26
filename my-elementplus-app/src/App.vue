<script setup>
import {reactive, ref} from 'vue';

// 按需导入需要删除：
import {ElMessage} from 'element-plus';

const formRef = ref(null);

// 表单数据
const formData = reactive({
  username: '',
  email: '',
  age: 18,
  occupation: 'secrecy'
});

// 表单验证规则
const rules = {
  username: [
    {required: true, message: '请输入用户名', trigger: 'blur'},
    {min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur'}
  ],
  email: [
    {required: true, message: '请输入邮箱地址', trigger: 'blur'},
    {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'}
  ],
  age: [
    {required: true, message: '请输入年龄', trigger: 'blur'}
  ],
  occupation: [
    {required: true, message: '请选择职业', trigger: 'change'}
  ]
};

// 提交表单
const submitForm = async () => {
  if (!formRef.value) return;

  try {
    await formRef.value.validate();
    // 这里可以添加您的提交逻辑
    console.log('表单提交的数据：', formData);
    ElMessage.success('提交成功！');
  } catch (error) {
    console.error('表单验证失败：', error);
    ElMessage.error('请检查表单填写是否正确');
  }
};

// 重置表单
const resetForm = () => {
  if (!formRef.value) return;
  formRef.value.resetFields();
};
</script>

<template>
  <div class="container">
    <el-form
        ref="formRef"
        :model="formData"
        :rules="rules"
        label-width="120px"
        class="demo-form">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="formData.username" placeholder="请输入用户名"/>
      </el-form-item>

      <el-form-item label="邮箱" prop="email">
        <el-input v-model="formData.email" placeholder="请输入邮箱"/>
      </el-form-item>

      <el-form-item label="年龄" prop="age">
        <el-input-number v-model="formData.age" :min="1" :max="120"/>
      </el-form-item>

      <el-form-item label="职业" prop="occupation">
        <el-select v-model="formData.occupation" placeholder="请选择职业">
          <el-option label="保密" value="secrecy"/>
          <el-option label="开发者" value="developer"/>
          <el-option label="设计师" value="designer"/>
          <el-option label="产品经理" value="product_manager"/>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.demo-form {
  max-width: 660px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>