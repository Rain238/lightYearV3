<template>
<div class="container-fluid">
<div class="row">
 <div class="col-lg-12">
  <div class="card">
   <header class="card-header">
    <div class="card-title">
     清除浮动
    </div>
   </header>
   <div class="card-body">
    <p>通过添加 clearfix 工具类，可以快速轻松地清除容器中浮动的内容。</p>
    <p><strong>为父级元素</strong> 添加 <code>.clearfix</code> 类可以很容易地清除内部的浮动。还可以作为 mixin 使用。</p>
    <p>在 HTML 中的使用方式如下：</p>
    <pre>&lt;div class="clearfix"&gt;...&lt;/div&gt;</pre>
    <p>引用该 mixin 的源码：</p>
    <pre>@mixin clearfix() {
  &amp;::after {
    display: block;
    clear: both;
    content: "";
  }
}</pre>
    <p>在 SCSS 中作为 mixin 使用：</p>
    <pre>.element {
  @include clearfix;
}</pre>
    <p>下面的示例展示了 <code>.clearfix</code> 的用法。如果没有 <code>.clearfix</code> ，父级 <code>&lt;div&gt;</code> 元素是无法覆盖住两个按钮的，从而导致布局被破坏。</p>
    <div class="border-example">
     <div class="bg-info clearfix"><button type="button" class="btn btn-secondary float-start">向左浮动（float）的示例按钮</button> <button type="button" class="btn btn-secondary float-end">向右浮动（float）的示例按钮</button>
     </div>
    </div>
    <pre>&lt;div class="bg-info clearfix"&gt;
  &lt;button type="button" class="btn btn-secondary float-start"&gt;向左浮动（float）的示例按钮&lt;/button&gt;
  &lt;button type="button" class="btn btn-secondary float-end"&gt;向右浮动（float）的示例按钮&lt;/button&gt;
&lt;/div&gt;</pre>
   </div>
  </div>
 </div>
</div>
</div>
</template>
<script>
export default {
name: "Lyear-Helpers-Clearfix"
}
</script>

<style scoped>

</style>
