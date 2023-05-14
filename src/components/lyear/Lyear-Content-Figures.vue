<template>
<div class="container-fluid">
<div class="row">
 <div class="col-lg-12">
  <div class="card">
   <header class="card-header">
    <div class="card-title">
     画像
    </div>
   </header>
   <div class="card-body">
    <p class="bd-lead">通过 Bootstrap 的画像（figure）组件来显示相关联的图片和文本。本文档包含了画像（figure）组件的说明和示例。</p>
    <p>任何时候需要显示一段内容（例如带有可选标题的图片），请使用 <code>&lt;figure&gt;</code> 标签。</p>
    <p><code>.figure</code>、<code>.figure-img</code> 和 <code>.figure-caption</code> 类为 HTML5 的 <code>&lt;figure&gt;</code> 和 <code>&lt;figcaption&gt;</code> 元素提供了一些基本样式。<code>&lt;figure&gt;</code> 标签内所包含的图片如果没有明确地设置尺寸的话，请务必为 <code>&lt;img&gt;</code>标签添加 <code>.img-fluid</code> 类，使其支持响应式布局。</p>
    <div class="border-example">
     <figure class="figure"><img src="../../assets/images/img-placeholder.png" class="figure-img img-fluid rounded" alt="...">
      <figcaption class="figure-caption">
       上图的标题
      </figcaption>
     </figure>
    </div>
    <pre>&lt;figure class="figure"&gt;
  &lt;img src="..." class="figure-img img-fluid rounded" alt="..."&gt;
  &lt;figcaption class="figure-caption"&gt;上图的标题&lt;/figcaption&gt;
&lt;/figure&gt;</pre>
    <p>通过使用我们提供的文本工具类可以轻松对齐 <code>&lt;figure&gt;</code> 所包含的标题。</p>
    <div class="border-example">
     <figure class="figure"><img src="../../assets/images/img-placeholder.png" class="figure-img img-fluid rounded" alt="...">
      <figcaption class="figure-caption text-end">
       上图的标题
      </figcaption>
     </figure>
    </div>
    <pre>&lt;figure class="figure"&gt;
  &lt;img src="..." class="figure-img img-fluid rounded" alt="..."&gt;
  &lt;figcaption class="figure-caption text-end"&gt;上图的标题&lt;/figcaption&gt;
&lt;/figure&gt;</pre>
   </div>
  </div>
 </div>
</div>
</div>
</template>
<script>
export default {
name: "Lyear-Content-Figures"
}
</script>

<style scoped>

</style>
