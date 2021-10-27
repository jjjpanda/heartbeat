# 💓 Heartbeat 💓

Checks the heartbeat of a server, periodically. Sends responses accordingly to a webhook. 💌

## Quick Start

Set up a heartbeat.config.js:
```
module.exports = {
    checkUrl: "whatever url you wanna check", 
                //or ["an", "array", "of", "urls"]
    webhookUrl: "webhook url you need to send the response to",
    onSuccess: "message to send on successful check", 
                //Defaults to no message.
    onFailure: "message to send on failure", 
                //Defaults to detailed message on which server(s) is/are down
    cronString: "a valid cron expression for the check" 
                // example: every 10 minutes is "*/10 * * * *"
}
```