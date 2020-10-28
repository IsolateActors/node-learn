const child_process = require('child_process')

for (var i = 0; i < 3; i++) {
    // 开启进程执行文件
    var workerProcess = child_process.exec('node index.js ' + i, (err, stdout, stderr) => {
        if (err) {
            console.log(err)
        } else {
            console.log('stdout:', stdout)
            console.log('stderr:', stderr)
        }
    })

    // 监听
    workerProcess.on('exit', function (code) {
        console.log("子程序已退出，退出码：" + code)
    })
}