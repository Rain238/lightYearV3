<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <header class="card-header">
            <div class="card-title">
              表格插件
            </div>
          </header>
          <div class="card-body">
            <p>插件使用用bootstrap-table 1.20.0，文档地址：<a href="https://www.bootstrap-table.com.cn" target="_blank">https://www.bootstrap-table.com.cn</a>，github地址：<a
                href="https://github.com/wenzhixin/bootstrap-table" target="_blank">https://github.com/wenzhixin/bootstrap-table</a>。
            </p>
            <p>bootstrap-table插件具体的一些使用方法，可以查看 <a
                href="https://www.itxst.com/Bootstrap-Table/QuickStart.html" target="_blank">https://www.itxst.com/Bootstrap-Table/QuickStart.html</a>
            </p>
            <div id="toolbar" class="toolbar-btn-action">
              <button id="btn_add" type="button" class="btn btn-primary me-1"><span class="mdi mdi-plus"
                                                                                    aria-hidden="true"></span>新增
              </button>
              <button id="btn_edit" type="button" class="btn btn-success me-1"><span class="mdi mdi-check"
                                                                                     aria-hidden="true"></span>启用
              </button>
              <button id="btn_edit" type="button" class="btn btn-warning me-1"><span class="mdi mdi-block-helper"
                                                                                     aria-hidden="true"></span>禁用
              </button>
              <button id="btn_delete" type="button" class="btn btn-danger"><span class="mdi mdi-window-close"
                                                                                 aria-hidden="true"></span>删除
              </button>
            </div>
            <table id="table"></table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//表格插件js
import {bootstrap_table} from "@/assets/css/bootstrap-table/bootstrap-table.js"
import {bootstrap_table_zh_CN} from "@/assets/css/bootstrap-table/locale/bootstrap-table-zh-CN.min2.js"
//表格插件css
import "@/assets/css/bootstrap-table/bootstrap-table.min.css"
import "@/assets/css/style.min.css"

