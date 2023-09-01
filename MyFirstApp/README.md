1.express.static 加载 png 最后图片无法显示并且开发者模式 network 显示加载的是 text/document
原来代码：
js：app.use(express.static("public"));
html： <img src="public/map.png" />
修改后：
js: const path = require("path");
app.use("/static", express.static(path.join(\_\_dirname, "public")));
html: <img src="static/map.png" />

Reference：
https://segmentfault.com/q/1010000010928106
https://blog.csdn.net/m0_37872216/article/details/102890784
https://expressjs.com/en/starter/static-files.html
