// Node.js Modules :
// 1. built-in m : default modules
// 2. local m : user-defined
// 3. third-party m : install n use!
// const {sum, abc} = require('./sum')

// console.log('the sum is:', sum(2,3))
// abc()

// built-in module : http
// const http = require("http");
// http.createServer((req , res) => {
//     res.write("Hello")
//     console.log("server is running") 
//     res.end()
// })

// .listen(8080)



const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res)=>{
    let data = fs.readFileSync('text.txt')
    res.end(data)
    // console.log(data);
})  
server.listen(8080)

