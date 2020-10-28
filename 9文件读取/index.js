let fs = require('fs')

fs.readFile('../8文件写入流/text.txt', (err, data) => {
    if (!err) {
        //data为buffer
        console.log(data.toString())

        //写入文件
        fs.writeFile('aaa.txt', data, (err) => {
            if (!err) {
                console.log("文件写入成功")
            } else {
                console.log(err)
            }
        })
    } else {
        console.log(err)
    }
})


console.log("异步读取数据")