var moviesData = require('../../data/movie-data.js')
Page({
  data: {
    //小程序总是会读取data对象来做数据绑定，这个动作我们称为动作A
    // 而这个动作A的执行，是在onLoad函数执行之后发生的
  },
  onLoad: function () {

    // this.data.postList = postsData.postList
    this.setData({
      postList: moviesData.postList
    },()=>{
      console.log(this.data.postList)
    });
  },

  onReachBottom: function (event) {
    console.log('asdfasdfasdf')
  },

  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    // console.log("on post id is" + postId);
    wx.navigateTo({
      url: "movie-detail/movie-detail?id=" + postId
    })
  }
})