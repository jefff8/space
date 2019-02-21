Page({
  data: {
    orders: [
      {id:'1',type:'全 部',count:'6'},
      {id:'2',type:'待付款',count:'1'},
      {id:'3',type:'待开始',count:'3'},
      {id:'4',type:'使用中',count:'0'},
      {id:'5',type:'已完成',count:'2'}
    ],
    orders_index:'0'
  },
  onLoad: function(options) {
    //Do some initialize when page load.
    
  },
  orders: function(e) {
    console.log(e.currentTarget.dataset.index)
    this.setData({
      orders_index: e.currentTarget.dataset.index
    })
  }
})