const fs = require('fs')

// console.log(fs.readFileSync('./content/subfolder/test.txt', 'UTF-8'))
// Sync
fs.writeFileSync(
    './content/subfolder/final.txt',
    'here we Gooo'
)


// Async
fs.readFile(
    './content/subfolder/test.txt','UTF-8',
    (err, res) => {
        if(err){
            console.log(err)
            return
        }
        console.log("res",res)
    }
)
