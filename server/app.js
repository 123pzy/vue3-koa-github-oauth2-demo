const Koa = require('koa')
const route = require('koa-route')
const axios = require('axios')
const cors = require('@koa/cors');

const app = new Koa()
app.use(cors());
const clientID = '922127eb1402e210792b' // 替换成自己的
const clientSecret = '3ba6a79cd8afbf82e079a76s9da953257e5bcd9c' // 替换成自己的

app.use(route.get('/oauth/redirect', async (ctx) => {
    const requestToken = ctx.request.query.code
    console.log('authorization code:', requestToken);
    const tokenResponse = await axios({
        method: 'post',
        url: 'https://github.com/login/oauth/access_token?' +
            `client_id=${clientID}&` +
            `client_secret=${clientSecret}&` +
            `code=${requestToken}`,
        headers: {
            accept: 'application/json'
        }
    })
    const accessToken = tokenResponse.data.access_token;
    console.log('accessToken:', accessToken);
    const result = await axios({
        method: "get",
        url: 'https://api.github.com/user',
        headers: {
            accept: 'application/json',
            Authorization: `token ${accessToken}`
        }
    })
    console.log(result.data);
    ctx.body = result.data
}))

app.listen(8080, () => {
    console.log('8080 is open!');
})