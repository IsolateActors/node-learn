let fs = require('fs')

// 同步打开文件Sync
let fd = fs.openSync('text1.txt', 'w')
console.log(fd);

//写入内容
let str = "fs你好！"
fs.writeFileSync(fd, str)

// 退出文件
fs.closeSync(fd)