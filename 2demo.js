let express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send("hello,node.js!")
});

app.listen(8088, () => {
    console.log("服务器已启动:", "http://localhost:8088")
})