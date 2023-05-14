<template>
<div class="container-fluid">
<div class="row">
 <div class="col-lg-12">
  <div class="card">
   <header class="card-header">
    <div class="card-title">
     阴影
    </div>
   </header>
   <div class="card-body">
    <p>用于向 HTML 元素添加或删除阴影的工具类。</p>
    <h6>示例</h6>
    <p>在 Bootstrap 中，组件上的阴影（shadow）默认是被关闭的，但是通过开启 <code>$enable-shadows</code> 变量可以打开阴影效果，你还可以利用 <code>box-shadow</code> 工具类快速添加或删除阴影。还包括了对 <code>.shadow-none</code> 以及三种默认阴影尺寸（每种尺寸都有相对应的变量）的支持。</p>
    <div class="border-example">
     <div class="shadow-none p-3 mb-5 bg-light rounded">
      无阴影
     </div>
     <div class="shadow-sm p-3 mb-5 bg-body rounded">
      小阴影
     </div>
     <div class="shadow p-3 mb-5 bg-body rounded">
      常规阴影
     </div>
     <div class="shadow-lg p-3 mb-5 bg-body rounded">
      大阴影
     </div>
    </div>
    <pre>&lt;div class="shadow-none p-3 mb-5 bg-light rounded"&gt;无阴影&lt;/div&gt;
&lt;div class="shadow-sm p-3 mb-5 bg-body rounded"&gt;小阴影&lt;/div&gt;
&lt;div class="shadow p-3 mb-5 bg-body rounded"&gt;常规阴影&lt;/div&gt;
&lt;div class="shadow-lg p-3 mb-5 bg-body rounded"&gt;大阴影&lt;/div&gt;</pre>
   </div>
  </div>
 </div>
</div>
</div>
</template>
<script>
export default {
name: "Lyear-Utilities-Shadows"
}
</script>

<style scoped>

</style>
