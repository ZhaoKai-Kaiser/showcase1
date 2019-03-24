var iframe = document.createElement('iframe')
iframe.src = 'http://127.0.0.1:7001/public/hash.html'
document.body.appendChild(iframe)

window.onhashchange = function () {
  // 小练习，做个工具方法，取出query的值
  console.log(decodeURIComponent(window.location.hash.split('#')[1]))
}
