<template>
  <!--左侧导航-->
  <aside class="lyear-layout-sidebar">

    <!-- logo -->
    <div id="logo" class="sidebar-header">
      <a href="index.html"><img src="../../assets/images/logo-sidebar.png" title="LightYear" alt="LightYear" /></a>
    </div>
    <div class="lyear-layout-sidebar-info lyear-scroll">

      <nav class="sidebar-main">

        <ul class="nav-drawer">
          <li class="nav-item active">
            <a class="multitabs" href="/lyear-main" id="default-page">
              <i class="mdi mdi-home-city-outline"></i>
              <span>后台首页</span>
            </a>
          </li>
          <li class="nav-item nav-item-has-subnav">
            <a href="javascript:void(0)">
              <i class="mdi mdi-television-guide"></i>
              <span>布局</span>
            </a>
            <ul class="nav nav-subnav">
              <li> <a class="multitabs" href="/lyear-layout-break-point">拐点</a> </li>
              <li> <a class="multitabs" href="/lyear-layout-containers">容器</a> </li>
              <li> <a class="multitabs" href="/lyear-layout-grid">栅格</a> </li>
              <li> <a class="multitabs" href="/lyear-layout-columns">列</a> </li>
              <li> <a class="multitabs" href="/lyear-layout-gutters">沟槽</a> </li>
              <li> <a class="multitabs" href="/lyear-layout-utilities">实用程序</a> </li>
              <li> <a class="multitabs" href="/lyear-layout-zindex">Z-index</a> </li>
            </ul>
          </li>
          <li class="nav-item nav-item-has-subnav">
            <a href="javascript:void(0)">
              <i class="mdi mdi-silo"></i>
              <span>页面内容</span>
            </a>
            <ul class="nav nav-subnav">
              <li> <a class="multitabs" href="/lyear-content-typography">排版</a> </li>
              <li> <a class="multitabs" href="/lyear-content-images">图片</a> </li>
              <li> <a class="multitabs" href="/lyear-content-tables">表格</a> </li>
              <li> <a class="multitabs" href="/lyear-content-figures">画像</a> </li>
            </ul>
          </li>
          <li class="nav-item nav-item-has-subnav">
            <a href="javascript:void(0)">
              <i class="mdi mdi-map-outline"></i>
              <span>表单</span>
            </a>
            <ul class="nav nav-subnav">
              <Li> <a cLass="multitabs" href="/lyear-forms-overview">概述</a> </Li>
              <Li> <a cLass="multitabs" href="/lyear-forms-control">表单控件</a> </Li>
              <Li> <a cLass="multitabs" href="/lyear-forms-seLect">下拉选择</a> </Li>
              <Li> <a cLass="multitabs" href="/lyear-forms-radio">单选框</a> </Li>
              <Li> <a cLass="multitabs" href="/lyear-forms-checkbox">复选框</a> </Li>
              <Li> <a cLass="multitabs" href="/lyear-forms-switch">开关</a> </Li>
              <Li> <a cLass="multitabs" href="/lyear-forms-range">范围</a> </Li>
              <Li> <a cLass="multitabs" href="/lyear-forms-input-group">输入组</a> </Li>
              <Li> <a cLass="multitabs" href="/lyear-forms-fLoating-labels">浮动标签</a> </Li>
              <Li> <a cLass="multitabs" href="/lyear-forms-layout">布局</a> </Li>
              <Li> <a cLass="multitabs" href="/lyear-forms-vaLidation">验证</a> </Li>
            </ul>
          </li>
          <li class="nav-item nav-item-has-subnav">
            <a href="javascript:void(0)">
              <i class="mdi mdi-tune"></i>
              <span>组件</span>
            </a>
            <ul class="nav nav-subnav">
              <li> <a class="multitabs" href="/lyear-components-accordion">手风琴菜单</a> </li>
              <li> <a class="multitabs" href="/lyear-components-alerts">警告框</a> </li>
              <li> <a class="multitabs" href="/lyear-components-badge">徽章</a> </li>
              <li> <a class="multitabs" href="/lyear-components-breadcrumb">面包屑导航</a> </li>
              <li> <a class="multitabs" href="/lyear-components-buttons">按钮</a> </li>
              <li> <a class="multitabs" href="/lyear-components-button-group">按钮组</a> </li>
              <li> <a class="multitabs" href="/lyear-components-card">卡片</a> </li>
              <li> <a class="multitabs" href="/lyear-components-carousel">轮播</a> </li>
              <li> <a class="multitabs" href="/lyear-components-close-button">关闭按钮</a> </li>
              <li> <a class="multitabs" href="/lyear-components-collapse">折叠</a> </li>
              <li> <a class="multitabs" href="/lyear-components-dropdowns">下拉菜单</a> </li>
              <li> <a class="multitabs" href="/lyear-components-list-group">列表组</a> </li>
              <li> <a class="multitabs" href="/lyear-components-modal">模态框</a> </li>
              <li> <a class="multitabs" href="/lyear-components-navs-tabs">导航 &amp; 标签页</a> </li>
              <li> <a class="multitabs" href="/lyear-components-navbar">导航栏</a> </li>
              <li> <a class="multitabs" href="/lyear-components-offcanvas">滑动容器</a> </li>
              <li> <a class="multitabs" href="/lyear-components-pagination">分页</a> </li>
              <li> <a class="multitabs" href="/lyear-components-placeholders">占位符</a> </li>
              <li> <a class="multitabs" href="/lyear-components-popovers">POP提示</a> </li>
              <li> <a class="multitabs" href="/lyear-components-progress">进度条</a> </li>
              <li> <a class="multitabs" href="/lyear-components-scrollspy">滚动监听</a> </li>
              <li> <a class="multitabs" href="/lyear-components-spinners">加载状态</a> </li>
              <li> <a class="multitabs" href="/lyear-components-toasts">通知消息</a> </li>
              <li> <a class="multitabs" href="/lyear-components-tooltips">工具提示</a> </li>
              <li> <a class="multitabs" href="/lyear-components-other">其他</a> </li>
            </ul>
          </li>
          <li class="nav-item nav-item-has-subnav">
            <a href="javascript:void(0)">
              <i class="mdi mdi-card-bulleted-outline"></i>
              <span>助手</span>
            </a>
            <ul class="nav nav-subnav">
              <li> <a class="multitabs" href="/lyear-helpers-clearfix">清除浮动</a> </li>
              <li> <a class="multitabs" href="/lyear-helpers-colored-links">彩色链接</a> </li>
              <li> <a class="multitabs" href="/lyear-helpers-ratio">比例</a> </li>
              <li> <a class="multitabs" href="/lyear-helpers-position">定位</a> </li>
              <li> <a class="multitabs" href="/lyear-helpers-stacks">堆叠</a> </li>
              <li> <a class="multitabs" href="/lyear-helpers-visually-hidden">视觉隐藏</a> </li>
              <li> <a class="multitabs" href="/lyear-helpers-stretched-link">延伸链接</a> </li>
              <li> <a class="multitabs" href="/lyear-helpers-text-truncation">文本截断</a> </li>
              <li> <a class="multitabs" href="/lyear-helpers-vertical-rule">垂直法则</a> </li>
            </ul>
          </li>
          <li class="nav-item nav-item-has-subnav">
            <a href="javascript:void(0)">
              <i class="mdi mdi-map-search-outline"></i>
              <span>工具类</span>
            </a>
            <ul class="nav nav-subnav">
              <li> <a class="multitabs" href="/lyear-utilities-background">背景</a> </li>
              <li> <a class="multitabs" href="/lyear-utilities-borders">边框</a> </li>
              <li> <a class="multitabs" href="/lyear-utilities-colors">颜色</a> </li>
              <li> <a class="multitabs" href="/lyear-utilities-display">显示属性</a> </li>
              <li> <a class="multitabs" href="/lyear-utilities-flex">弹性布局</a> </li>
              <li> <a class="multitabs" href="/lyear-utilities-float">浮动</a> </li>
              <li> <a class="multitabs" href="/lyear-utilities-interactions">交互</a> </li>
              <li> <a class="multitabs" href="/lyear-utilities-opacity">透明度</a> </li>
              <li> <a class="multitabs" href="/lyear-utilities-overflow">溢出处理</a> </li>
              <li> <a class="multitabs" href="/lyear-utilities-position">定位</a> </li>
              <li> <a class="multitabs" href="/lyear-utilities-shadows">阴影</a> </li>
              <li> <a class="multitabs" href="/lyear-utilities-sizing">尺寸</a> </li>
              <li> <a class="multitabs" href="/lyear-utilities-spacing">间距</a> </li>
              <li> <a class="multitabs" href="/lyear-utilities-text">文本</a> </li>
              <li> <a class="multitabs" href="/lyear-utilities-vertical-align">垂直对齐</a> </li>
              <li> <a class="multitabs" href="/lyear-utilities-visibility">可见性</a> </li>
            </ul>
          </li>
          <li class="nav-item nav-item-has-subnav">
            <a href="javascript:void(0)">
              <i class="mdi mdi-stove"></i>
              <span>示例页面</span>
            </a>
            <ul class="nav nav-subnav">
              <li> <a class="multitabs" href="/lyear-pages-doc">文档列表</a> </li>
              <li> <a class="multitabs" href="/lyear-pages-table">表格插件</a> </li>
              <li> <a class="multitabs" href="/lyear-pages-gallery">图库列表</a> </li>
              <li> <a class="multitabs" href="/lyear-pages-config">网站配置</a> </li>
              <li> <a class="multitabs" href="/lyear-pages-rabc">设置权限</a> </li>
              <li> <a class="multitabs" href="/lyear-pages-add-doc">新增文档</a> </li>
              <li> <a  href="/lyear-pages-login-1" target="_blank">登录页面1</a> </li>
              <li> <a  href="/lyear-pages-login-2" target="_blank">登录页面2</a> </li>
              <li> <a  href="/lyear-pages-login-3" target="_blank">登录页面3</a> </li>
              <li> <a  href="/lyear-pages-login-4" target="_blank">登录页面4</a> </li>
              <li> <a  href="/lyear-pages-login-5" target="_blank">登录页面5</a> </li>
              <li> <a  class="multitabs" href="/lyear-pages-error">错误页面</a> </li>
            </ul>
          </li>
          <li class="nav-item nav-item-has-subnav">
            <a href="javascript:void(0)">
              <i class="mdi mdi-card-text-outline"></i>
              <span>其他内容</span>
            </a>
            <ul class="nav nav-subnav">
              <li> <a class="multitabs" href="/lyear-other-icons">图标</a> </li>
            </ul>
          </li>
          <li class="nav-item nav-item-has-subnav">
            <a href="javascript:void(0)">
              <i class="mdi mdi-file-code-outline"></i>
              <span>JS 插件</span>
            </a>
            <ul class="nav nav-subnav">
              <li> <a class="multitabs" href="/lyear-pages-guide">表单向导</a> </li>
              <li> <a class="multitabs" href="/lyear-js-colorpicker">选色器</a> </li>
              <li> <a class="multitabs" href="/lyear-js-chartjs">Chart.js</a> </li>
              <li> <a class="multitabs" href="/lyear-js-jconfirm">对话框</a> </li>
              <li> <a class="multitabs" href="/lyear-js-notify">通知消息</a> </li>
              <li> <a class="multitabs" href="/lyear-js-maxlength">长度判断</a> </li>
              <li> <a class="multitabs" href="/lyear-js-select">下拉选择</a> </li>
