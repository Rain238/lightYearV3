<template>
<div class="container-fluid">
<div class="row">
 <div class="col-lg-12">
  <div class="card">
   <header class="card-header">
    <div class="card-title">
     垂直法则
    </div>
   </header>
   <div class="card-body">
    <p>使用自定义垂直规则助手创建垂直分隔线，如 &lt;hr&gt; 元素。</p>
    <h6>怎么运行的</h6>
    <p>垂直规则受到 &lt;hr&gt; 元素的启发，允许您在常见布局中创建垂直分隔线。 它们的样式就像 &lt;hr&gt; 元素一样：</p>
    <ul>
     <li>它们有 <code>1px</code> 宽</li>
     <li>他们的 <code>min-height</code> 为 <code>1em</code></li>
     <li>它们的颜色是通过 <code>currentColor</code> 和 <code>opacity</code> 设置的</li>
     <li>根据需要使用其他样式自定义它们。</li>
    </ul>
    <h6>例子</h6>
    <div class="border-example">
     <div class="vr"></div>
    </div>
    <pre>&lt;div class="vr"&gt;&lt;/div&gt;</pre>
    <p>垂直规则在 flex 布局中缩放它们的高度：</p>
    <div class="border-example">
     <div class="d-flex" style="height: 200px;">
      <div class="vr"></div>
     </div>
    </div>
    <pre>&lt;div class="d-flex" style="height: 200px;"&gt;
  &lt;div class="vr"&gt;&lt;/div&gt;
&lt;/div&gt;</pre>
    <h6>堆栈</h6>
    <p>它们也可以在堆栈中使用：</p>
    <div class="border-example">
     <div class="hstack gap-3">
      <div class="bg-light border">
       First item
      </div>
      <div class="bg-light border ms-auto">
       Second item
      </div>
      <div class="vr"></div>
      <div class="bg-light border">
       Third item
      </div>
     </div>
    </div>
    <pre>&lt;div class="hstack gap-3"&gt;
  &lt;div class="bg-light border"&gt;First item&lt;/div&gt;
  &lt;div class="bg-light border ms-auto"&gt;Second item&lt;/div&gt;
  &lt;div class="vr"&gt;&lt;/div&gt;
  &lt;div class="bg-light border"&gt;Third item&lt;/div&gt;
&lt;/div&gt;</pre>
   </div>
  </div>
 </div>
</div>
</div>
</template>
<script>
export default {
name: "Lyear-Helpers-Vertical-Rule"
}
</script>

<style scoped>

</style>
