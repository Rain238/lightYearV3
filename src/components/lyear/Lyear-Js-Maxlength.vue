<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <header class="card-header">
            <div class="card-title">
              长度判断
            </div>
          </header>
          <div class="card-body">
            <p>插件使用bootstrap-maxlength 1.9.1，github地址：<a href="http://mimo84.github.io/bootstrap-maxlength/"
                                                               target="_blank">http://mimo84.github.io/bootstrap-maxlength/</a>
            </p>
            <div class="mb-3"><label for="defaultconfig">默认</label>
              <p class="text-muted">默认当剩余字符小于等于10时，提示将显示：</p><input type="text" class="form-control"
                                                                                     maxlength="25" name="defaultconfig"
                                                                                     id="defaultconfig">
            </div>
            <div class="mb-3"><label for="thresholdconfig">阈值</label>
              <p class="text-muted">使用<code>threshold</code>选项表示还有多少字符可以开始显示指示。</p><input
                  type="text" maxlength="25" name="thresholdconfig" class="form-control" id="thresholdconfig">
            </div>
            <div class="mb-3"><label for="placement">位置</label>
              <p class="text-muted">您所需要做的就是用其中一个字符串指定<code>placement</code>选项。如果未指定，则将被定位到“底部”。
              </p><input type="text" class="form-control" maxlength="25" name="placement" id="placement">
            </div>
            <div class="mb-3"><label for="alloptions">始终显示</label>
              <p class="text-muted mb-3 font-13">如果<code>showOnReady</code>为true，则在指示器就绪时始终显示。默认值：false。
              </p><input type="text" class="form-control" maxlength="25" name="alloptions" id="alloptions">
            </div>
            <div class="mb-3"><label for="mb-2">文本域</label>
              <p class="textarea">Bootstrap maxlength 支持文本区域和输入。即使在旧的IE上。</p><textarea id="textarea"
                                                                                                      class="form-control"
                                                                                                      maxlength="225"
                                                                                                      rows="3"
                                                                                                      placeholder="此文本区域限制为225个字符。"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//引入长度验证插件js
import {maxlength} from "@/assets/css/bootstrap-maxlength/bootstrap-maxlength.min.js"

export default {
  name: "Lyear-Js-Maxlength",
  methods: {
    fun: function () {
      maxlength()
      $(document).ready(function(){
        // 默认使用
        $("input#defaultconfig").maxlength({
          warningClass: "badge bg-info",
          limitReachedClass: "badge bg-warning"
        });
        // 设置阈值
        $("input#thresholdconfig").maxlength({
          threshold: 20,
          alwaysShow: false,
          warningClass: "badge bg-info",
          limitReachedClass: "badge bg-warning"
        });
        // 设置提示显示的位置
        $("input#placement").maxlength({
          // 可使用的值有: bottom, left, top, right, bottom-right, top-right, top-left, bottom-left 和 centered-right。
          // 你也可以使用 : bottom-right-inside, top-right-inside, top-left-inside and bottom-left-inside.
          alwaysShow: true,
          placement: "top-right-inside",
          warningClass: "badge bg-info",
          limitReachedClass: "badge bg-warning"
        })
        // 始终显示
        $("input#alloptions").maxlength({
          showOnReady: true,
          warningClass: "badge bg-success",
          limitReachedClass: "badge bg-danger",
          separator: " 个字符； ",
          preText: "已输入 ",
          postText: " 个可用字符。",
          validate: !0
        });
        // 文本域使用
        $("textarea#textarea").maxlength({
          threshold: 255,
          warningClass: "badge bg-info",
          limitReachedClass: "badge bg-warning"
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
