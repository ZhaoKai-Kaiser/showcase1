var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText).msg)
  }
}
// xhr.withCredentials = true
xhr.open('GET', 'http://127.0.0.1:7001/cros')
xhr.send(null)
