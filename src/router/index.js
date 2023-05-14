//该文件专门用于创建整个应用的路由器
// import * as VueRouter from "vue-router";
//引入组件
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import LyearLayoutMenu from "@/components/mian/Lyear-Layout-Menu.vue";

//登录页面1
import LyearPagesLogin1 from "@/components/lyear/Lyear-Pages-Login-1.vue";

//登录页面2
import LyearPagesLogin2 from "@/components/lyear/Lyear-Pages-Login-2.vue";

//登录页面3
import LyearPagesLogin3 from "@/components/lyear/Lyear-Pages-Login-3.vue";

//登录页面4
import LyearPagesLogin4 from "@/components/lyear/Lyear-Pages-Login-4.vue";

//登录页面5
import LyearPagesLogin5 from "@/components/lyear/Lyear-Pages-Login-5.vue";

//手风琴菜单
import LyearComponentsAccordion from "@/components/lyear/Lyear-Components-Accordion.vue";

//警告框
import LyearComponentsAlerts from "@/components/lyear/Lyear-Components-Alerts.vue";

//徽章
import LyearComponentsBadge from "@/components/lyear/Lyear-Components-Badge.vue";

//面包屑导航
import LyearComponentsBreadcrumb from "@/components/lyear/Lyear-Components-Breadcrumb.vue";

//按钮组
import LyearComponentsButtonGroup from "@/components/lyear/Lyear-Components-Button-Group.vue";

//按钮
import LyearComponentsButtons from "@/components/lyear/Lyear-Components-Buttons.vue";

//卡片
import LyearComponentsCard from "@/components/lyear/Lyear-Components-Card.vue";

//轮播
import LyearComponentsCarousel from "@/components/lyear/Lyear-Components-Carousel.vue";

//关闭按钮
import LyearComponentsCloseButton from "@/components/lyear/Lyear-Components-Close-Button.vue";

//折叠
import LyearComponentsCollapse from "@/components/lyear/Lyear-Components-Collapse.vue";

//下拉菜单
import LyearComponentsDropdowns from "@/components/lyear/Lyear-Components-Dropdowns.vue";

//列表组
import LyearComponentsListGroup from "@/components/lyear/Lyear-Components-List-Group.vue";

//模态框
import LyearComponentsModal from "@/components/lyear/Lyear-Components-Modal.vue";

//导航栏
import LyearComponentsNavbar from "@/components/lyear/Lyear-Components-Navbar.vue";

//导航 & 标签页
import LyearComponentsNavsTabs from "@/components/lyear/Lyear-Components-Navs-Tabs.vue";

//滑动容器
import LyearComponentsOffcanvas from "@/components/lyear/Lyear-Components-Offcanvas.vue";

//其他
import LyearComponentsOther from "@/components/lyear/Lyear-Components-Other.vue";

//分页
import LyearComponentsPagination from "@/components/lyear/Lyear-Components-Pagination.vue";

//占位符
import LyearComponentsPlaceholders from "@/components/lyear/Lyear-Components-Placeholders.vue";

//POP提示
import LyearComponentsPopovers from "@/components/lyear/Lyear-Components-Popovers.vue";

//进度条
import LyearComponentsProgress from "@/components/lyear/Lyear-Components-Progress.vue";

//滚动监听
import LyearComponentsScrollspy from "@/components/lyear/Lyear-Components-Scrollspy.vue";

//加载状态
import LyearComponentsSpinners from "@/components/lyear/Lyear-Components-Spinners.vue";

//通知消息
import LyearComponentsToasts from "@/components/lyear/Lyear-Components-Toasts.vue";

//工具提示
import LyearComponentsTooltips from "@/components/lyear/Lyear-Components-Tooltips.vue";

//画像
import LyearContentFigures from "@/components/lyear/Lyear-Content-Figures.vue";

//图片
import LyearContentImages from "@/components/lyear/Lyear-Content-Images.vue";

//表格
import LyearContentTables from "@/components/lyear/Lyear-Content-Tables.vue";

//排版
import LyearContentTypography from "@/components/lyear/Lyear-Content-Typography.vue";

