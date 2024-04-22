<template>
  <div class="box">
    <!-- 头像 -->
    <img :src="data.avatar_url" alt="" style="height: 400px" />
    <!-- hello -->
    <div class="hello">
      <h1>hello,</h1>
      <h1 style="border-bottom: 3px solid black">{{ data.name }}</h1>
      <h1>!</h1>
    </div>
    <!-- 描述 -->
    <div class="bio">{{ data.bio }}</div>
  </div>
</template>

<script lang="ts" setup>
const query = window.location.search.substring(1) || ''; // 取出GitHub数据
const query2 = query.split('data=')[1];
const data = JSON.parse(decodeURI(query2));
</script>

<style scoped>
.box {
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.hello {
  display: flex;
  margin-bottom: 14px;
}
</style>
