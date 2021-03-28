"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander = __importStar(require("../exchanger"));
var connect = function () { return commander.send('command'); };
var takeOff = function () { return commander.send('takeoff'); };
var land = function () { return commander.send('land'); };
var emergency = function () { return commander.send('emergency'); };
var stop = function () { return commander.send('stop'); };
var flip = function (side) { return commander.send("flip " + side); };
var up = function (distance) { return commander.send("up " + distance); };
var down = function (distance) { return commander.send("down " + distance); };
var left = function (distance) { return commander.send("left " + distance); };
var right = function (distance) { return commander.send("right " + distance); };
var front = function (distance) { return commander.send("forward " + distance); };
var back = function (distance) { return commander.send("back " + distance); };
var clockwise = function (angle) { return commander.send("cw " + angle); };
var counterClockwise = function (angle) { return commander.send("ccw " + angle); };
var go = function (end, speed) { return commander.send("go " + end.x + " " + end.y + " " + end.z + " " + speed); };
var curve = function (start, end, speed) { return commander.send("curve " + start.x + " " + start.y + " " + start.z + " " + end.x + " " + end.y + " " + end.z + " " + speed); };
module.exports = {
    connect: connect,
    takeOff: takeOff,
    land: land,
    emergency: emergency,
    stop: stop,
    go: go,
    curve: curve,
    move: { up: up, down: down, left: left, right: right, back: back, front: front },
    rotate: { clockwise: clockwise, counterClockwise: counterClockwise },
    flip: {
        left: function () { return flip('l'); },
        right: function () { return flip('r'); },
        back: function () { return flip('b'); },
        front: function () { return flip('f'); },
    }
};
