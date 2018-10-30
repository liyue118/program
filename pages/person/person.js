
// pages/mine/mine.js
var app = getApp()
Page({
  data: {
    userInfo: {},
    motto: 'Hello World',
    // orderItems
    orderItems: [
      {
        typeId: 0,
        name: '即将开始',
        url: 'bill',
        imageurl: '../../images/icon/icon4.png',
      },
      {
        typeId: 1,
        name: '待审核',
        url: 'bill',
        imageurl: '../../images/person/personal_shipped.png',
      },
      {
        typeId: 2,
        name: '已结束',
        url: 'bill',
        imageurl: '../../images/person/personal_receipt.png'
      },
      {
        typeId: 3,
        name: '付款管理',
        url: 'bill',
        imageurl: '../../images/person/personal_comment.png'
      },
      {
        typeId: 4,
        name: '发票管理',
        url: 'bill',
        imageurl: '../../images/person/personal_comment.png'
      },
      {
        typeId: 5,
        name: '发票信息',
        url: 'bill',
        imageurl: '../../images/person/personal_comment.png'
      }
    ],
  },
  //事件处理函数
  toOrder: function () {
    wx.navigateTo({
      url: '../order/order'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})