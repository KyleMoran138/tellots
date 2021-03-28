import dgram from 'dgram';
const client = dgram.createSocket('udp4')
const constants = require('../constants.json')
const commander = require('../exchanger')
const EventEmitter = require('events')
const _local: {emitter: any} = {
    emitter: undefined
}

client.on('message', message => {
    if(!_local.emitter || _local.emitter === undefined){
        console.warn('Video stream: message received but emitter undefined');
        return;
    }
    _local.emitter.emit('message', message)
})

const bind = async () => {
    try {
        await commander.send('streamon')
    } catch (_) {
        throw "Unable to start video stream"
    }
    client.bind(constants.ports.video)
    _local.emitter = new EventEmitter()
    return _local.emitter
}

const close = async () => {
    try {  
        await commander.send('streamoff')
    } catch (error) {
        throw "Unable to stop video stream"
    }
    client.close()
}

module.exports = { bind, close }