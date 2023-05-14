<template>
  <body class="center-vh images-style">
  <div class="signin-box p-5 mb-0 mr-2 ml-2">
    <div class="text-center mb-3">
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
        <div class="form-check text-white">
          <input type="checkbox" class="form-check-input" id="rememberme">
          <label class="form-check-label not-user-select" for="rememberme">5天内自动登录</label>
        </div>
      </div>

      <div class="mb-3 d-grid">
        <button class="btn btn-primary" type="button">立即登录</button>
      </div>
    </form>

    <p class="text-center text-white">Copyright © 2022 <a target="_blank"
                                                          href="http://www.bixiaguangnian.com">笔下光年</a>. All right
      reserved</p>
  </div>
  </body>
</template>
<script>
export default {name: "Lyear-Pages-Login-4"}
</script>

<style scoped>
.images-style {
  background-image: url(../../assets/images/login-bg-4.jpg);
  background-size: cover;
}
.signin-box {
  background-color: rgba(255, 255, 255, .25);
  width: 420px;
}
.signin-box p:last-child {
  margin-bottom: 0px;
}
.signin-form .form-control {
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
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
.signin-form .form-control::-webkit-input-placeholder{
  color: rgba(255, 255, 255, .8);
}
.signin-form .form-control:-moz-placeholder{
  color: rgba(255, 255, 255, .8);
}
.signin-form .form-control::-moz-placeholder{
  color: rgba(255, 255, 255, .8);
}
.signin-form .form-control:-ms-input-placeholder{
  color: rgba(255, 255, 255, .8);
}
.signin-form .custom-control-label::before {
  background: rgba(0, 0, 0, 0.3);
  border-color: rgba(0, 0, 0, 0.1);
}
.signin-form .form-check-input {
  background-color: transparent;
  border-color: #fff;
}
</style>
