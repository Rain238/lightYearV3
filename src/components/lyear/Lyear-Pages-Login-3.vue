<template>
  <body class="center-vh images-style">
  <div class="bg-translucent p-2">
    <div class="flex-box bg-white login-box">
      <div class="login-left p-5">

        <div class="text-center mb-3 d-sm-none">
          <a href="index.html"> <img alt="light year admin" src="../../assets/images/logo-sidebar.png"> </a>
        </div>
        <form action="#!" method="post" class="signin-form needs-validation" novalidate>
          <div class="mb-3 has-feedback">
            <span class="mdi mdi-account" aria-hidden="true"></span>
            <input type="text" class="form-control" id="username" placeholder="用户名" required>
          </div>

          <div class="mb-3 has-feedback">
            <span class="mdi mdi-lock" aria-hidden="true"></span>
            <input type="password" class="form-control" id="password" placeholder="密码" required>
          </div>

          <div class="mb-3 has-feedback row">
            <div class="col-7">
              <span class="mdi mdi-check-all form-control-feedback" aria-hidden="true"></span>
              <input type="text" name="captcha" class="form-control" placeholder="验证码" required>
            </div>
            <div class="col-5 text-right">
              <img src="../../assets/images/captcha.png" class="pull-right" id="captcha" style="cursor: pointer;"
                   onclick="this.src=this.src+'?d='+Math.random();" title="点击刷新" alt="captcha">
            </div>
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
      </div>
      <div class="login-right p-5 d-none d-sm-block">
        <p class="mb-3"><img src="../../assets/images/logo.png" alt="logo"/></p>
        <p class="text-white">Light Year Admin V5是一个基于Bootstrap v5.1.3的后台管理系统的HTML模板。</p>
        <p class="text-white align-self-end">Copyright © 2022 <a target="_blank" href="http://www.bixiaguangnian.com"
                                                                 class="text-white">笔下光年</a>. All right reserved</p>
      </div>
    </div>
  </div>
  </body>
</template>
<script>
export default {name: "Lyear-Pages-Login-3"}
</script>

<style scoped>
.images-style {
  background-image: url(../../assets/images/login-bg-3.jpg);
  background-size: cover;
}

.signin-form .has-feedback {
  position: relative;
}
.signin-form .has-feedback .form-control {
  padding-left: 36px;
}
.signin-form .has-feedback .mdi {
  position: absolute;
  top: 0;
  left: 0;
  right: auto;
  width: 36px;
  height: 36px;
  line-height: 36px;
  z-index: 4;
  color: #dcdcdc;
  display: block;
  text-align: center;
  pointer-events: none;
}
.signin-form .has-feedback.row .mdi {
  left: 15px;
}
.signin-form .form-group:last-child,
.login-right p:last-child {
  margin-bottom: 0px;
}
.login-right {
  background: #67b26f!important;
  background: -moz-linear-gradient(45deg,#67b26f 0,#4ca2cd 100%)!important;
  background: -webkit-linear-gradient(45deg,#67b26f 0,#4ca2cd 100%)!important;
  background: linear-gradient(45deg,#67b26f 0,#4ca2cd 100%)!important;
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#67b26f', endColorstr='#4ca2cd', GradientType=1 )!important;
}
.login-box {
  max-width: 700px;
}
.login-right {
  max-width: 50%;
}
</style>
