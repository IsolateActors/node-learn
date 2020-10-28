// 当前正在执行的脚本的文件名称路劲
console.log(__filename)

// 当前正在执行的脚本的文件目录
console.log(__dirname)


let path = require('path')

let strPath = `C:\\Users\\春华秋实\\Desktop\\Web\\node-learn\\16路劲模块path\\index.js`;

// 获取扩展名
console.log(path.extname(strPath))
console.log(path.extname(__filename))

// 获取文件名称
console.log(path.basename(strPath))
console.log(path.basename(__filename))

// 获取目录名称
console.log(path.dirname(strPath))
console.log(path.dirname(__filename))



// 路劲解析规范化
console.log(path.normalize(strPath))

// 路劲的合并
console.log(path.join(__dirname + "/abc.png"))

// 绝对路劲的合并
console.log(path.resolve(__dirname + "/abc.png"))