<script setup>
import Data from "@/data/index.js";
import {Delete, Edit} from "@element-plus/icons-vue";
import {ref} from "vue";
import {ElMessage, ElMessageBox} from "element-plus";

const formRef = ref();
const dialogVisible = ref(false);
const articleList = ref([]);
articleList.value = Data.getArticles();

const formModel = ref({
  index: "",
  name: "",
  number: "",
  price: "",
});
const rules = {
  name: [
    {required: true, message: "请输入文章名", trigger: "blur"},
    {pattern: /^\S{1,10}$/, message: "文章名必须是1~10位的非空字符"}
  ],
  number: [
    {required: true, message: "请输入数量", trigger: "blur"},
    {pattern: /^\d{1,10}$/, message: "数量必须是1~10位的数字"}
  ],
  price: [
    {required: true, message: "请输入价格", trigger: "blur"},
    {pattern: /^(?!0\d)\d+(\.\d{1,2})?$/, message: "价格必须是整数或2位小数"}
  ]
};

const onEdit = (index, article) => {
  dialogVisible.value = true;
  formModel.value = {...article, index};
};
const onDelete = (index) => {
  ElMessageBox.confirm("您确定删除这条数据吗？", "提示", {
    type: "warning",
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    callback: (action) => {
      if (action === "confirm") {
        articleList.value.splice(index, 1);
        ElMessage({type: "success", message: "删除成功"});
      } else {
        ElMessage({type: "info", message: "取消"});
      }
    }
  });
};

const onDialogConfirm = async () => {
  await formRef.value.validate();
  const {index, name, number, price} = formModel.value;
  articleList.value[index] = {...articleList.value[index], name, number, price};
  dialogVisible.value = false;
  ElMessage({type: "success", message: "编辑成功"});
};
</script>

<template>
  <el-card class="page-container">
    <template #header>
      <div class="flex-space-between">
        <span>列表</span>
      </div>
    </template>
    <el-table :data="articleList" stripe style="width: 100%">
      <el-table-column label="序号" width="100" type="index"></el-table-column>
      <el-table-column label="文章名" prop="name"></el-table-column>
      <el-table-column label="数量" prop="number"></el-table-column>
      <el-table-column label="价格" prop="price"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{row,$index}">
          <el-button :icon="Edit" circle plain type="primary" @click="onEdit($index,row)"></el-button>
          <el-button :icon="Delete" circle plain type="primary" @click="onDelete($index)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <el-dialog v-model="dialogVisible" title="编辑" width="30%">
    <el-form ref="formRef" :model="formModel" :rules="rules" label-width="100px" style="padding-right: 30px">
      <el-form-item label="文章名" prop="name">
        <el-input v-model="formModel.name" minlength="1" maxlength="10"></el-input>
      </el-form-item>
      <el-form-item label="数量" prop="number">
        <el-input v-model="formModel.number" type="number" minlength="1" maxlength="10"></el-input>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input v-model="formModel.price" type="number" step="0.01"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="onDialogConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>

</template>

<style scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;
}
</style>