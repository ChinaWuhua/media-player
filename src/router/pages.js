export default [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: '/layout',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          meta: {label: "Home", icon: "Home"},
          component: () => import('@/views/Home/index.vue'),
        },
        {
          path: '/screens',
          name: 'screens',
          meta: {label: "screens", icon: "screens"},
          component: () => import('@/views/ScreenSetting/index.vue'),
        },
      ]
    },
    {
      path: '/preview',
      name: 'preview',
      meta: {label: "Preview", icon: "Preview"},
      component: () => import('@/views/Preview/index.vue'),
    },
  ]