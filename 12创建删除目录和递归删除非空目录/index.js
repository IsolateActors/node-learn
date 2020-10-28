let fs = require('fs')

// 创建文件夹
fs.mkdir('./img', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("创建成功")
    }
})


// 删除文件夹
// fs.rmdir('./img', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("文件夹删除成功")
//     }
// })

// 