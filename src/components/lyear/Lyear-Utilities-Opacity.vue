<template>
<div class="container-fluid">
<div class="row">
 <div class="col-lg-12">
  <div class="card">
   <header class="card-header">
    <div class="card-title">
     透明度
    </div>
   </header>
   <div class="card-body">
    <p>控制元素的不透明度。</p>
    <p><code>opacity</code> 属性设置元素的不透明度级别。 不透明度级别描述了透明度级别，其中 <code>1</code> 完全不透明，<code>0.5</code> 表示 <code>50%</code> 可见，<code>0</code> 表示完全透明。</p>
    <p>使用 <code>.opacity-{value}</code> 实用程序设置元素的不透明度。</p>
    <div class="border-example">
     <div class="opacity-100 p-3 m-2 bg-primary text-light fw-bold rounded">
      100%
     </div>
     <div class="opacity-75 p-3 m-2 bg-primary text-light fw-bold rounded">
      75%
     </div>
     <div class="opacity-50 p-3 m-2 bg-primary text-light fw-bold rounded">
      50%
     </div>
     <div class="opacity-25 p-3 m-2 bg-primary text-light fw-bold rounded">
      25%
     </div>
    </div>
    <pre>&lt;div class="opacity-100"&gt;...&lt;/div&gt;
&lt;div class="opacity-75"&gt;...&lt;/div&gt;
&lt;div class="opacity-50"&gt;...&lt;/div&gt;
&lt;div class="opacity-25"&gt;...&lt;/div&gt;</pre>
   </div>
  </div>
 </div>
</div>
</div>
</template>
<script>
export default {
name: "Lyear-Utilities-Opacity"
}
</script>

<style scoped>

</style>
