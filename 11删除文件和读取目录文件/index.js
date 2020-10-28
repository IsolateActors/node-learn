let fs = require('fs')

fs.unlink('te.txt', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("删除文件成功")
    }
})