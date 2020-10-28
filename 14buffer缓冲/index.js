// 将字符串放置缓冲区
let bf = Buffer.from("10")
console.log(bf)
console.log(bf.toString())


// 初始化缓冲区,创建一个大小为10个字节的缓冲区
// 保证新创建的缓冲区数据不会包含旧数据
let bf2 = Buffer.alloc(10)
console.log(bf2);

// 不会重置数据
let bf3 = Buffer.allocUnsafe(10)
console.log(bf3)

bf3[0] = 3
console.log(bf3)


console.log(bf3[0].toString())