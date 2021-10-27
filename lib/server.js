var fs = require('fs');
var path = require('path');
const { validateConfig } = require('./validators.js')
const startHeart = require('./startHeart.js')
const chalk = require('chalk');

exports.heartbeat = () => {
    const configPath = path.join(process.cwd(), "heartbeat.config.js")
    fs.stat(configPath, (err) => {
        if(err){
            console.log(`no ${chalk.underline("heartbeat.config.js")} found 💔`)
        }
        else{
            const config = require(configPath)
            if(validateConfig(config)){
                startHeart(config)
                console.log(`heartbeat ${chalk.bold("started")} 💗`)
            }
            else{
                console.log(`${chalk.red("heartbeat", chalk.bold("not"), "started")} 🖤`)
            }
        }
    })
}