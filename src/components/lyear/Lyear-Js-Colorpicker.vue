<template>
  <div class="container-fluid">

    <div class="row">

      <div class="col-lg-12">
        <div class="card">
          <header class="card-header"><div class="card-title">选色器</div></header>
          <div class="card-body">

            <p>插件使用Bootstrap-colorpicker 3.4.0，文档地址：<a href="https://itsjavi.com/bootstrap-colorpicker/" target="_blank">https://itsjavi.com/bootstrap-colorpicker/</a></p>

            <p>简单使用</p>
            <div class="mb-3">
              <input type="text" class="form-control js-colorpicker" name="example-color1" placeholder="点击选择颜色" value="" />
            </div>

            <p>初始颜色可以通过 3 种方式指定：输入值、<code>data-color</code> 属性或者以编程方式使用 <code>color</code> 构造函数选项。</p>
            <p>这里使用输入框组来显示颜色。</p>

            <p>使用输入值：</p>
            <div class="input-group js-colorpicker mb-3">
              <input type="text" class="form-control" name="example-color2" value="#33cabb" />
              <span class="input-group-text colorpicker-input-addon"><i></i></span>
            </div>

            <p>使用 <code>data-color</code>：</p>
            <div class="input-group js-colorpicker mb-3">
              <input type="text" class="form-control" name="example-color3" data-color="rgb(21, 195, 119)" />
              <span class="input-group-text colorpicker-input-addon"><i></i></span>
            </div>
            <div class="input-group js-colorpicker mb-3">
              <input type="text" class="form-control" name="example-color4" data-color="hsl(31, 95%, 64%)" />
              <span class="input-group-text colorpicker-input-addon"><i></i></span>
            </div>

            <p>使用构造函数(这里单独初始化)：</p>
            <div class="input-group mb-3" id="example-color5">
              <input type="text" class="form-control" name="example-color5" />
              <span class="input-group-text colorpicker-input-addon"><i></i></span>
            </div>
            <pre>$('#example-color5').colorpicker({"color": "#48b0f7"});</pre>

            <p>当 <code>format</code> 选项为 <code>'auto'</code> 时，将检测第一个解析的颜色格式并将其用作默认值，但当该选项等于 <code>null</code> （默认值）时，每次都会重新计算格式。您可以在此处看到差异，其中之一允许您调整 Alpha 通道：</p>
            <p>这里使用 <code>data-colorpicker-mode</code> 设置。</p>
            <div class="input-group js-colorpicker mb-3" data-colorpicker-mode="auto">
              <input type="text" class="form-control" name="example-color6" value="#f96868" />
              <span class="input-group-text colorpicker-input-addon"><i></i></span>
            </div>

            <div class="input-group mb-3" id="example-color7">
              <input type="text" class="form-control" name="example-color7" value="#212529" />
              <span class="input-group-text colorpicker-input-addon"><i></i></span>
            </div>

            <p>如果已定义，格式选项会强制使用特定格式，而忽略原始格式。</p>
            <div class="input-group js-colorpicker mb-3" data-colorpicker-mode="rgb">
              <input type="text" class="form-control" name="example-color8" value="#6610f2" />
              <span class="input-group-text colorpicker-input-addon"><i></i></span>
            </div>

            <p>使用 <code>data-colorpicker-horizontal</code> 设置为 <code>true</code>，色调和 alpha 条是水平的而不是垂直的。</p>
            <div class="input-group js-colorpicker mb-3" data-colorpicker-horizontal="true">
              <input type="text" class="form-control" name="example-color9" value="#926dde" />
              <span class="input-group-text colorpicker-input-addon"><i></i></span>
            </div>

            <p>在模态框上使用：</p>
            <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModalLive">
              启动模态框
            </button>
            <div class="callout callout-info">还有一些其他的功能，感觉并不常用，这里就不做演示了，具体请查看官方的文档示例。</div>

          </div>
        </div>
      </div>

    </div>

  </div>
  <!--模态框示例start-->
  <div class="modal fade" id="exampleModalLive" tabindex="-1" aria-labelledby="exampleModalLiveLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">标题</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input type="text" class="form-control js-colorpicker" value="rgb(141, 102, 88)"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
          <button type="button" class="btn btn-primary">保存修改</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//引入选择器Js
import {colorpicker} from "@/assets/css/bootstrap-colorpicker/bootstrap-colorpicker.min.js"
//引入选择器Css
import "@/assets/css/bootstrap-colorpicker/bootstrap-colorpicker.min.css"

export default {
  name: "Lyear-Js-Colorpicker",
  methods: {
    fun: function () {
      colorpicker()
      $(document).ready(function () {
        // 这里的js作为示例，单独做初始化
        $('#example-color5').colorpicker({"color": "#48b0f7"});
        $('#example-color7').colorpicker({"format": null});
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
