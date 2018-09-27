export default [
  {
    path: "/",
    redirect: "/app"
  },
  {
    path: "/app",
    name: "app",
    meta: {
      title: "应用分析"
    },
    component: () => import("views/App.vue")
  },
  {
    path: "/push",
    name: "push",
    meta: {
      title: "推送营销"
    },
    component: () => import("views/Push.vue")
  },
  {
    path: "/dev",
    name: "dev",
    meta: {
      title: "开发助手"
    },
    component: () => import("views/Dev.vue")
  },
  {
    path: "/manage",
    name: "manage",
    meta: {
      title: "应用管理"
    },
    component: () => import("views/Manage.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      title: "仪表盘"
    },
    component: () => import("views/Dashboard.vue")
  },
  {
    path: "/table1",
    name: "table1",
    meta: {
      title: "表格1"
    },
    component: () => import("views/Table1.vue")
  }, {
    path: "*",
    name: "page_not_found",
    meta: {
      title: "页面不存在"
    },
    component: () => import("views/PageNotFound.vue")
  }
];
