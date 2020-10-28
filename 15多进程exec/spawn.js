const child_process = require('child_process')

for (var i = 0; i < 3; i++) {
    // 开启进程执行文件
    var workerProcess = child_process.spawn('node', ['index.js', i])

    // 监听
    workerProcess.stdout.on('data', function (data) {
        console.log("data：" + data)
    })
    workerProcess.stderr.on('data', function (data) {
        console.log("err" + data)
    })
    workerProcess.on('close', function (code) {
        console.log("子程序已退出，退出码：" + code)
    })
}