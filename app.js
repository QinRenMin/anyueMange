let express = require("express");
let bodyParser = require("body-parser");
let app = express();

//加载模板
let swig = require('swig');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//配应用模板
//定义当前应用所使用的模板引擎
// 第一个参数是模板引擎的名称，同时也是模板文件的后缀
//第二个表示解析处理模板内容的方法
app.engine('html',swig.renderFile);

//设置模板文件存放的目录
//第一个参数必须是views,第二个参数是目录
app.set('views','./views');

//注册使用的模板引擎，第一个参数必须是view engine,第二个参数是app.engine()中模板引擎的名称
app.set('view engine','html');

//在开发过程中需要取消模板缓存
// swig.setDefaults({
//     cache:false
// });

//设置静态文件托管
app.use('/public',express.static(__dirname + '/public'));

//模块划分
// app.use("/api",require("./router/api"));
app.use("/admin",require("./router/admin"));
app.use("/",require("./router/main"));

//解决跨域问题
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    if (req.method === 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});

app.listen(8180,()=>{
   console.log('后台启动成功')
});