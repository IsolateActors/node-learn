let fs = require('fs')

// 异步打开文件
fs.open('text2.txt', 'w', (err, fd) => {
    console.log("文件打开")
    fs.writeFile(fd, '异步写入', (err) => {
        if (!err) {
            console.log("写入完成");
            fs.close(fd, () => {
                console.log("文件关闭完成")
            })
        }
    });
})

console.log("123456")