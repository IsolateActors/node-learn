let http = require('http')

// 创建server对象
let server = http.createServer();

// 路劲模块
let path = require('path')
// fs模块
let fs = require('fs')


server.on('request', (req, res) => {
    // 解析路劲，将请求路劲地址解析成对象
    let urlObj = path.parse(req.url);
    console.log(urlObj)

    if (req.url == '/') {
        res.setHeader('content-type', 'text/html;charset=utf-8')
        // res.end(`<!DOCTYPE html>
        // <html lang="en">

        // <head>
        //     <meta charset="UTF-8">
        //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //     <title>Document</title>
        // </head>

        // <body>
        //     <h1>node服务</h1>
        //     <img src="./static/1.jpg" alt="">
        //     <img src="./static/2.jpg" alt="">
        //     <img src="./static/3.jpg" alt="">
        // </body>

        // </html>`)


        // 读取文件给浏览器
        let rs = fs.createReadStream('./index.html');
        rs.pipe(res);
    } else if (urlObj.dir == '/static') {
        res.setHeader('content-type', getContentType(urlObj.ext));
        // 读取文件给浏览器
        let rs = fs.createReadStream('./static/' + urlObj.base);
        // 将读取文件给到响应对象
        rs.pipe(res);
    } else {
        res.end("404 notfound")
    }
})


function getContentType(extName) {
    switch (extName) {
        case '.png':
            return 'image/png'
        case '.jpg':
            return 'image/jpeg';
        case '.css':
            return 'text/css';
        case '.json':
            return 'text/json';
        case '.html':
            return 'text/html';
        case '.js':
            return 'text/javascript;charset=utf-8';
    }
}


// 启动服务监听
server.listen(3000, () => {
    console.log("服务器已启动：", "http://127.0.0.1:3000")
})