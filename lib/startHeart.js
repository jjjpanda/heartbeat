const cron = require('node-cron')

const {webhookAlert, pingCheckUrl} = require("./requests.js")
const createCheckList = require('./createCheckList.js')
const formatResults = require('./formatResults.js')

module.exports = ({checkUrl, webhookUrl, cronString, sendSuccessMessage}) => {
    const checkUrlList = createCheckList(checkUrl)
    
    cron.schedule(cronString, () => {
        Promise.allSettled(checkUrlList.map(url => {
            return pingCheckUrl(url)
        })).then(results => {
            const formattedResults = formatResults(checkUrlList, results, sendSuccessMessage)
            if(formattedResults.success){
                console.log(`💗`)
            }
            else{
                console.log(`💔`)
            }
            webhookAlert(webhookUrl, formattedResults.msg)
        })
    })
}