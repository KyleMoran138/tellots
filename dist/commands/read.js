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
var speed = function () { return commander.send('speed?'); };
var battery = function () { return commander.send('battery?'); };
var time = function () { return commander.send('time?'); };
var height = function () { return commander.send('height?'); };
var temperature = function () { return commander.send('temp?'); };
var attitude = function () { return commander.send('attitude?'); };
var barometer = function () { return commander.send('baro?'); };
var acceleration = function () { return commander.send('acceleration?'); };
var tof = function () { return commander.send('tof?'); };
var wifi = function () { return commander.send('wifi?'); };
module.exports = { speed: speed, battery: battery, time: time, wifi: wifi, height: height, temperature: temperature, attitude: attitude, barometer: barometer, tof: tof, acceleration: acceleration };
