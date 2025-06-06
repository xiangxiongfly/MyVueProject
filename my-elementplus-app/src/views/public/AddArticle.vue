<script setup>
import {ref} from "vue";
import {QuillEditor} from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import {Plus} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus";

const formRef = ref();
const editorRef = ref();
const options = ref([
  {value: "1", label: "三国演义"},
  {value: "2", label: "水浒传"},
  {value: "3", label: "西游记"},
  {value: "4", label: "红楼梦"},
]);
const formModel = ref({
  title: "",
  cate: "",
  coverImg: "",
  content: ""
});
const imgUrl = ref("");

const onUploadFile = (file) => {
  imgUrl.value = URL.createObjectURL(file.raw);
  formModel.value.coverImg = file.raw;
};

const addArticle = () => {
  const {title, cate, coverImg, content} = formModel.value;
  ElMessage({message: `标题：${title} 分类：${cate} 封面名：${coverImg.name} 内容：${content}`});
};

</script>

<template>
  <el-card class="page-container">
    <template #header>
      <div class="flex-space-between">
        <span>发布文章</span>
      </div>
    </template>
    <el-form :model="formModel" ref="formRef" label-width="100px">
      <el-form-item label="文章标题">
        <el-input v-model="formModel.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="文章分类">
        <el-select v-model="formModel.cate">
          <el-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章封面">
        <el-upload class="avatar-uploader" :auto-upload="false" :show-file-list="false" :on-change="onUploadFile">
          <img v-if="imgUrl" :src="imgUrl" class="avatar" alt=""/>
          <el-icon v-else class="avatar-uploader-icon">
            <Plus/>
          </el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="文章内容">
        <div class="editor">
          <quill-editor ref="editorRef" theme="snow" v-model:content="formModel.content"
                        content-type="html"></quill-editor>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addArticle">发布</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style lang="scss" scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;

  .avatar-uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);


    &:hover {
      border-color: var(--el-color-primary);
    }

    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }

    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      text-align: center;
    }
  }
}

.editor {
  width: 100%;

  :deep(.ql-editor) {
    min-height: 200px;
  }
}
</style>