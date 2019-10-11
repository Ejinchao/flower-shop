import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home'),
      meta: {
        title: '首页',
      },
    },

    {
      path: '/home',
      component: () => import('./views/Home'),
      meta: {
        title: '首页',
      },
    },
    {
      path: '/fenlei', // 分类
      redirect: '/hot',
      component: () => import('./views/fenlei'),
      meta: {
        title: '分类',
      },
      children: [
        {
          path: '/flower',
          component: () => import('./views/Flower.vue'),
        },
        {
          path: '/hot',
          component: () => import('./views/Hot'),
        },
      ],
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/cart'),
      meta: {
        title: '购物车',
      },
    },
    {
      path: '/cart2',
      name: 'cart2',
      component: () => import('./views/cart2'),
      meta: {
        title: '购物车2',
      },
    },
    {
      path: '/mine',
      component: () => import('./views/mine'),
      meta: {
        title: '我的',
      },
    },

    {
      path: '/search', // 搜索
      component: () => import('./views/search'),
      meta: {
        title: '搜索',
      },
    },
    {
      path: '/prolist', // 鲜花
      component: () => import('./views/prolist'),
      meta: {
        title: '商品列表',
      },
    },
    {
      path: '/Everlasting', // 永生花
      component: () => import('./views/Everlasting'),
      meta: {
        title: '永生花',
      },
    },
    {
      path: '/cake', // 蛋糕
      component: () => import('./views/cake'),
      meta: {
        title: '蛋糕',
      },
    },
    {
      path: '/gift', // 礼品
      component: () => import('./views/gift'),
      meta: {
        title: '礼品',
      },
    },
    {
      path: '/chocolate', // 巧克力
      component: () => import('./views/chocolate'),
      meta: {
        title: '巧克力',
      },
    },
    {
      path: '/login', // 登录
      component: () => import('./views/login'),
      meta: {
        title: '登录',
      },
    },
    {
      path: '/registered', // 注册
      component: () => import('./views/registered'),
      meta: {
        title: '注册',
      },
    },
    {
      path: '/cartsubmit',
      name: 'cartsubmit',
      component: () => import('./views/cartsubmit'),
      meta: {
        title: '提交订单',
      },
    },
    {
      path: '/details:id',
      component: () => import('./views/details'),
      meta: {
        title: '详情',
      },
    },
    {
      path: '/payment',
      component: () => import('./views/payment'),
      meta: {
        title: '待付款',
      },
    },
    {
      path: '/shipping',
      component: () => import('./views/shipping'),
      meta: {
        title: '今日配送',
      },
    },
    // {
    //   path: '/comment',
    //   component: () => import('/views/comment'),
    //   meta: {
    //     title: '待评价',
    //   },
    // },
    {
      path: '/birthday',
      component: () => import('./views/birthday'),
      meta: {
        title: '生日提醒',
      },
    },
    {
      path: '/collection',
      component: () => import('./views/collection'),
      meta: {
        title: '我的收藏',
      },
    },
    {
      path: '/service',
      component: () => import('./views/service'),
      meta: {
        title: '客服',
      },
    },
    {
      path: '/addressList',
      name: 'addressList',
      component: () => import('./views/AddressList'),
      meta: {
        title: '收货地址',
      },
    },
    {
      path: '/addressEdit',
      name: 'AddressEdit',
      component: () => import('./views/AddressEdit'),
      meta: {
        title: '收货地址',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About'),
      meta: {
        title: '关于我们',
      },
    },
    {
      path: '/remind',
      component: () => import('./views/remind'),
      meta: {
        title: '添加提醒',
      },
    },

    {
      path: '/seting',
      // name: 'Seting',
      component: () => import('./views/seting'),
      meta: {
        title: '设置',
      },
    },
    {
      path: '/personinfo',
      component: () => import('./views/personinfo'),
      meta: {
        title: '个人信息',
      },
    },
    {
      path: '/bindCount',
      component: () => import('./views/bindCount'),
      meta: {
        title: '绑定账号',
      },
    },
    {
      path: '/resetCode',
      component: () => import('./views/resetCode'),
      meta: {
        title: '重置密码',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
