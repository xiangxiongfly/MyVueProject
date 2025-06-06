<script setup>
import zh from "element-plus/es/locale/lang/zh-cn.mjs";
import {DocumentAdd, Help, List, Management, Promotion} from "@element-plus/icons-vue";

</script>

<template>
  <el-config-provider :locale="zh">
    <el-container>
      <el-aside>
        <el-menu active-text-color="#ffd04b"
                 text-color="#fff"
                 background-color="#232323"
                 :default-active="$route.path"
                 router>
          <el-menu-item index="/login">
            <el-icon>
              <Management/>
            </el-icon>
            <span>登录</span>
          </el-menu-item>
          <el-menu-item index="/register">
            <el-icon>
              <Promotion/>
            </el-icon>
            <span>注册</span>
          </el-menu-item>
          <el-menu-item index="/articles">
            <el-icon>
              <List/>
            </el-icon>
            <span>列表</span>
          </el-menu-item>
          <el-menu-item index="/addarticle">
            <el-icon>
              <DocumentAdd/>
            </el-icon>
            <span>发布</span>
          </el-menu-item>
          <el-menu-item index="/submit">
            <el-icon>
              <Help/>
            </el-icon>
            <span>提交</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<style lang="scss" scoped>
.el-container {
  height: 100vh;

  .el-aside {
    width: 200px;
    background-color: #232323;

    .el-menu {
      margin-top: 200px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
}

</style>