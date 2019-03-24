var iframe = document.createElement('iframe')
iframe.src = 'http://127.0.0.1:7001/public/name.html'
document.body.appendChild(iframe)

var times = 0
iframe.onload = function () {
  if (++times === 2) {
    console.log(JSON.parse(iframe.contentWindow.name))
  }
}