export default {
  name: "Lyear-Pages-Table",
  methods: {
    fun: function () {
      bootstrap_table()
      bootstrap_table_zh_CN();
    },
    table:function () {
      /**
       * 分页相关的配置
       **/
      const pagination = {
        // 分页方式：[client] 客户端分页，[server] 服务端分页
        sidePagination: "server",
        // 初始化加载第一页，默认第一页
        pageNumber: 1,
        // 每页的记录行数
        pageSize: 10,
        // 可供选择的每页的行数 - (亲测大于1000存在渲染问题)
        pageList: [5, 10, 25, 50, 100],
        // 在上百页的情况下体验较好 - 能够显示首尾页
        paginationLoop: true,
        // 展示首尾页的最小页数
        paginationPagesBySide: 2
      };

      /**
       * 按钮相关配置
       **/
      const button = {
        // 按钮的类
        buttonsClass: 'default',
        // 类名前缀
        buttonsPrefix: 'btn'
      }

      /**
       * 图标相关配置
       **/
      const icon = {
        // 图标前缀
        iconsPrefix: 'mdi',
        // 图标大小
        iconSize: 'mini',
        // 图标的设置
        icons: {
          paginationSwitchDown: 'mdi-door-closed',
          paginationSwitchUp: 'mdi-door-open',
          refresh: 'mdi-refresh',
          toggleOff: 'mdi-toggle-switch-off',
          toggleOn: 'mdi-toggle-switch',
          columns: 'mdi-table-column-remove',
          detailOpen: 'mdi-plus',
          detailClose: 'mdi-minus',
          fullscreen: 'mdi-monitor-screenshot',
          search: 'mdi-table-search',
          clearSearch: 'mdi-trash-can-outline'
        }
      };

      /**
       * 表格相关的配置
       **/
      const table = {
        classes: 'table table-bordered table-hover table-striped lyear-table',
        // 请求地址
        url: 'http://www.bixiaguangnian.com/index/test/getExampleJson',
        // 唯一ID字段
        uniqueId: 'id',
        // 每行的唯一标识字段
        idField: 'id',
        // 是否启用点击选中行
        clickToSelect: true,
        // 是否显示详细视图和列表视图的切换按钮(clickToSelect同时设置为true时点击会报错)
        // showToggle: true,
        // 请求得到的数据类型
        dataType: 'jsonp',
        // 请求方法
        method: 'get',
        // 工具按钮容器
        toolbar: '#toolbar',
        // 是否分页
        pagination: true,
        // 是否显示所有的列
        showColumns: true,
        // 是否显示刷新按钮
        showRefresh: true,
        // 显示图标
        showButtonIcons: true,
        // 显示文本
        showButtonText: false,
        // 显示全屏
        showFullscreen: true,
        // 开关控制分页
        showPaginationSwitch: true,
        // 总数字段
        totalField: 'total',
        // 当字段为 undefined 显示
        undefinedText: '-',
        // 排序方式
        sortOrder: "asc",
        ...icon,
        ...pagination,
        ...button
      };

      /**
       * 用于演示的列信息
       **/
      const columns = [{
        field: 'example',
        checkbox: true,
        // 列的宽度
        width: 5,
        // 宽度单位
        widthUnit: 'rem'
      }, {
        field: 'id',
        title: '编号',
        // 使用[align]，[halign]和[valign]选项来设置列和它们的标题的对齐方式。
        // h表示横向，v标识垂直
        align: 'center',
        // 是否作为排序列
        sortable: true,
        // 当列名称与实际名称不一致时可用
        sortName: 'sortId',
        switchable: false,
        // 列的宽度
        width: 8,
        // 宽度单位
        widthUnit: 'rem'
      }, {
        field: 'author',
        align: 'center',
        title: '作者',
        titleTooltip: '作者名称'
      }, {
        field: 'dynasty',
        align: 'center',
        title: '朝代',
      }, {
        field: 'nationality',
        // 是否可视(默认 - true)
        visible: false,
        align: 'center',
        title: '国籍'
      }, {
        field: 'opus',
        align: 'center',
        title: '作品'
      }, {
        field: 'category',
        align: 'center',
        title: '分类'
      }, {
        field: 'status',
        title: '状态',
        formatter:function(value, row, index){
          var value="";
          if (row.status == '0') {
            value = '<span class="badge bg-danger">禁用</span>';
          } else if(row.status == '1') {
            value = '<span class="badge bg-success">正常</span>';
          } else {
            value = '<span class="badge bg-secondary">未知</span>' ;
          }
          return value;
        }
      }, {
        field: 'operate',
        title: '操作',
        formatter: btnGroup,  // 自定义方法
        events: {
          'click .edit-btn': function (event, value, row, index) {
            event.stopPropagation();
            editUser(row);
          },
          'click .del-btn': function (event, value, row, index) {
            event.stopPropagation();
            delUser(row);
          }
        }
      }];

      // 自定义操作按钮
      function btnGroup () {
        let html =
            '<a href="#!" class="btn btn-sm btn-default me-1 edit-btn" title="编辑" data-bs-toggle="tooltip"><i class="mdi mdi-pencil"></i></a>' +
            '<a href="#!" class="btn btn-sm btn-default del-btn" title="删除" data-bs-toggle="tooltip"><i class="mdi mdi-window-close"></i></a>';
        return html;
      }

      // 操作方法 - 编辑
      function editUser() {
        alert('跳转修改信息');
      }
      // 操作方法 - 删除
      function delUser() {
        alert('信息删除成功');
      }

      $('table').bootstrapTable({
        ...table,
        // 自定义的查询参数
        queryParams: function (params) {
          return {
            // 每页数据量
            limit: params.limit,
            // sql语句起始索引
            offset: params.offset,
            page: (params.offset / params.limit) + 1,
            // 排序的列名
            sort: params.sort,
            // 排序方式 'asc' 'desc'
            sortOrder: params.order
          };
        },
        columns,
        onLoadSuccess: function(data){
          $("[data-bs-toggle='tooltip']").tooltip();
        }
      });
    }
  },
  mounted() {
    this.fun()
    this.table()
  }
}
</script>

<style scoped>

</style>
