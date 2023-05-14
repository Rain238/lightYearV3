<template>
<div class="container-fluid">
<div class="row">
 <div class="col-lg-12">
  <div class="card">
   <header class="card-header">
    <div class="card-title">
     文本截断
    </div>
   </header>
   <div class="card-body">
    <p>将长文本截断并用省略号代替。</p>
    <p>对于超长的内容，你可以通过添加 <code>.text-truncate</code> 类将文本截断并添加省略号。<strong>需要设置 <code>display: inline-block</code> 或 <code>display: block</code> 属性。</strong></p>
    <div class="border-example">
     <div class="row">
      <div class="col-2 text-truncate">
       这段文字很长，一旦显示就会被截断。
      </div>
     </div><span class="d-inline-block text-truncate" style="max-width: 150px;"> 这段文字很长，一旦显示就会被截断。 </span>
    </div>
    <pre>&lt;!-- Block level --&gt;
&lt;div class="row"&gt;
  &lt;div class="col-2 text-truncate"&gt;
    这段文字很长，一旦显示就会被截断。
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Inline level --&gt;
&lt;span class="d-inline-block text-truncate" style="max-width: 150px;"&gt;
  这段文字很长，一旦显示就会被截断。
&lt;/span&gt;</pre>
   </div>
  </div>
 </div>
</div>
</div>
</template>
<script>
export default {
name: "Lyear-Helpers-Text-Truncation"
}
</script>

<style scoped>

</style>
