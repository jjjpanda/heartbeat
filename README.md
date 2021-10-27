# 💓 Heartbeat 💓

Checks the heartbeat of a server, periodically. Sends responses accordingly to a webhook. 💌

## Quick Start

Set up a heartbeat.config.js:
```
module.exports = {
    checkUrl: "whatever url you wanna check", 
                //or ["an", "array", "of", "urls"]
    webhookUrl: "webhook url you need to send the response to",
    cronString: "a valid cron expression for the check",
                // example: every 10 minutes is "*/10 * * * *"
    sendSuccessMessage: //boolean 
                //if true send message on successful check", 
                //defaults to false
}
```