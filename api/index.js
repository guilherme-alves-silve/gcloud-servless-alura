const Koa = require('koa')
const basicAuth = require('basic-auth')
const bodyParser = require('koa-bodyparser')
const application = new Koa()
const search = require('../bigquery/search')

application.use(bodyParser())
application.use(async function(context) {
    const userAndPassword = basicAuth.parse(context.request.headers.authorization)

    const USER = process.env.USER
    const PASSWORD = process.env.PASSWORD

    if (USER !== userAndPassword.name || PASSWORD !== userAndPassword.pass) {
        context.status = 403
        context.body = {
            "msg": "Access Denied"
        }
        return
    }

    const body = context.request.body;
    context.status = 200
    context.body =  await search(body.filter)
});

application.listen(3000)
console.log('The application has started!')
