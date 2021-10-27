const axios = require('axios').default;
const chalk = require('chalk')

module.exports = {
    webhookAlert: (url, content) => {
        if(content && content != ""){
            return axios.post(url, {
                content
            }).catch(err => {
                console.log(`🩺 ${chalk.red.bold(`webhook message failed`)} 🩺`)
            })
        }
        else return undefined
    },
    
    pingCheckUrl: (url) => {
        return axios.get(url).then(resp => {
            return { code: resp.status, status: "up" }
        }, err => {
            if(err.response != undefined){
                return { code: err.response, status: "down" }
            }
            else{
                return { code: err.code, status: "down" }
            }
        })
    }
}