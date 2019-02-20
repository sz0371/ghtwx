const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    input: '',
    searchRecord: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("options", options.name);
    var name = options.name;
    this.search(name);
  },
  // 搜索
  search(value) {
    wx.request({
      url: app.globalData.url + '/product/search.json',
      method: 'GET',
      data: {
        categoryId: value,
        userId: app.globalData.userId
      },
      success: (res) => {
        console.log('res', res.data.data.resultList)
        this.setData({
          list: res.data.data.resultList
        })
      }
    })
  },

  // 搜索记录
  

 
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