//复选框
import LyearFormsCheckbox from "@/components/lyear/Lyear-Forms-Checkbox.vue";

//表单控件
import LyearFormsControl from "@/components/lyear/Lyear-Forms-Control.vue";

//浮动标签
import LyearFormsFloatingLabels from "@/components/lyear/Lyear-Forms-Floating-Labels.vue";

//输入组
import LyearFormsInputGroup from "@/components/lyear/Lyear-Forms-Input-Group.vue";

//布局
import LyearFormsLayout from "@/components/lyear/Lyear-Forms-Layout.vue";

//概述
import LyearFormsOverview from "@/components/lyear/Lyear-Forms-Overview.vue";

//单选框
import LyearFormsRadio from "@/components/lyear/Lyear-Forms-Radio.vue";

//范围
import LyearFormsRange from "@/components/lyear/Lyear-Forms-Range.vue";

//下拉选择
import LyearFormsSelect from "@/components/lyear/Lyear-Forms-Select.vue";

//开关
import LyearFormsSwitch from "@/components/lyear/Lyear-Forms-Switch.vue";

//验证
import LyearFormsValidation from "@/components/lyear/Lyear-Forms-Validation.vue";

//清除浮动
import LyearHelpersClearfix from "@/components/lyear/Lyear-Helpers-Clearfix.vue";

//彩色链接
import LyearHelpersColoredLinks from "@/components/lyear/Lyear-Helpers-Colored-Links.vue";

//定位
import LyearHelpersPosition from "@/components/lyear/Lyear-Helpers-Position.vue";

//比例
import LyearHelpersRatio from "@/components/lyear/Lyear-Helpers-Ratio.vue";

//堆叠
import LyearHelpersStacks from "@/components/lyear/Lyear-Helpers-Stacks.vue";

//延伸链接
import LyearHelpersStretchedLink from "@/components/lyear/Lyear-Helpers-Stretched-Link.vue";

//文本截断
import LyearHelpersTextTruncation from "@/components/lyear/Lyear-Helpers-Text-Truncation.vue";

//垂直法则
import LyearHelpersVerticalRule from "@/components/lyear/Lyear-Helpers-Vertical-Rule.vue";

//视觉隐藏
import LyearHelpersVisuallyHidden from "@/components/lyear/Lyear-Helpers-Visually-Hidden.vue";

//Chart.js
import LyearJsChartjs from "@/components/lyear/Lyear-Js-Chartjs.vue";

//选色器
import LyearJsColorpicker from "@/components/lyear/Lyear-Js-Colorpicker.vue";

//日程插件
import LyearJsFullcalendar from "@/components/lyear/Lyear-Js-Fullcalendar.vue";

//对话框
import LyearJsJconfirm from "@/components/lyear/Lyear-Js-Jconfirm.vue";

//loading插件
import LyearJsLoading from "@/components/lyear/Lyear-Js-Loading.vue";

//长度判断
import LyearJsMaxlength from "@/components/lyear/Lyear-Js-Maxlength.vue";

//通知消息
import LyearJsNotify from "@/components/lyear/Lyear-Js-Notify.vue";

//下拉选择
import LyearJsSelect from "@/components/lyear/Lyear-Js-Select.vue";

//拐点
import LyearLayoutBreakPoint from "@/components/lyear/Lyear-Layout-Break-Point.vue";

//列
import LyearLayoutColumns from "@/components/lyear/Lyear-Layout-Columns.vue";

//容器
import LyearLayoutContainers from "@/components/lyear/Lyear-Layout-Containers.vue";

//栅格
import LyearLayoutGrid from "@/components/lyear/Lyear-Layout-Grid.vue";

//沟槽
import LyearLayoutGutters from "@/components/lyear/Lyear-Layout-Gutters.vue";

//实用程序
import LyearLayoutUtilities from "@/components/lyear/Lyear-Layout-Utilities.vue";

//Z-index
import LyearLayoutZindex from "@/components/lyear/Lyear-Layout-Zindex.vue";

