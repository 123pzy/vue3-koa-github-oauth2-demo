

1.克隆代码：

`git clone https://github.com/123pzy/vue3-koa-github-oauth2-demo.git`

`cd vue3-koa-github-oauth2-demo`

2.分别给前后端安装包并启动：

- `cd web`  `pnpm i`  `pnpm run dev`
- `cd server`   `pnpm i`    `node app.js`

3.点击[这里](https://github.com/settings/applications/new)去GitHub登记一个应用：

![image-20240423123037288](http://panpan.dapanna.cn//image-20240423123037288.png)

4.点击生成密钥：

![](http://panpan.dapanna.cn//image-20240422120339891.png)

5.替换前端代码中Index.vue中的client_id为自己的Client ID

   替换后端代码中app.js文件中的clientID为自己的Client ID，替换clientSecret为自己的Client secrets

6.打开http://localhost:5173，

   点击登录GitHub

![image-20240423123308235](http://panpan.dapanna.cn//image-20240423123308235.png)
   跳转到授权页面：

![](http://panpan.dapanna.cn//image-20240422120732999.png)

确认授权后网络没问题的话（能访问github）的话，跳转到http://localhost:5173/oauth/redirect?code=...

授权（登录）成功！⬇

![](http://panpan.dapanna.cn//image-20240422121236465.png)