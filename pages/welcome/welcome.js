const app = getApp()      // 在index.js的Page函数外获取应用实例

Page({
    onTap: function (event) {
        // wx.navigateTo({
        //     url:"../posts/post"
        // });
        
        wx.switchTab({
            url: "../posts/post"
        });
      
    },
  data: {
    username: null,
    password: null,
  },
  usernameInput: function (event) {
    this.setData({ username: event.detail.value })
  },

  passwordInput: function (event) {
    this.setData({ password: event.detail.value })
  },

  loginBtnClick: function () {
    app.appData.userinfo = { username: this.data.username, password: this.data.password }
    console.log(app.appData.userinfo)
    wx.switchTab ({
      url: '../posts/post',
    })
  }
})