//后台首页
import LyearMain from "@/components/lyear/Lyear-Main.vue";

//图标
import LyearOtherIcons from "@/components/lyear/Lyear-Other-Icons.vue";

//新增文档
import LyearPagesAddDoc from "@/components/lyear/Lyear-Pages-Add-Doc.vue";

//网站配置
import LyearPagesConfig from "@/components/lyear/Lyear-Pages-Config.vue";

//文档列表
import LyearPagesDoc from "@/components/lyear/Lyear-Pages-Doc.vue";

//错误页面
import LyearPagesError from "@/components/lyear/Lyear-Pages-Error.vue";

//图库列表
import LyearPagesGallery from "@/components/lyear/Lyear-Pages-Gallery.vue";

//表单向导
import LyearPagesGuide from "@/components/lyear/Lyear-Pages-Guide.vue";

//设置权限
import LyearPagesRabc from "@/components/lyear/Lyear-Pages-Rabc.vue";

//表格插件
import LyearPagesTable from "@/components/lyear/Lyear-Pages-Table.vue";

//背景
import LyearUtilitiesBackground from "@/components/lyear/Lyear-Utilities-Background.vue";

//边框
import LyearUtilitiesBorders from "@/components/lyear/Lyear-Utilities-Borders.vue";

//颜色
import LyearUtilitiesColors from "@/components/lyear/Lyear-Utilities-Colors.vue";

//显示属性
import LyearUtilitiesDisplay from "@/components/lyear/Lyear-Utilities-Display.vue";

//弹性布局
import LyearUtilitiesFlex from "@/components/lyear/Lyear-Utilities-Flex.vue";

//浮动
import LyearUtilitiesFloat from "@/components/lyear/Lyear-Utilities-Float.vue";

//交互
import LyearUtilitiesInteractions from "@/components/lyear/Lyear-Utilities-Interactions.vue";

//透明度
import LyearUtilitiesOpacity from "@/components/lyear/Lyear-Utilities-Opacity.vue";

//溢出处理
import LyearUtilitiesOverflow from "@/components/lyear/Lyear-Utilities-Overflow.vue";

//定位
import LyearUtilitiesPosition from "@/components/lyear/Lyear-Utilities-Position.vue";

//阴影
import LyearUtilitiesShadows from "@/components/lyear/Lyear-Utilities-Shadows.vue";

//尺寸
import LyearUtilitiesSizing from "@/components/lyear/Lyear-Utilities-Sizing.vue";

//间距
import LyearUtilitiesSpacing from "@/components/lyear/Lyear-Utilities-Spacing.vue";

//文本
import LyearUtilitiesText from "@/components/lyear/Lyear-Utilities-Text.vue";

//垂直对齐
import LyearUtilitiesVerticalAlign from "@/components/lyear/Lyear-Utilities-Vertical-Align.vue";

