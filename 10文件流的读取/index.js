let fs = require('fs')

let rs = fs.createReadStream('../9文件读取/aaa.txt')
let ws = fs.createWriteStream('bbb.txt')

// 监听读取流
rs.once('open', () => {
    console.log("监听读取流")
})

// 监听读取流
rs.once('close', () => {
    console.log("读取流关闭")
})

// 监听写入流
ws.once('open', () => {
    console.log("监听写入流")
})

// 监听写入流
ws.once('close', () => {
    console.log("写入流关闭")
})

// 将读取流的数据通过写入流写入
rs.once('data', (data) => {
    ws.write(data)
})

let rs1 = fs.createReadStream('../9文件读取/aaa.txt')
let ws1 = fs.createWriteStream('bbb1.txt')

// 创建管道，将读取流通过管道流输出
rs1.pipe(ws1)