let events = require('events')

// 创建事件对象
var eventLog = new events.EventEmitter();

// 监听事件
eventLog.on('xxMkdir', (msg) => {
    console.log("1创建目录事件触发", msg)
})
eventLog.on('xxMkdir', (msg) => {
    console.log("2创建目录事件触发", msg)
})
eventLog.on('xxMkdir', (msg) => {
    console.log("3创建目录事件触发", msg)
})
eventLog.on('xxMkdir', (msg) => {
    console.log("4创建目录事件触发", msg)
})

// 触发事件
eventLog.emit("xxMkdir", "--消息")
console.log("结束")

let fs = require('fs')

// 创建文件夹
fs.mkdir('./img', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("创建成功")
        eventLog.emit("xxMkdir", "--消息")
    }
})

// 删除文件夹
fs.rmdir('./img', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("文件夹删除成功")
        eventLog.emit("xxMkdir", "--消息")
    }
})