//可见性
import LyearUtilitiesVisibility from "@/components/lyear/Lyear-Utilities-Visibility.vue";

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/menu'　　//默认显示
        },
        {
            path: "/menu",
            name: "/LyearLayoutMenu",
            component: LyearLayoutMenu
        },
        {
            path: "/lyear-pages-login-1",
            name: "/LyearPagesLogin1",
            component: LyearPagesLogin1
        },
        {
            path: "/lyear-pages-login-2",
            name: "/LyearPagesLogin2",
            component: LyearPagesLogin2
        },
        {
            path: "/lyear-pages-login-3",
            name: "/LyearPagesLogin3",
            component: LyearPagesLogin3
        },
        {
            path: "/lyear-pages-login-4",
            name: "/LyearPagesLogin4",
            component: LyearPagesLogin4
        },{
            path: "/lyear-pages-login-5",
            name: "/LyearPagesLogin5",
            component: LyearPagesLogin5
        },

        {
            path: "/lyear-components-accordion",
            name: "/LyearComponentsAccordion",
            component: LyearComponentsAccordion
        },

        {
            path: "/lyear-components-alerts",
            name: "/LyearComponentsAlerts",
            component: LyearComponentsAlerts
        },

        {
            path: "/lyear-components-badge",
            name: "/LyearComponentsBadge",
            component: LyearComponentsBadge
        },

        {
            path: "/lyear-components-breadcrumb",
            name: "/LyearComponentsBreadcrumb",
            component: LyearComponentsBreadcrumb
        },

        {
            path: "/lyear-components-button-group",
            name: "/LyearComponentsButtonGroup",
            component: LyearComponentsButtonGroup
        },

        {
            path: "/lyear-components-buttons",
            name: "/LyearComponentsButtons",
            component: LyearComponentsButtons
        },

        {
            path: "/lyear-components-card",
            name: "/LyearComponentsCard",
            component: LyearComponentsCard
        },

        {
            path: "/lyear-components-carousel",
            name: "/LyearComponentsCarousel",
            component: LyearComponentsCarousel
        },

        {
            path: "/lyear-components-close-button",
            name: "/LyearComponentsCloseButton",
            component: LyearComponentsCloseButton
        },

        {
            path: "/lyear-components-collapse",
            name: "/LyearComponentsCollapse",
            component: LyearComponentsCollapse
        },

        {
            path: "/lyear-components-dropdowns",
            name: "/LyearComponentsDropdowns",
            component: LyearComponentsDropdowns
        },

        {
            path: "/lyear-components-list-group",
            name: "/LyearComponentsListGroup",
            component: LyearComponentsListGroup
        },

        {
            path: "/lyear-components-modal",
            name: "/LyearComponentsModal",
            component: LyearComponentsModal
        },

        {
            path: "/lyear-components-navbar",
            name: "/LyearComponentsNavbar",
            component: LyearComponentsNavbar
        },

        {
            path: "/lyear-components-navs-tabs",
            name: "/LyearComponentsNavsTabs",
            component: LyearComponentsNavsTabs
        },

        {
            path: "/lyear-components-offcanvas",
            name: "/LyearComponentsOffcanvas",
            component: LyearComponentsOffcanvas
        },

        {
            path: "/lyear-components-other",
            name: "/LyearComponentsOther",
            component: LyearComponentsOther
        },

        {
            path: "/lyear-components-pagination",
            name: "/LyearComponentsPagination",
            component: LyearComponentsPagination
        },

        {
            path: "/lyear-components-placeholders",
            name: "/LyearComponentsPlaceholders",
            component: LyearComponentsPlaceholders
        },

        {
            path: "/lyear-components-popovers",
            name: "/LyearComponentsPopovers",
            component: LyearComponentsPopovers
        },

        {
            path: "/lyear-components-progress",
            name: "/LyearComponentsProgress",
            component: LyearComponentsProgress
        },

        {
            path: "/lyear-components-scrollspy",
            name: "/LyearComponentsScrollspy",
            component: LyearComponentsScrollspy
        },

        {
            path: "/lyear-components-spinners",
            name: "/LyearComponentsSpinners",
            component: LyearComponentsSpinners
        },

        {
            path: "/lyear-components-toasts",
            name: "/LyearComponentsToasts",
            component: LyearComponentsToasts
        },

        {
            path: "/lyear-components-tooltips",
            name: "/LyearComponentsTooltips",
            component: LyearComponentsTooltips
        },

        {
            path: "/lyear-content-figures",
            name: "/LyearContentFigures",
            component: LyearContentFigures
        },

        {
            path: "/lyear-content-images",
            name: "/LyearContentImages",
            component: LyearContentImages
        },

        {
            path: "/lyear-content-tables",
            name: "/LyearContentTables",
            component: LyearContentTables
        },

        {
            path: "/lyear-content-typography",
            name: "/LyearContentTypography",
            component: LyearContentTypography
        },

        {
            path: "/lyear-forms-checkbox",
            name: "/LyearFormsCheckbox",
            component: LyearFormsCheckbox
        },

        {
            path: "/lyear-forms-control",
            name: "/LyearFormsControl",
            component: LyearFormsControl
        },

        {
            path: "/lyear-forms-floating-labels",
            name: "/LyearFormsFloatingLabels",
            component: LyearFormsFloatingLabels
        },

        {
            path: "/lyear-forms-input-group",
            name: "/LyearFormsInputGroup",
            component: LyearFormsInputGroup
        },

        {
            path: "/lyear-forms-layout",
            name: "/LyearFormsLayout",
            component: LyearFormsLayout
        },

        {
            path: "/lyear-forms-overview",
            name: "/LyearFormsOverview",
            component: LyearFormsOverview
        },

        {
            path: "/lyear-forms-radio",
            name: "/LyearFormsRadio",
            component: LyearFormsRadio
        },

        {
            path: "/lyear-forms-range",
            name: "/LyearFormsRange",
            component: LyearFormsRange
        },

        {
            path: "/lyear-forms-select",
            name: "/LyearFormsSelect",
            component: LyearFormsSelect
        },

        {
            path: "/lyear-forms-switch",
            name: "/LyearFormsSwitch",
            component: LyearFormsSwitch
        },

        {
            path: "/lyear-forms-validation",
            name: "/LyearFormsValidation",
            component: LyearFormsValidation
        },

        {
            path: "/lyear-helpers-clearfix",
            name: "/LyearHelpersClearfix",
            component: LyearHelpersClearfix
        },

        {
            path: "/lyear-helpers-colored-links",
            name: "/LyearHelpersColoredLinks",
            component: LyearHelpersColoredLinks
        },

        {
            path: "/lyear-helpers-position",
            name: "/LyearHelpersPosition",
            component: LyearHelpersPosition
        },

        {
            path: "/lyear-helpers-ratio",
            name: "/LyearHelpersRatio",
            component: LyearHelpersRatio
        },

        {
            path: "/lyear-helpers-stacks",
            name: "/LyearHelpersStacks",
            component: LyearHelpersStacks
        },

        {
            path: "/lyear-helpers-stretched-link",
            name: "/LyearHelpersStretchedLink",
            component: LyearHelpersStretchedLink
        },

        {
            path: "/lyear-helpers-text-truncation",
            name: "/LyearHelpersTextTruncation",
            component: LyearHelpersTextTruncation
        },

        {
            path: "/lyear-helpers-vertical-rule",
            name: "/LyearHelpersVerticalRule",
            component: LyearHelpersVerticalRule
        },

        {
            path: "/lyear-helpers-visually-hidden",
            name: "/LyearHelpersVisuallyHidden",
            component: LyearHelpersVisuallyHidden
        },

        {
            path: "/lyear-js-chartjs",
            name: "/LyearJsChartjs",
            component: LyearJsChartjs
        },

        {
            path: "/lyear-js-colorpicker",
            name: "/LyearJsColorpicker",
            component: LyearJsColorpicker
        },

        {
            path: "/lyear-js-fullcalendar",
            name: "/LyearJsFullcalendar",
            component: LyearJsFullcalendar
        },

        {
            path: "/lyear-js-jconfirm",
            name: "/LyearJsJconfirm",
            component: LyearJsJconfirm
        },

        {
            path: "/lyear-js-loading",
            name: "/LyearJsLoading",
            component: LyearJsLoading
        },

        {
            path: "/lyear-js-maxlength",
            name: "/LyearJsMaxlength",
            component: LyearJsMaxlength
        },

        {
            path: "/lyear-js-notify",
            name: "/LyearJsNotify",
            component: LyearJsNotify
        },

        {
            path: "/lyear-js-select",
            name: "/LyearJsSelect",
            component: LyearJsSelect
        },

        {
            path: "/lyear-layout-break-point",
            name: "/LyearLayoutBreakPoint",
            component: LyearLayoutBreakPoint
        },

        {
            path: "/lyear-layout-columns",
            name: "/LyearLayoutColumns",
            component: LyearLayoutColumns
        },

        {
            path: "/lyear-layout-containers",
            name: "/LyearLayoutContainers",
            component: LyearLayoutContainers
        },

        {
            path: "/lyear-layout-grid",
            name: "/LyearLayoutGrid",
            component: LyearLayoutGrid
        },

        {
            path: "/lyear-layout-gutters",
            name: "/LyearLayoutGutters",
            component: LyearLayoutGutters
        },

        {
            path: "/lyear-layout-utilities",
            name: "/LyearLayoutUtilities",
            component: LyearLayoutUtilities
        },

        {
            path: "/lyear-layout-zindex",
            name: "/LyearLayoutZindex",
            component: LyearLayoutZindex
        },

        {
            path: "/lyear-main",
            name: "/LyearMain",
            component: LyearMain
        },

        {
            path: "/lyear-other-icons",
            name: "/LyearOtherIcons",
            component: LyearOtherIcons
        },

        {
            path: "/lyear-pages-add-doc",
            name: "/LyearPagesAddDoc",
            component: LyearPagesAddDoc
        },

        {
            path: "/lyear-pages-config",
            name: "/LyearPagesConfig",
            component: LyearPagesConfig
        },

        {
            path: "/lyear-pages-doc",
            name: "/LyearPagesDoc",
            component: LyearPagesDoc
        },

        {
            path: "/lyear-pages-error",
            name: "/LyearPagesError",
            component: LyearPagesError
        },

        {
            path: "/lyear-pages-gallery",
            name: "/LyearPagesGallery",
            component: LyearPagesGallery
        },

        {
            path: "/lyear-pages-guide",
            name: "/LyearPagesGuide",
            component: LyearPagesGuide
        },

        {
            path: "/lyear-pages-rabc",
            name: "/LyearPagesRabc",
            component: LyearPagesRabc
        },

        {
            path: "/lyear-pages-table",
            name: "/LyearPagesTable",
            component: LyearPagesTable
        },

        {
            path: "/lyear-utilities-background",
            name: "/LyearUtilitiesBackground",
            component: LyearUtilitiesBackground
        },

        {
            path: "/lyear-utilities-borders",
            name: "/LyearUtilitiesBorders",
            component: LyearUtilitiesBorders
        },

        {
            path: "/lyear-utilities-colors",
            name: "/LyearUtilitiesColors",
            component: LyearUtilitiesColors
        },

        {
            path: "/lyear-utilities-display",
            name: "/LyearUtilitiesDisplay",
            component: LyearUtilitiesDisplay
        },

        {
            path: "/lyear-utilities-flex",
            name: "/LyearUtilitiesFlex",
            component: LyearUtilitiesFlex
        },

        {
            path: "/lyear-utilities-float",
            name: "/LyearUtilitiesFloat",
            component: LyearUtilitiesFloat
        },

        {
            path: "/lyear-utilities-interactions",
            name: "/LyearUtilitiesInteractions",
            component: LyearUtilitiesInteractions
        },

        {
            path: "/lyear-utilities-opacity",
            name: "/LyearUtilitiesOpacity",
            component: LyearUtilitiesOpacity
        },

        {
            path: "/lyear-utilities-overflow",
            name: "/LyearUtilitiesOverflow",
            component: LyearUtilitiesOverflow
        },

        {
            path: "/lyear-utilities-position",
            name: "/LyearUtilitiesPosition",
            component: LyearUtilitiesPosition
        },

        {
            path: "/lyear-utilities-shadows",
            name: "/LyearUtilitiesShadows",
            component: LyearUtilitiesShadows
        },

        {
            path: "/lyear-utilities-sizing",
            name: "/LyearUtilitiesSizing",
            component: LyearUtilitiesSizing
        },

        {
            path: "/lyear-utilities-spacing",
            name: "/LyearUtilitiesSpacing",
            component: LyearUtilitiesSpacing
        },

        {
            path: "/lyear-utilities-text",
            name: "/LyearUtilitiesText",
            component: LyearUtilitiesText
        },

        {
            path: "/lyear-utilities-vertical-align",
            name: "/LyearUtilitiesVerticalAlign",
            component: LyearUtilitiesVerticalAlign
        },

        {
            path: "/lyear-utilities-visibility",
            name: "/LyearUtilitiesVisibility",
            component: LyearUtilitiesVisibility
        },

    ]
});
export default router;
