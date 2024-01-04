//创建一个Koa对象表示web app本身:
const Koa = require('koa')
const app = new Koa()
//绑定中间件
const respMidlleware = require('./middleware/koa_response_duration')
app.use(respMidlleware)

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})  