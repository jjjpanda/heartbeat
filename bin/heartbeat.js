#!/usr/bin/env node
const heartbeat = require('../lib/server.js').heartbeat

//const heartbeat = require('../heartbeat.config.js')

console.log("HEARTBEAT")
heartbeat()