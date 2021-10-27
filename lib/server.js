const axios = require('axios').default;
const cron = require('node-cron') 

const heartbeat = require('../heartbeat.config.js')

var fs = require('fs');
var path = require('path');

exports.heartbeat = () => {
    console.log(process.cwd(), __dirname)

}