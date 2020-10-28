function fn() {
    console.log('fn函数被调用')
}

let student = {
    username: "小米"
}

console.log("student", student.username)

//默认返回空对象

//导出对象
module.exports = {
    student,
    fn
}

//单个导出
//exports.fn = fn