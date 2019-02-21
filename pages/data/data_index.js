
// 首页图片
var index_img = [
  {
    "id": 1,
    "img": '../images/img_bwl.png'
  },
  {
    "id": 2,
    "img": '../images/img_mgg.png'
  },
  {
    "id": 3,
    "img": '../images/img_bxg.png'
  },
  {
    "id": 4,
    "img": '../images/img_hgg.png'
  }
]


// 市
var city = [
  {
    "id": 1,
    "city": "深圳市"
  },
  {
    "id": 2,
    "city": '广州市'
  },
  {
    "id": 3,
    "city": "东莞市"
  },
  {
    "id": 4,
    "city": "惠州市"
  },
  {
    "id": 5,
    "city": "珠海市"
  }
]

// 深圳区
var town = [
  {
    "id": 1,
    "town": "全市"
  },
  {
    "id": 2,
    "town": '南山区'
  },
  {
    "id": 3,
    "town": '福田区'
  },
  {
    "id": 4,
    "town": '罗湖区'
  },
  {
    "id": 5,
    "town": '龙岗区'
  },
  {
    "id": 6,
    "town": '盐田区'
  },
  {
    "id": 7,
    "town": '龙华区'
  }
]

// 广州区
var gz_town = [
  {"id": 1,"town": "越秀区"},
  {"id": 2,"town": "荔湾区"},
  {"id": 3,"town": "海珠区"},
  {"id": 4,"town": "天河区"},
  {"id": 5,"town": "白云区"},
  {"id": 6,"town": "黄浦区"},
  {"id": 7,"town": "番禺区"},
  {"id": 8,"town": "花都区"},
  {"id": 9,"town": "南沙区"},
  {"id": 10,"town": "增城区"},
  {"id": 11,"town": "从化区"}
]

// 主题
var theme = [
  {"id": 1,"name": "全部主题"},
  {"id": 2,"name": "健身主题"},
  {"id": 3,"name": "轰趴主题"},
  {"id": 4,"name": "亲子主题"},
  {"id": 5,"name": "舞蹈主题"},
  {"id": 6,"name": "音乐K歌主题"},
  {"id": 7,"name": "神秘主题"}
]


// 输出数据
module.exports = {
  index_img: index_img,
  city_list: city,
  town_list: town,
  gz_town: gz_town,
  theme: theme
}