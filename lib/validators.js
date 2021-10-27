const {isWebUri} = require('valid-url')
const cron = require('node-cron')
const chalk = require('chalk');

module.exports = {
    validateConfig: (unvalidatedConfig) => {
        const {checkUrl, webhookUrl, cronString} = unvalidatedConfig
        let errorMsg = ""
        errorMsg += validateCheckUrl(checkUrl)
        errorMsg += validateWebhookUrl(webhookUrl)
        errorMsg += validateCronString(cronString)
        console.log(errorMsg)
        return errorMsg === ""
    }
}

const validateCheckUrl = (unvalidatedUrl) => {
    let errorMsg = ""
    if(unvalidatedUrl == undefined){
        errorMsg += `no check url(s) provided in config\n`
    }
    else{
        if(unvalidatedUrl instanceof Array){
            for(const url of unvalidatedUrl){
                if(!isWebUri(url)){
                    errorMsg += `check: ${url} is invalid\n`
                }
            }
        }
        else if(unvalidatedUrl instanceof Object){
            for(const name in unvalidatedUrl){
                if(!isWebUri(unvalidatedUrl[name])){
                    errorMsg += `check: ${unvalidatedUrl[name]} is invalid\n`
                }
            }
        }
        else if(!isWebUri(unvalidatedUrl)){
            errorMsg += `${chalk.bold("check url")}: ${unvalidatedUrl} is invalid\n`
        }
    }
    return errorMsg
}

const validateWebhookUrl = (unvalidatedUrl) => {
    let errorMsg = ""
    if(unvalidatedUrl == undefined){
        errorMsg += `no webhook url provided in config\n`
    }
    else if(!isWebUri(unvalidatedUrl)){
        errorMsg += `${chalk.bold("webhook url")}: ${unvalidatedUrl} is invalid\n`
    }
    return errorMsg
}

const validateCronString = (unvalidatedCron) => {
    let errorMsg = ""
    if(unvalidatedCron == undefined){
        errorMsg += `no cron string provided in config\n`
    }
    else if(!cron.validate(unvalidatedCron)){
        errorMsg += `cron string invalid\n`
    }
    return errorMsg
}