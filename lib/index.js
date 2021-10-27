var fs = require('fs');
var path = require('path');
const { validateConfig } = require('./validators.js')
const startHeart = require('./startHeart.js')
const chalk = require('chalk');

exports.heartbeat = (configPath=path.join(process.cwd(), "heartbeat.config.js")) => {
    if(path.basename(configPath) !== "heartbeat.config.js"){
        console.log(`path does ${chalk.bold("not")} lead to ${chalk.underline("heartbeat.config.js")} 💔`)
        return
    }
    fs.stat(configPath, (err) => {
        if(err){
            console.log(`no ${chalk.underline("heartbeat.config.js")} found 💔`)
            return
        }
        else{
            const config = require(path.resolve(configPath))
            if(validateConfig(config)){
                startHeart(config)
                console.log(`heartbeat ${chalk.bold("started")} 💗`)
            }
            else{
                console.log(`${chalk.red("heartbeat", chalk.bold("not"), "started")} 🖤`)
                return 
            }
        }
    })
}

exports.heart = (req, res) => {
    res.status(200).send(`💓`)
}