//NodeJS内置模块名称，不做路径解析，直接返回node_modules目录内部模块的导出对象，找不到则往上找node_modules目录...
// /home/user/node_modules/foo/bar
//  /home/node_modules/foo/bar
//  /node_modules/foo/bar
let fs = require('fs')

// 详细参考：https://nqdeng.github.io/7-days-nodejs/#2.1