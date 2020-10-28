let fs = require('fs')

function delDir(dirPath) {
    var filesArr = fs.readdirSync(dirPath);
    for (var i in filesArr) {
        var filePath = dirPath + '/' + filesArr[i];

        // 读取文件信息
        var stat = fs.statSync(filePath);

        // 判断是文件还是目录
        if (stat.isFile()) {
            fs.unlinkSync(filePath)
        } else if (stat.isDirectory()) {
            // 递归调用
            delDir();
        }
    }
    // 删除空目录
    fs.rmdirSync(dirPath)

}

// 调用
delDir('./img')