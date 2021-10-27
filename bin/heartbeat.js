#!/usr/bin/env node
const heartbeat = require('../lib/index.js').heartbeat
const possibleConfigPath = process.argv[2]
heartbeat(possibleConfigPath)