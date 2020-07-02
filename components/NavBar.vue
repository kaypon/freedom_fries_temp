<template>
  <a-layout id="nav-bar">
    <a-layout-header class="header">
      <img src="/fries.png" class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['1']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
  </a-layout>
</template>
<style>
#nav-bar .logo {
  /* width: 120px; */
  height: 31px;
  /* background: rgba(255, 255, 255, 0.2); */
  margin: 16px 28px 16px 0;
  float: left;
}

#nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  left:0;
  margin-bottom: 100px;
}
</style>