<!--              <li> <a class="multitabs" href="/lyear-js-fullcalendar">日程插件</a> </li>-->
              <li> <a class="multitabs" href="/lyear-js-loading">loading插件</a> </li>
            </ul>
          </li>
          <li class="nav-item nav-item-has-subnav">
            <a href="javascript:void(0)">
              <i class="mdi mdi-folder-text-outline"></i>
              <span>多级菜单</span>
            </a>
            <ul class="nav nav-subnav">
              <li> <a href="#!">一级菜单</a> </li>
              <li class="nav-item nav-item-has-subnav">
                <a href="#!">一级菜单</a>
                <ul class="nav nav-subnav">
                  <li> <a href="#!">二级菜单</a> </li>
                  <li class="nav-item nav-item-has-subnav">
                    <a href="#!">二级菜单</a>
                    <ul class="nav nav-subnav">
                      <li> <a href="#!">三级菜单</a> </li>
                      <li> <a href="#!">三级菜单</a> </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li> <a href="#!">一级菜单</a> </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="sidebar-footer">
        <p class="copyright">
          <span>Copyright &copy; 2022. </span>
          <a target="_blank" href="http://www.bixiaguangnian.com">笔下光年</a>
          <span> All rights reserved.</span>
        </p>
      </div>
    </div>

  </aside>
  <!--End 左侧导航-->

</template>

<script>
export default {
  name: "Lyear-Layout-Sidebar"
}
</script>

<style scoped>

</style>















































































































































































































































