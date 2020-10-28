let fs = require('fs')

// 创建写入流
let ws = fs.createWriteStream('text.txt');

// 监听通道打开
ws.once('open', () => {
    console.log("通道打开")
    ws.write("1你好啊！")
    ws.write("2你好啊！")
    ws.write("3你好啊！")
    ws.write("4你好啊！")

    // 写入结束
    ws.end()
})

// 监听通道关闭
ws.once('close', () => {
    console.log("通道关闭")
})