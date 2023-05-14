<template>
<div class="container-fluid">
<div class="row">
 <div class="col-lg-12">
  <div class="card">
   <header class="card-header">
    <div class="card-title">
     范围
    </div>
   </header>
   <div class="card-body">
    <p>使用 <code>.form-range</code> 创建自定义 <code>&lt;input type="range"&gt;</code> 控件。 轨道（背景）和拇指（值）的样式都在浏览器中显示相同。 由于只有 Firefox 支持从拇指的左侧或右侧“填充”其轨迹以直观地指示进度，因此我们目前不支持它。</p>
    <div class="border-example"><label for="customRange1" class="form-label">示例</label> <input type="range" class="form-range" id="customRange1">
    </div>
    <pre>&lt;label for="customRange1" class="form-label"&gt;示例&lt;/label&gt;
&lt;input type="range" class="form-range" id="customRange1"&gt;</pre>
    <h6>禁用</h6>
    <p>在输入上添加 <code>disabled</code> 布尔属性，使其外观变灰并删除指针事件。</p>
    <div class="border-example"><label for="disabledRange" class="form-label">禁用示例</label> <input type="range" class="form-range" id="disabledRange" disabled>
    </div>
    <pre>&lt;label for="disabledRange" class="form-label"&gt;禁用示例&lt;/label&gt;
&lt;input type="range" class="form-range" id="disabledRange" disabled&gt;</pre>
    <h6>最小值和最大值</h6>
    <p>范围输入具有 <code>min</code> 和 <code>max</code> 的隐含值，分别为 <code>0</code> 和 <code>100</code>。 您可以为那些使用 <code>min</code> 和 <code>max</code> 属性的值指定新值。</p>
    <div class="border-example"><label for="customRange2" class="form-label">示例</label> <input type="range" class="form-range" min="0" max="5" id="customRange2">
    </div>
    <pre>&lt;label for="customRange2" class="form-label"&gt;示例&lt;/label&gt;
&lt;input type="range" class="form-range" min="0" max="5" id="customRange2"&gt;</pre>
    <h6>步长</h6>
    <p>默认情况下，范围输入“捕捉”到整数值。 要更改此设置，您可以指定步长值。 在下面的示例中，我们使用 <code>step="0.5"</code> 将步数加倍。</p>
    <div class="border-example"><label for="customRange3" class="form-label">示例</label> <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
    </div>
    <pre>&lt;label for="customRange3" class="form-label"&gt;示例&lt;/label&gt;
&lt;input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"&gt;</pre>
   </div>
  </div>
 </div>
</div>
</div>
</template>
<script>
export default {
name: "Lyear-Forms-Range"
}
</script>

<style scoped>

</style>
