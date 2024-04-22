const Koa = require('koa')
const route = require('koa-route')
const axios = require('axios')

const app = new Koa()
const clientID = '63q4dq7bedcd86seava1' // 替换成自己的
const clientSecret = 'we742aae0ed56717deef2a92qq8wc7ea4b5b109' // 替换成自己的

// 这里的路由地址要和在GitHub登记时最后填的重定向路径一致
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
    // 重定向到前端页面
    ctx.response.redirect(`http://localhost:5173/hello?data=${JSON.stringify(result.data)}`)
}))

// 这里的端口号可以更换，但是要和在GitHub登记时的Homepage URL以及Authorizaiton callback URL端口号一致
app.listen(8080, () => {
    console.log('8080 is open!');
})