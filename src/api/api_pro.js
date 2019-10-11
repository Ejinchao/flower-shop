import * as API from './index'

export default{
  // 注册
  register:params=>{
    return API.GET('/api/v1/auth/reg',params)
  },
  // 登录
  login:params=>{
    return API.POST('/api/v1/auth/login',params)
  },
  // 获取用户信息
  userInfo:params=>{
    return API.GET('/api/v1/users/info',params)
  },
  // 获取商品信息
  proInfo:params=>{
    return API.GET('/api/v1/products',params)
  },
  // 根据id获取商品详情
  idProInfo:id=>{
    return API.GET(`/api/v1/products/${id}`)
  },
  // 加入购物车
  addCarts:params=>{
    return API.POST('/api/v1/shop_carts',params)
  },
  // 获取用户购物车数据
  getCartsInfo:params=>{
    return API.GET('/api/v1/shop_carts',params)
  },
  // 删除购物车信息
  delCartsInfo:id=>{
    return API.DELETE(`/api/v1/shop_carts/${id}`)
  },
  // 订单提交
  orderSubmit:params=>{
    return API.POST('/api/v1/orders',params)
  },
  // 获取订单列表
  getOrderList:params=>{
    return API.GET('/api/v1/orders',params)
  },
  // 根据id获取订单详情
  idGetOrder:id=>{
    return API.GET(`/api/v1/orders/${id}`)
  },
  // 根据id删除详情
  delOrder:id=>{
    return API.DELETE(`/api/v1/orders/${id}`)
  },
  // 收货地址列表
  addressesList:params=>{
    return API.GET('/api/v1/addresses',params)
  },
  // 获取单条收货地址
  idAddress:id=>{
    return API.GET(`/api/v1/addresses/${id}`)
  },
  // 收货地址新增
  addresses:params=>{
    return API.POST('/api/v1/addresses',params)
  },
  // 收货地址修改
  updateAddress:(id,params)=>{
    return API.PUT(`/api/v1/addresses/${id}`,params)
  }, 
  // 收货地址删除
  delAddress:id=>{
    return API.DELETE(`/api/v1/addresses/${id}`)
  }

}


