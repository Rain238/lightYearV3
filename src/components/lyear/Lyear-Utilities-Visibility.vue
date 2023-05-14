<template>
<div class="container-fluid">
<div class="row">
 <div class="col-lg-12">
  <div class="card">
   <header class="card-header">
    <div class="card-title">
     可见性
    </div>
   </header>
   <div class="card-body">
    <p>使用可见性工具类来控制 HTML 元素的可见性，并且不会修改 <code>display</code> 属性。</p>
    <p>使用可见性工具类可以设置 HTML 元素的 <code>visibility</code> （可见性）。这些工具类完全不会修改 <code>display</code> 属性的值，并且不影响布局（设置了 <code>.invisible</code> 类的页面元素仍然会占据页面上的空间 ）。</p>
    <div class="bd-callout bd-callout-warning">
     Elements with the设置了 <code>.invisible</code> 类的页面元素，在视觉上以及对使用辅助技术/屏幕阅读器的用户来说 <em>都是</em> 隐藏的。
    </div>
    <p>根据需要使用 <code>.visible</code> 或 <code>.invisible</code>。</p>
    <pre>&lt;div class="visible"&gt;...&lt;/div&gt;
&lt;div class="invisible"&gt;...&lt;/div&gt;</pre>
    <pre>// Class
.visible {
  visibility: visible !important;
}
.invisible {
  visibility: hidden !important;
}</pre>
   </div>
  </div>
 </div>
</div>
</div>
</template>
<script>
export default {
name: "Lyear-Utilities-Visibility"
}
</script>

<style scoped>

</style>
