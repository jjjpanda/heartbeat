#!/usr/bin/env node
const heartbeat = require('../lib/server.js').heartbeat

console.log("HEARTBEAT")
heartbeat()