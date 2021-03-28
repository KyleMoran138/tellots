"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.send = void 0;
var dgram_1 = __importDefault(require("dgram"));
var client = dgram_1.default.createSocket('udp4');
var constants = require('./constants.json'), _local = {
    state: "idle"
};
client.on('message', function (msg, info) {
    _local.state = msg.toString();
});
client.bind(constants.ports.response);
var bindStateManagement = function (resolve, reject) {
    var timeoutId = setTimeout(function () {
        _local.state = "error";
    }, 10000);
    var intervalId = setInterval(function () {
        if (isIdle())
            return;
        if (isError())
            reject(_local.state);
        else
            resolve(_local.state);
        clearInterval(intervalId);
        clearTimeout(timeoutId);
        _local.state = "idle";
    }, 100);
};
var isIdle = function () { return _local.state === "idle"; };
var isError = function () { return _local.state === "error"; };
var transmit = function (command) {
    var message = Buffer.from(command);
    client.send(message, 0, message.length, constants.ports.command, constants.hosts.remote, function (error) {
        if (error)
            _local.state = "error";
    });
};
exports.send = function (command) {
    return new Promise(function (resolve, reject) {
        if (!isIdle())
            reject("error");
        bindStateManagement(resolve, reject);
        transmit(command);
    });
};
module.exports = { send: exports.send, _local: _local };
