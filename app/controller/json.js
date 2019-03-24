module.exports = app => {
  class MsgController extends app.Controller {
    * index (req) {
      this.ctx.set('Access-Control-Allow-Origin', 'http://192.168.1.2:7001')
      this.ctx.body = { msg: 'hello world' }
    }
  }
  return MsgController
}
