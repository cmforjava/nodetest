let fs = require('fs')
let index = './index.js'

let read = ()=>{
    return fs.readFileSync(index).toString()
}
let write = (reg,text)=>{
    debugger
    let ori = read()
    let result = ori.replace(reg,text)
    let fd = fs.openSync(index,'w')
    fs.writeSync(fd, result)
    fs.closeSync(fd);
}
write(/class\s/g,'className ')
