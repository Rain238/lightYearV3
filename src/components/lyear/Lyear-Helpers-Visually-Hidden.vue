<template>
<div class="container-fluid">
<div class="row">
 <div class="col-lg-12">
  <div class="card">
   <header class="card-header">
    <div class="card-title">
     视觉隐藏
    </div>
   </header>
   <div class="card-body">
    <p>通过这里提供的工具类可以在视觉上隐藏 HTML 元素，但通过辅助技术可以访问到这些元素。</p>
    <p>通过 <code>.visually-hidden</code> 类在视觉上隐藏某个元素的同时，仍然能够被辅助技术（例如屏幕阅读器）识别。通过 <code>.visually-hidden-focusable</code> 类可以在视觉上隐藏某个元素，但是在获得焦点时能够显示该元素（例如，只使用键盘的用户）。也可以将 <code>.visually-hidden-focusable</code> 类应用到包含其他元素的容器元素上，幸亏有 <code>:focus-within</code>，当容器元素 中的任何子元素获得焦点时，该容器元素将被显示出来。</p>
    <div class="border-example">
     <h2 class="visually-hidden">Title for screen readers</h2><a class="visually-hidden-focusable" href="#content">Skip to main content</a>
     <div class="visually-hidden-focusable">
      这是一个容器元素，包含<a href="#">可获得焦点的元素。</a>
     </div>
    </div>
    <pre>&lt;h2 class="visually-hidden"&gt;Title for screen readers&lt;/h2&gt;
&lt;a class="visually-hidden-focusable" href="#content"&gt;Skip to main content&lt;/a&gt;
&lt;div class="visually-hidden-focusable"&gt;这是一个容器元素，包含&lt;a href="#"&gt;可获得焦点的元素。&lt;/a&gt;&lt;/div&gt;</pre>
   </div>
  </div>
 </div>
</div>
</div>
</template>
<script>
export default {
name: "Lyear-Helpers-Visually-Hidden"
}
</script>

<style scoped>

</style>
