// pages/agent/agent.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  getUserinfo: function (e) {
    var that = this;
    var userinfo = e.detail;
    var encryptedData = userinfo.encryptedData
    var code = wx.getStorageSync('code');
    var iv = userinfo.iv;
    console.log(encryptedData + "encryptedData");
    console.log(code +"code");
    console.log(iv + "iv");
    wx.request({
      url: app.globalData.url + '/user/getwxappletuserinfo.json', 
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data: { code: code, encryptedData: encryptedData, iv: iv }, // 设置请求的 参数
      success: (res) => {
        if (res.data.data) {
          console.log('res.id', res.data.data.id)
          app.globalData.userId = res.data.data.id;
          wx.setStorageSync('userId', res.data.data.id);
          wx.switchTab({
            url: '../index/index',
          })
        } else {

        }
        wx.hideLoading();
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})