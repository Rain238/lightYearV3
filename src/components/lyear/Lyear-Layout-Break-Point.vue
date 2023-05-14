<template>
<div class="container-fluid">
<div class="row">
 <div class="col-lg-12">
  <div class="card">
   <header class="card-header">
    <div class="card-title">
     拐点
    </div>
   </header>
   <div class="card-body">
    <p>拐点是可自定义的宽度，用于确定在引导过程中响应布局在设备或视口大小上的行为。简单理解就是响应式布局时，呈现出两种不同效果时候的某一个宽度临界值。</p>
    <h6>可用拐点</h6>
    <p>Bootstrap 包括六个默认拐点，有时称为网格层，用于响应性地构建。</p>
    <table class="table">
     <thead>
      <tr>
       <th>Breakpoint</th>
       <th>Class infix</th>
       <th>Dimensions</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>X-Small</td>
       <td><em>None</em></td>
       <td>&lt;576px</td>
      </tr>
      <tr>
       <td>Small</td>
       <td><code>sm</code></td>
       <td>≥576px</td>
      </tr>
      <tr>
       <td>Medium</td>
       <td><code>md</code></td>
       <td>≥768px</td>
      </tr>
      <tr>
       <td>Large</td>
       <td><code>lg</code></td>
       <td>≥992px</td>
      </tr>
      <tr>
       <td>Extra large</td>
       <td><code>xl</code></td>
       <td>≥1200px</td>
      </tr>
      <tr>
       <td>Extra extra large</td>
       <td><code>xxl</code></td>
       <td>≥1400px</td>
      </tr>
     </tbody>
    </table>
    <div class="callout callout-info">
     当然你也可以自己定义拐点，官方文档中有详细使用sass定义的介绍，感兴趣的小伙伴可以了解下。
    </div>
   </div>
  </div>
 </div>
</div>
</div>
</template>
<script>
export default {
name: "Lyear-Layout-Break-Point"
}
</script>

<style scoped>

</style>
