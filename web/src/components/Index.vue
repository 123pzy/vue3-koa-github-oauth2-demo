<template>
  <div class="login" @click="loginToGithub">Github登录</div>
</template>

<script lang="ts" setup>
const client_id = '922127eb1402e210792b'; // 替换成自己的
const authorize_uri = 'https://github.com/login/oauth/authorize';
const redirect_uri = 'http://localhost:5173/oauth/redirect'; // 重定向地址

function loginToGithub() {
  // 页面跳转
  location.href = `${authorize_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}`;
}
</script>

<style scoped>
.login {
  height: 90px;
  width: 180px;
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
  background-image: linear-gradient(90deg, #1572b6, #42b884);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
}
</style>
