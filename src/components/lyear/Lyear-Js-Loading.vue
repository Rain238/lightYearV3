<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <header class="card-header">
            <div class="card-title">
              loading插件
            </div>
          </header>
          <div class="card-body">
            <p>这是我自己写的一个插件，算是个简单的加载动画js插件，里面的一些定位的计算参考了网上的开源项目，可以采用css
              loading动画或者图片，并且设置loading文字。</p>
            <pre>$('#test-btn').click(function() {
    var l = $('body').lyearloading({
        opacity           : 0.1,              // 遮罩层透明度，为0时不透明
        backgroundColor   : '#ccc',           // 遮罩层背景色
        imgUrl            : '',               // 使用图片时的图片地址
        textColorClass    : 'text-success',   // 文本文字的颜色
        spinnerColorClass : 'text-success',   // 加载动画的颜色(不使用图片时有效)
        spinnerSize       : 'lg',             // 加载动画的大小(不使用图片时有效，示例：sm/nm/md/lg，也可自定义大小，如：25px)
        spinnerText       : '加载中...',       // 文本文字    
        zindex            : 9999,             // 元素的堆叠顺序值
    });
    setTimeout(function() {
        l.hide(); // 页面中如果有多个loading，最好用destroy，避免后面的loading设置不生效
    }, 500000)
});</pre>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <header class="card-header">
            <div class="card-title">
              使用示例
            </div>
          </header>
          <div class="card-body">
            <p class="mb-1">示例一：按钮上的加载动画</p>
            <button type="submit" class="btn btn-primary" id="example-one">确认提交</button>
            <p class="mb-1 mt-1">示例二：基于整个body的加载动画</p>
            <button type="submit" class="btn btn-success" id="example-two">确认提交</button>
            <p class="mb-1 mt-1">示例三：使用文字和颜色</p>
            <button type="submit" class="btn btn-info" id="example-three">确认提交</button>
            <p class="mb-1 mt-1">示例四：使用图片</p>
            <button type="submit" class="btn btn-danger" id="example-four">确认提交</button>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card" id="login-box">
          <header class="card-header d-flex justify-content-between">
            <div class="card-title">
              最大化，收缩，关闭卡片
            </div>
            <ul class="card-actions">
              <li><a href="#!" class="card-btn-close"><i class="mdi mdi-close"></i></a></li>
              <li><a href="#!" class="card-btn-slide"><i class="mdi mdi-chevron-up"></i></a></li>
              <li><a href="#!" class="card-btn-fullscreen"><i class="mdi mdi-fullscreen"></i></a></li>
            </ul>
          </header>
          <div class="card-body" style="">
            <p>离思 - 孟郊</p>
            <p>不寐亦不语，片月秋稍举。孤鸿忆霜群，独鹤叫云侣。</p>
            <p>怨彼浮花心，飘飘无定所。高张系繂帆，远过梅根渚。</p>
            <p>回织别离字，机声有酸楚。</p>
          </div>
          <footer class="card-footer d-flex justify-content-between">
            <div class="form-check mt-2"><input class="form-check-input" type="checkbox" value="" id="remeberme"> <label
                class="form-check-label" for="remeberme"> 五天内自动登录 </label>
            </div>
            <div class="example-btn">
              <button class="btn btn-primary" type="reset" id="example-five">登录</button>
              <button class="btn btn-danger" type="submit">注册</button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//引入loading插件js
import {loading} from "@/utils/lyear-loading.js"

export default {
  name: "Lyear-Js-Loading",
  methods: {
    fun: function () {
      loading()
      $(document).ready(function () {
        // 按钮中的loading
        $('#example-one').click(function () {
          $(this).attr('disable', 'true');
          var l = $(this).lyearloading({
            opacity: 0.2,
            spinnerSize: 'nm'
          });
          setTimeout(function () {
            $(this).prop('disable', 'false');
            l.destroy(); // 可以使用hide，页面中如果有多个loading，最好用destroy，避免后面的loading设置不生效
          }, 1e3)
        });

        // 基于整个body的loading
        $('#example-two').click(function () {
          var l = $('body').lyearloading({
            opacity: 0.2,
            spinnerSize: 'lg'
          });
          setTimeout(function () {
            l.destroy();
          }, 1e3)
        });

        // 使用文字和颜色
        $('#example-three').click(function () {
          var l = $('body').lyearloading({
            opacity: 0.2,
            spinnerSize: 'lg',
            spinnerText: '后台处理中，请稍后...',
            textColorClass: 'text-info',
            spinnerColorClass: 'text-info'
          });
          setTimeout(function () {
            l.destroy();
          }, 1e3)
        });

        // 使用图片
        $('#example-four').click(function () {
          var l = $('body').lyearloading({
            opacity: 0.6,
            backgroundColor: '#ffffff',
            imgUrl: 'http://www.bixiaguangnian.com/home/images/loader.gif',
            spinnerText: '后台处理中，请稍后...',
            textColorClass: 'text-info'
          });
          setTimeout(function () {
            l.destroy();
          }, 1e3)
        });

        // 某一个div元素中的loading
        $('#example-five').click(function () {
          var l = $('#login-box').lyearloading({
            opacity: 0.125,
            spinnerSize: 'lg'
          });
          setTimeout(function () {
            l.destroy();
          }, 1e3)
        });
      });
    }
  },
  mounted() {
    this.fun()
  }
}
</script>

<style scoped>

</style>
