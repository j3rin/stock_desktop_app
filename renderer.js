// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const axios = require("axios");
const socket = require('socket.io-client')('https://ws-api.iextrading.com/1.0/tops')


socket.on('message', message => {
    let data = JSON.parse(message);
    
    if(data.symbol == "SNAP"){
        let div = document.getElementById("SNAP");
        // You would want to expand this out to include pertinent attributes, and timestamps, etc...
        div.innerHTML = data.symbol+":"+data.askPrice
    }

})

// Connect to the channel
socket.on('connect', () => {
    // Subscribe to topics (i.e. appl,fb,aig+)
    socket.emit('subscribe', 'snap')
    // socket.emit('subscribe', 'fb')

})
  