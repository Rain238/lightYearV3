<template>
<div class="container-fluid">
<div class="row">
 <div class="col-lg-12">
  <div class="card">
   <header class="card-header">
    <div class="card-title">
     关闭按钮
    </div>
   </header>
   <div class="card-body">
    <p>这是一个通用的关闭按钮（close button）组件，用于关闭诸如模态框（modal）和警告框（alert）之类的窗口。</p>
    <h5>示例</h5>
    <p>本组件通过 <code>.btn-close</code> 类提供了一个关闭其它组件的方式。默认样式不多，但可定制度高。通过修改 Sass 变量可替换默认的 <code>background-image</code>。<strong>请务必为屏幕阅读器添加说明性文字</strong>，就像下面示例中的 <code>aria-label</code> 一样。</p>
    <div class="border-example"><button type="button" class="btn-close" aria-label="Close"></button>
    </div>
    <pre>&lt;button type="button" class="btn-close" aria-label="Close"&gt;&lt;/button&gt;</pre>
    <h5>禁用状态</h5>
    <p>处于禁用状态的关闭按钮（close button）会改变自己的透明度 <code>opacity</code> 属性。我们还设置了 <code>pointer-events: none</code> 和 <code>user-select: none</code> 来防止鼠标悬停和活动状态被触发。</p>
    <div class="border-example"><button type="button" class="btn-close" disabled aria-label="Close"></button>
    </div>
    <pre>&lt;button type="button" class="btn-close" disabled aria-label="Close"&gt;&lt;/button&gt;</pre>
    <h5>白色变体</h5>
    <p>将默认的 <code>.btn-close</code> 类修改为 <code>.btn-close-white</code> 类，可将按钮改变为白色。<code>.btn-close-white</code> 类是使用 <code>filter</code> 属性来实现 <code>background-image</code> 反色的。</p>
    <div class="border-example bg-dark"><button type="button" class="btn-close btn-close-white" aria-label="Close"></button> <button type="button" class="btn-close btn-close-white" disabled aria-label="Close"></button>
    </div>
    <pre>&lt;button type="button" class="btn-close btn-close-white" aria-label="Close"&gt;&lt;/button&gt;
&lt;button type="button" class="btn-close btn-close-white" disabled aria-label="Close"&gt;&lt;/button&gt;</pre>
   </div>
  </div>
 </div>
</div>
</div>
</template>
<script>
export default {
name: "Lyear-Components-Close-Button"
}
</script>

<style scoped>

</style>
