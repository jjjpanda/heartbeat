const axios = require('axios').default;

module.exports = {
    webhookAlert: (url, content) => {
        if(content && content != ""){
            axios.post(url, {
                content
            })
        }
    },
    
    pingCheckUrl: (url) => {
        return axios.get(url)
    }
}