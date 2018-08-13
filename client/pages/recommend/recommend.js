// pages/recommend/recommend.js
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: [
      { key: '房地产', value: '房地产' },
      { key: '机关单位', value: '机关单位' },
      { key: '设计院', value: '设计院' },
      { key: '互联网', value: '互联网' },
      { key: '其他', value: '其他' },
    ],
    people: [
      {
        name: 'Zhentian',
        title: '网易游戏手游营销实习生',
        time: util.formatTime(new Date()),
        image: '/images/qb2.jpg',
        category: 'IT',
        like: true,
        content_short: 'Hey let’s catch up soon. Do you want to grab lunch sometime this weekend?Let me know when you are free!',
      },
      {
        name: 'CanFang Feng',
        title: '网易游戏手游营销实习生',
        time: util.formatTime(new Date()),
        image: '/images/qb1.jpg',
        category: 'Uban Planning',
        like: false,
        content_short: 'Hey let’s catch up soon. Do you want to grab lunch sometime this weekend?Let me know when you are free!',
      }
    ]
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