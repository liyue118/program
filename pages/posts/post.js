var myslider = require('../../utils/yxxrui.slider.js');
var postsData = require('../../data/posts-data.js')
//获取应用实例
const app = getApp();
Page({
  data: {
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    curPage: 1,
    x: 0,
  },
  onLoad: function () {
    myslider.initMySlider({
      that: this,
      datas: [
        '../../images/1.jpg',
        '../../images/2.jpg',
        '../../images/3.jpg',
        '../../images/4.jpg'
      ],
      autoRun: true,
      blankWidth: 12,
      newImgWidth: 18,
      interval: 1500,
      duration: 200,
      direction: 'left',
      startSlide: function (curPage) {

      },
      endSlide: function (curPage) {

      }
    });
    // this.data.postList = postsData.postList
    this.setData({
      postList: postsData.postList
    });
  },
  onReachBottom: function (event) {
    console.log('asdfasdfasdf')
  },

  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    console.log("onPostTap" + postId);
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    })
  },

  onSwiperTap: function (event) {
    // target 和currentTarget
    // target指的是当前点击的组件 和currentTarget 指的是事件捕获的组件
    // target这里指的是image，而currentTarget指的是swiper
    var postId = event.target.dataset.postid;
    console.log("onSwiperTap" + postId);
    wx.navigateTo({
      url: "post-register/post-register-template?id=" + postId
    })
  }
})
