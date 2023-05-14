<template>
  <body class="bg-white overflow-x-hidden">
  <div class="row bg-white vh-100">
    <div class="col-md-6 col-lg-7 col-xl-8 d-none d-md-block images-style">

      <div class="d-flex vh-100">
        <div class="p-5 align-self-end">
          <img src="../../assets/images/logo.png" alt="...">
          <br><br><br>
          <p class="text-white">Light Year Admin V5是一个基于Bootstrap v5.1.3的后台管理系统的HTML模板。</p>
        </div>
      </div>

    </div>

    <div class="col-md-6 col-lg-5 col-xl-4 align-self-center">
      <div class="p-5">
        <div class="text-center">
          <a href="index.html"> <img alt="light year admin" src="../../assets/images/logo-sidebar.png"> </a>
        </div>
        <p class="text-center text-muted"><small>请使用您的账号登录系统</small></p>

        <form action="#!" method="post" class="signin-form needs-validation" novalidate>
          <div class="mb-3">
            <label for="username">用户名</label>
            <input type="text" class="form-control" id="username" placeholder="请输入您的用户名" required>
          </div>

          <div class="mb-3">
            <label for="password">密码</label>
            <input type="password" class="form-control" id="password" placeholder="请输入您的密码" required>
          </div>

          <div class="mb-3">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="rememberme">
              <label class="form-check-label not-user-select" for="rememberme">5天内自动登录</label>
            </div>
          </div>

          <div class="mb-3 d-grid">
            <button class="btn btn-primary" type="button">立即登录</button>
          </div>
        </form>
        <p class="text-center text-muted mt-3">Copyright © 2022 <a target="_blank" href="http://www.bixiaguangnian.com">笔下光年</a>. All right reserved</p>
      </div>
    </div>
  </div>
  </body>
</template>
<script>
export default {name: "Lyear-Pages-Login-1"}
</script>

<style scoped>
.images-style{
  background-image: url(../../assets/images/login-bg-1.jpg);
  background-size: cover;
}
</style>
