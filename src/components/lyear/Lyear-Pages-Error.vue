<template>
  <section class="error-page">
    <div class="error-box">
      <div class="error-body text-center">
        <h1>404</h1>
        <h5 class="mb-5 mt-3 text-gray">很抱歉，但是那个页面看起来已经不存在了。</h5>
        <a href="index.html" class="btn btn-primary">返回首页</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
name: "Lyear-Pages-Error"
}
</script>

<style scoped>
body {
  background: #f4f5fa;
}
[data-theme|='translucent'],
[data-theme|='dark'] {
  background: transparent;
  color: #fff;
}
.error-page {
  height: 100%;
  position: fixed;
  width: 100%;
}
.error-body {
  padding-top: 5%;
}
.error-body h1 {
  font-size: 210px;
  line-height: 210px;
  color: #cacaca;
}
</style>
