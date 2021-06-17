const os = require('os')

// User INFO
console.log(os.userInfo())

// method return system runtime in sec
console.log(`System Uptime is ${(os.uptime/60)}`)

console.log(os.type(), os.release())