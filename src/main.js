function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
// document.body.addEventListener('touchmove', function (e) {
//   e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
// }, {passive: false})

window.isWeiXin = /MicroMessenger/i.test(navigator.userAgent)
var turnHref = 'http://paike.people.com.cn/df_shaohua/'
  // 临时关闭授权功能
// return true;

// url 非线上环境一律不采用头像按钮
// if (location.href.indexOf('cpc.people') === -1) {
//   window.isWeiXin = false
//   return
// }
// 如果是微信则跳转到 授权页面
if (window.isWeiXin) {
  if (location.href.indexOf('id=') > -1) {
    var arr = /id=([a-z0-9A-Z]+)/.exec(location.href)
    if (arr) {
      window.pid = arr[1]
      console.log('是微信打开的，pid是' + window.pid)
      if (arr[1]) {
        $.get('http://paike.people.com.cn/df_shaohua/index/getUser', {id: window.pid}, function(data) {
          document.querySelector('.page5 .so-2').src = data.msg.headImg
        }, 'jsonp');
      }
      
      
    }
  } else {
    if (/Android/i.test(navigator.userAgent)) {
      location.href = turnHref + '?t=' + new Date()
    } else {
      location.href = turnHref
    }
  }
}