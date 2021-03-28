"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dgram_1 = __importDefault(require("dgram"));
var client = dgram_1.default.createSocket('udp4');
var constants = require('../constants.json');
var EventEmitter = require('events');
var _local = {
    emitter: undefined
};
var format = function (mapped) { return ({
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
    acceleration: { x: mapped.agx, y: mapped.agy, z: mapped.agz }
}); };
var map = function (message) {
    var mapped = message.toString()
        .slice(0, -1)
        .split(';')
        .map(function (element) { return element.split(':'); })
        .reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        acc[key] = Number(value);
        return acc;
    }, {});
    return format(mapped);
};
client.on('message', function (message) {
    if (!_local.emitter || _local.emitter === undefined) {
        console.warn('Video stream: message received but emitter undefined');
        return;
    }
    _local.emitter.emit('message', map(message));
});
var bind = function () {
    client.bind(constants.ports.state);
    _local.emitter = new EventEmitter();
    return _local.emitter;
};
var close = function () { return client.close(); };
module.exports = { bind: bind, close: close };
