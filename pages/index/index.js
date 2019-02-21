//index.js
//获取应用实例
const app = getApp()

// 获取本地json数据
let jsonData = require('../data/data_index.js');

Page({
  data: {
    list: [],
    city_menu: [],
    town_menu: [],
    animationData1: {},
    animationData2: {},
    scrollHeight: '',
    nowShow_city: false,
    nowShow_theme: false,
    top: '',
    viewShow: false,
    hideOption: true,
    hideOption2: true,
    selectOpen: false,
    scrollTop: 0,
    maskflag: true,
    view1_stopmove: false,
    city_index: '0',
    town_index: '0',
    theme_index: '0',
    theme_current: '全部主题',
    city_current: '深圳市',
    town_current: '全市',
    sz_town: [],
    gz_town: [],
    theme: []
  },
  onLoad: function () {
    // 设置本地数据
    this.setData({
      list: jsonData.index_img,
      city_menu: jsonData.city_list,
      town_menu: jsonData.town_list,
      theme: jsonData.theme
    })
  },
  // 滚动条触发事件
  scrollTopFun: function (e) {
    this.setData({
      top: e.detail.scrollTop
    })
    if (e.detail.scrollTop > 185) {
      this.setData({
        viewShow: true
      })
    } else {
      this.setData({
        viewShow: false
      })
    }
  },
  // 城市选择下拉
  select_city: function (e) {
    //创建动画
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease"
    })
    var animation2 = wx.createAnimation({
      duration: 500,
      timingFunction: "ease"
    })
    this.animation = animation;
    // option是否显示
    var nowShow = this.data.nowShow_city;
    // rotate动画角度旋转
    if (nowShow) {
      animation.rotate(0).step();
      this.setData({
        animationData1: animation.export(),
        hideOption: true,
        selectOpen: false,
        maskflag: true,
        view1_stopmove: false
      })
    } else {
      animation.rotate(180).step();
      animation2.rotate(0).step();
      this.setData({
        animationData1: animation.export(),
        animationData2: animation2.export(),
        hideOption: false,
        selectOpen: true,
        // // 点击移动到距离顶部185
        scrollTop: '186',
        maskflag: false,
        view1_stopmove: true,
        hideOption2: true
      })
    }
    this.setData({
      nowShow_city: !nowShow,
      nowShow_theme: nowShow
    })
  },
  // 主题选择下拉
  select_theme: function () {
    //创建动画
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease"
    })
    var animation2 = wx.createAnimation({
      duration: 500,
      timingFunction: "ease"
    })
    this.animation = animation;
    // option是否显示
    var nowShow = this.data.nowShow_theme;
    // rotate动画角度旋转
    if (nowShow) {
      animation.rotate(0).step();
      this.setData({
        animationData2: animation.export(),
        hideOption2: true,
        view1_stopmove: false,
        selectOpen2: false,
        maskflag: true
      })
    } else {
      animation.rotate(180).step();
      animation2.rotate(0).step();
      this.setData({
        animationData1: animation2.export(),
        animationData2: animation.export(),
        scrollTop: '186',
        maskflag: false,
        hideOption2: false,
        view1_stopmove: true,
        selectOpen2: true,
        hideOption: true,
        maskflag: false
      })
    }
    this.setData({
      nowShow_theme: !nowShow,
      nowShow_city: nowShow
    })
  },
  // 取消下拉
  close_menu: function () {
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease"
    })
    var animation2 = wx.createAnimation({
      duration: 500,
      timingFunction: "ease"
    })
    animation.rotate(0).step();
    animation2.rotate(0).step();
    this.setData({
      animationData1: animation.export(),
      animationData2: animation2.export(),
      hideOption: true,
      hideOption2: true,
      maskflag: true,
      view1_stopmove: false,
      selectOpen: false
    })
  },
  // 选择市
  city_item: function (e) {
    let index = e.currentTarget.dataset.index;
    // 根据选择市的索引设置区数据
    switch(index) {
      case 0 : 
        this.setData({
          town_menu: jsonData.town_list
        })
        break;
      case 1 : 
        this.setData({
          town_menu: jsonData.gz_town
        })
        break;
    }

    this.setData({
      city_index: e.currentTarget.dataset.index,
      city_current: e.currentTarget.dataset.name
    })
  },
  // 选择区
  town_item: function (e) {
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease"
    })
    animation.rotate(0).step();
    this.setData({
      animationData1: animation.export(),
      town_index: e.currentTarget.dataset.name,
      town_current: e.currentTarget.dataset.name,
      hideOption: true,
      maskflag: true,
      nowShow_city: false
    })
  },
  // 选择主题
  theme_item: function(e) {
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease"
    })
    animation.rotate(0).step();
    this.setData({
      animationData2: animation.export(),
      theme_index: e.currentTarget.dataset.index,
      theme_current: e.currentTarget.dataset.name,
      hideOption2: true,
      maskflag: true,
      nowShow_theme: false
    })
  }
})
