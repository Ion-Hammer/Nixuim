const prc = require('child_process')
const fs = require('fs')
const random = require("random")
var session = random.int(( min=100 ), ( max=1000000000000000000000000 ))
fs.writeFileSync(`Tmp/SESSION.id`, `${session}`)

try {
    for (file in fs.readdirSync('./Services')) {
        var split = file.split('.')
        if (split[2] == ".go") {
            prc.exec(`go run Services/${file}`)
        } else if (split[2] == ".py") {
            prc.exec(`python Services/${file}`)
        } else if (split[2] == ".js") {
            prc.exec(`node Services/${file}`)
        } else {
            console.log('\x1b[31m`, `[Error;x00.01x] Unknown file type within "ROOT/Services" destination.')
            console.log('\x1b[0m')
            process.exit()
        }
    }
} catch(err) {
    fs.writeFileSync(`Logs/${session}.log`, `Bootloader error details: \n${err}`)
    console.log(`\x1b[31m`, `[Error;x00.00] Unknown error encountered; saving to Log file: ${session}.log`)
    console.log('\x1b[0m')
    process.exit(1)
}


try {
    // Note: finish soon
} catch(err) {
    // Note: finish before project release
    process.exit(1)
}