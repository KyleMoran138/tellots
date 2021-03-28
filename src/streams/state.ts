import dgram from 'dgram'
import { RawState } from '../models/RawState'
import { State } from '../models/State'
const client = dgram.createSocket('udp4')
const constants = require('../constants.json')
const EventEmitter = require('events')
const _local: {emitter: any} = {
    emitter: undefined
}
    
const format = (mapped: RawState): State => ({
    pitch: mapped.pitch, 
    roll: mapped.roll, 
    yaw: mapped.yaw,
    speed: { x: mapped.vgx, y: mapped.vgy, z: mapped.vgz },
    temperature: { low: mapped.templ, high: mapped.temph },
    tof: mapped.tof,
    height: mapped.h,
    battery: mapped.bat,
    barometer: mapped.baro,
    time: mapped.time,
    acceleration: { x: mapped.agx, y: mapped.agy, z: mapped.agz}
})

const map = (message: object) => {
    let mapped = message.toString()
        .slice(0, -1)
        .split(';')
        .map((element: any) => element.split(':'))
        .reduce((acc: any, [key, value]) => {
            acc[key] = Number(value)
            return acc
        }, {})

    return format(mapped)
}    

client.on('message', message => {
    if(!_local.emitter || _local.emitter === undefined){
        console.warn('Video stream: message received but emitter undefined');
        return;
    }
    _local.emitter.emit('message', map(message))
})

const bind = () => {
    client.bind(constants.ports.state)
    _local.emitter = new EventEmitter()
    return _local.emitter
}

const close = () => client.close()

module.exports = { bind, close }