function wxpay(app, money, orderId, redirectUrl) {
  // let remark = "在线充值";
  // let nextAction = {};
  // if (orderId != 0) {
  //   remark = "支付订单 ：" + orderId;
  //   nextAction = { type: 0, id: orderId };
  // }
  wx.request({
    url: app.globalData.url + '/order/payfrom.json',
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method:'POST',
    data: {
      id: orderId
    },
    success: function(res){
      if(res.data.success){
        console.log(res.data.data.timeStamp + ':timeStamp');
        // 发起支付
        // wx.requestPayment({
        //   timeStamp:res.data.data.timeStamp,
        //   nonceStr:res.data.data.nonceStr,
        //   package:'prepay_id=' + res.data.data.prepayId,
        //   signType:'MD5',
        //   paySign:res.data.data.sign,
        //   fail:function (aaa) {
        //     wx.showToast({title: '支付失败:' + aaa})
        //   },
        //   success:function () {
        //     wx.showToast({title: '支付成功'})
        //     wx.redirectTo({
        //       url: redirectUrl
        //     });
        //   }
        // })
        wx.requestPayment({
          timeStamp: res.data.data.timeStamp, //当前时间
          nonceStr: res.data.data.nonceStr,   //随机字符串
          package: 'prepay_id=' + res.data.data.prepayId, //
          signType: 'MD5', //签名类型MD5
          paySign: res.data.data.sign,  //签名
          success: function (result) {
            console.log("成功" + result);
            wx.hideLoading()
            wx.navigateBack({
              delta: 1,
              success: function (result) {
                wx.showToast({
                  title: '支付成功',
                  icon: 'success',
                  duration: 1000,
                })
              },
            })
          },
          fail: function (res) {
            wx.showToast({
              title: '支付失败',
              icon: 'none',
              duration: 1000,
            })
          },
          complete: function (res) {
            console.log("支付加载成功")
          }
        })
      } else {
        wx.showToast({ title: '服务器忙' + res.data.code + res.data.msg})
      }
    }
  })
}

module.exports = {
  wxpay: wxpay
}
