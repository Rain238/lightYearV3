<template>
<div class="container-fluid">
<div class="row">
 <div class="col-lg-12">
  <div class="card">
   <header class="card-header">
    <div class="card-title">
     尺寸
    </div>
   </header>
   <div class="card-body">
    <p>利用宽度（width）和高度（height）相关的工具类来轻松实现对页面元素的高度和宽度的设定。</p>
    <h6>相对于父元素的尺寸</h6>
    <p>宽度（Width）和高度（height）工具类是通过 <code>_utilities.scss</code> 文件中的工具类 API 生成的。默认情况下支持 <code>25%</code>、<code>50%</code>、<code>75%</code>、<code>100%</code> 和 <code>auto</code> 值。根据你的需要修改这些值，就可以生成不同的工具类。</p>
    <div class="border-example">
     <div class="w-25 p-3" style="background-color: #eee;">
      25% 的宽度
     </div>
     <div class="w-50 p-3" style="background-color: #eee;">
      50% 的宽度
     </div>
     <div class="w-75 p-3" style="background-color: #eee;">
      75% 的宽度
     </div>
     <div class="w-100 p-3" style="background-color: #eee;">
      100% 的宽度
     </div>
     <div class="w-auto p-3" style="background-color: #eee;">
      Width auto
     </div>
    </div>
    <pre>&lt;div class="w-25 p-3" style="background-color: #eee;"&gt;25% 的宽度&lt;/div&gt;
&lt;div class="w-50 p-3" style="background-color: #eee;"&gt;50% 的宽度&lt;/div&gt;
&lt;div class="w-75 p-3" style="background-color: #eee;"&gt;75% 的宽度&lt;/div&gt;
&lt;div class="w-100 p-3" style="background-color: #eee;"&gt;100% 的宽度&lt;/div&gt;
&lt;div class="w-auto p-3" style="background-color: #eee;"&gt;Width auto&lt;/div&gt;</pre>
    <div class="border-example">
     <div style="height: 100px; background-color: rgba(255,0,0,0.1);">
      <div class="h-25 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">
       高度 25%
      </div>
      <div class="h-50 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">
       高度 50%
      </div>
      <div class="h-75 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">
       高度 75%
      </div>
      <div class="h-100 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">
       高度 100%
      </div>
      <div class="h-auto d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">
       高度 auto
      </div>
     </div>
    </div>
    <pre>&lt;div style="height: 100px; background-color: rgba(255,0,0,0.1);"&gt;
  &lt;div class="h-25 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)"&gt;高度 25%&lt;/div&gt;
  &lt;div class="h-50 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)"&gt;高度 50%&lt;/div&gt;
  &lt;div class="h-75 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)"&gt;高度 75%&lt;/div&gt;
  &lt;div class="h-100 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)"&gt;高度 100%&lt;/div&gt;
  &lt;div class="h-auto d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)"&gt;高度 auto&lt;/div&gt;
&lt;/div&gt;</pre>
    <p>如果需要，你也可以使用 <code>max-width: 100%;</code> 和 <code>max-height: 100%;</code> 工具类</p>
    <div class="border-example">
     <svg class="bd-placeholder-img mw-100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Max-width 100%" preserveaspectratio="xMidYMid slice" focusable="false">
      <title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect> <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
       Max-width 100%
      </text>
     </svg>
    </div>
    <pre>&lt;img src="..." class="mw-100" alt="..."&gt;</pre>
    <div class="border-example">
     <div style="height: 100px; background-color: rgba(255,0,0,.1);">
      <div class="mh-100" style="width: 100px; height: 200px; background-color: rgba(0,0,255,.1);">
       Max-height 100%
      </div>
     </div>
    </div>
    <pre>&lt;div style="height: 100px; background-color: rgba(255,0,0,.1);"&gt;
  &lt;div class="mh-100" style="width: 100px; height: 200px; background-color: rgba(0,0,255,.1);"&gt;Max-height 100%&lt;/div&gt;
&lt;/div&gt;</pre>
    <h6>相对于视口（viewport）的尺寸</h6>
    <p>你还可以使用工具类来设置相对于视口（viewport）的宽度和高度。</p>
    <pre>&lt;div class="min-vw-100"&gt;Min-width 100vw&lt;/div&gt;
&lt;div class="min-vh-100"&gt;Min-height 100vh&lt;/div&gt;
&lt;div class="vw-100"&gt;Width 100vw&lt;/div&gt;
&lt;div class="vh-100"&gt;Height 100vh&lt;/div&gt;</pre>
   </div>
  </div>
 </div>
</div>
</div>
</template>
<script>
export default {
name: "Lyear-Utilities-Sizing"
}
</script>

<style scoped>

</style>
