<template>
<div class="container-fluid">
<div class="row">
 <div class="col-lg-12">
  <div class="card">
   <header class="card-header">
    <div class="card-title">
     定位
    </div>
   </header>
   <div class="card-body">
    <p>利用这些工具类快速设置元素的位置。</p>
    <h6>固定（fixed）在顶部</h6>
    <p>将一个元素固定在视口（viewport）的顶部且边缘对齐。使用之前请确保你充分了解了该定位对你的项目所带来的影响。你可能还需要添加额外的 CSS。</p>
    <pre>&lt;div class="fixed-top"&gt;...&lt;/div&gt;</pre>
    <h2 id="固定fixed在底部">固定（fixed）在底部</h2>
    <p>将一个元素固定在视口（viewport）的底部且边缘对齐。使用之前请确保你充分了解了该定位对你的项目所带来的影响。你可能还需要添加额外的 CSS。</p>
    <pre>&lt;div class="fixed-bottom"&gt;...&lt;/div&gt;</pre>
    <h6>黏着（sticky）在顶部</h6>
    <p>当页面滚动并经过某个元素之后，该元素被固定在视口（viewport）的顶部且边缘对齐。</p>
    <pre>&lt;div class="sticky-top"&gt;...&lt;/div&gt;</pre>
    <h6>黏着在顶部的功能也支持响应式布局</h6>
    <p><code>.sticky-top</code> 工具类针对响应式布局提供了相应的变种。</p>
    <pre>&lt;div class="sticky-sm-top"&gt;当视口（viewport）是 SM (small) 或更宽的尺寸时，黏着在视口（viewport）的顶部&lt;/div&gt;
&lt;div class="sticky-md-top"&gt;当视口（viewport）是 MD (medium) 或更宽的尺寸时，黏着在视口（viewport）的顶部&lt;/div&gt;
&lt;div class="sticky-lg-top"&gt;当视口（viewport）是 LG (large) 或更宽的尺寸时，黏着在视口（viewport）的顶部&lt;/div&gt;
&lt;div class="sticky-xl-top"&gt;当视口（viewport）是 XL (extra-large) 或更宽的尺寸时，黏着在视口（viewport）的顶部&lt;/div&gt;
&lt;div class="sticky-xxl-top"&gt;当视口（viewport）是 XXL (extra-extra-large) 或更宽的尺寸时，黏着在视口（viewport）的顶部&lt;/div&gt;</pre>
    <h6>黏着（sticky）在底部</h6>
    <p>将一个元素定位在视口的底部，从一个边缘到另一个边缘，但只有在您滚动经过它之后。</p>
    <pre>&lt;div class="sticky-bottom"&gt;...&lt;/div&gt;</pre>
    <h6>响应式黏着在底部</h6>
    <p><code>.sticky-bottom</code> 实用程序也存在响应变体。</p>
    <pre>&lt;div class="sticky-sm-bottom"&gt;当视口（viewport）是 SM (small) 或更宽的尺寸时，黏着在视口（viewport）的底部&lt;/div&gt;
&lt;div class="sticky-md-bottom"&gt;当视口（viewport）是 MD (medium) 或更宽的尺寸时，黏着在视口（viewport）的底部&lt;/div&gt;
&lt;div class="sticky-lg-bottom"&gt;当视口（viewport）是 LG (large) 或更宽的尺寸时，黏着在视口（viewport）的底部&lt;/div&gt;
&lt;div class="sticky-xl-bottom"&gt;当视口（viewport）是 XL (extra-large) 或更宽的尺寸时，黏着在视口（viewport）的底部&lt;/div&gt;
&lt;div class="sticky-xxl-bottom"&gt;当视口（viewport）是 XXL (extra-extra-large) 或更宽的尺寸时，黏着在视口（viewport）的底部&lt;/div&gt;</pre>
   </div>
  </div>
 </div>
</div>
</div>
</template>
<script>
export default {
name: "Lyear-Helpers-Position"
}
</script>

<style scoped>

</style>
