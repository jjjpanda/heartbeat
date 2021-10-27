# 💓 Heartbeat 💓

Checks the heartbeat of a server, periodically. Sends responses accordingly to a webhook. 💌

## Quick Start

1. Set up a heartbeat.config.js: 💛
```
module.exports = {
    checkUrl: "whatever url you wanna check", 
                //or ["an", "array", "of", "urls"]
                //or {"name": "url1", "name2": "url2", "name3": "url3"}
    webhookUrl: "webhook url you need to send the response to",
    cronString: "a valid cron expression for the check",
                // example: every 10 minutes is "*/10 * * * *"
    sendSuccessMessage: false,
                //if true, send message on successful check", 
                //defaults to false
    consoleOutput: false,
                //if true, console output will emit after every check
                //defaults to false 
                //there's still console output at start up
}
```

2. Start heartbeat from terminal from same directory 🤍

```
> npx heartbeat
```

3. Start heartbeat with explicit path or relative path 🧡

```
> npx heartbeat C:\Users\user\heartbeat.config.js
```

```
> npx heartbeat ../../heartbeat.config.js
```

4. Start heartbeat from API 💙

```
const { heartbeat } = require('heartbeat')
heartbeat() //or heartbeat("path/to/heartbeat.config.js")
```

5. Feel free to use Express middleware to easily create health check routes 💚

```
app.use('/health', require('heartbeat').heart)
//and in config set checkUrl: "http://serverHost/health"
```