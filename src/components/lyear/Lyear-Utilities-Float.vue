<template>
<div class="container-fluid">
<div class="row">
 <div class="col-lg-12">
  <div class="card">
   <header class="card-header">
    <div class="card-title">
     浮动
    </div>
   </header>
   <div class="card-body">
    <p>使用我们的响应式浮动实用程序在任何元素上切换浮动，跨越任何断点。</p>
    <h6>概述</h6>
    <p>这些实用程序类使用 CSS 浮动属性根据当前视口大小将元素向左或向右浮动，或禁用浮动。 <code>!important</code> 包括在内以避免特异性问题。 这些使用与我们的网格系统相同的视口断点。 请注意浮动实用程序对弹性项目没有影响。</p>
    <div class="border-example">
     <div class="float-start">
      在所有视口尺寸上向左浮动
     </div><br>
     <div class="float-end">
      在所有视口尺寸上向右浮动
     </div><br>
     <div class="float-none">
      不要在所有视口大小上浮动
     </div>
    </div>
    <pre>&lt;div class="float-start"&gt;在所有视口尺寸上浮动开始&lt;/div&gt;&lt;br&gt;
&lt;div class="float-end"&gt;在所有视口尺寸上向右浮动&lt;/div&gt;&lt;br&gt;
&lt;div class="float-none"&gt;不要在所有视口大小上浮动&lt;/div&gt;</pre>
    <h6>响应式</h6>
    <p>每个 <code>float</code> 值也存在响应变化。</p>
    <div class="border-example">
     <div class="float-sm-start">
      在大小为SM（小）或更大的视口上向左浮动
     </div><br>
     <div class="float-md-start">
      在MD（中等）或更大尺寸的视口上向左浮动
     </div><br>
     <div class="float-lg-start">
      在尺寸为LG（大）或更大的视口上浮动开始
     </div><br>
     <div class="float-xl-start">
      在尺寸为XL（超大）或更宽的视口上浮动起点
     </div><br>
    </div>
    <pre>&lt;div class="float-sm-start"&gt;在大小为SM（小）或更大的视口上向左浮动&lt;/div&gt;&lt;br&gt;
&lt;div class="float-md-start"&gt;在MD（中等）或更大尺寸的视口上向左浮动&lt;/div&gt;&lt;br&gt;
&lt;div class="float-lg-start"&gt;在尺寸为LG（大）或更大的视口上向左浮动&lt;/div&gt;&lt;br&gt;
&lt;div class="float-xl-start"&gt;在尺寸为XL（超大）或更宽的视口上向左浮动&lt;/div&gt;&lt;br&gt;</pre>
    <p>以下是所有支持类：</p>
    <ul>
     <li><code>.float-start</code></li>
     <li><code>.float-end</code></li>
     <li><code>.float-none</code></li>
     <li><code>.float-sm-start</code></li>
     <li><code>.float-sm-end</code></li>
     <li><code>.float-sm-none</code></li>
     <li><code>.float-md-start</code></li>
     <li><code>.float-md-end</code></li>
     <li><code>.float-md-none</code></li>
     <li><code>.float-lg-start</code></li>
     <li><code>.float-lg-end</code></li>
     <li><code>.float-lg-none</code></li>
     <li><code>.float-xl-start</code></li>
     <li><code>.float-xl-end</code></li>
     <li><code>.float-xl-none</code></li>
     <li><code>.float-xxl-start</code></li>
     <li><code>.float-xxl-end</code></li>
     <li><code>.float-xxl-none</code></li>
    </ul>
   </div>
  </div>
 </div>
</div>
</div>
</template>
<script>
export default {
name: "Lyear-Utilities-Float"
}
</script>

<style scoped>

</style>
