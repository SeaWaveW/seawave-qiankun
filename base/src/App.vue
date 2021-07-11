<template>
<div id="seawave-qiankun">
  <!-- 基座 -->
  <el-menu :router="true" mode="horizontal">
    <el-menu-item index='/'>home</el-menu-item>
    <!-- 引用子应用 -->
    <el-menu-item index='/vue'>vue应用</el-menu-item>
    <el-menu-item index='/react'>react应用</el-menu-item>
  </el-menu>
  <!-- 应用显示的地方-因为是用vue作为基座 -->
  <router-view/>
  <!-- 子应用vue挂载的地方 -->
  <div id="vue"/>
  <!-- 子应用react挂载的地方 -->
  <div id="react"/>
</div>
</template>