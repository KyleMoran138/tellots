import * as commander from '../exchanger';

const speed = (speed: string) => commander.send(`speed ${speed}`)

const rc = (x: string, y: string, z: string, yaw: string) => commander.send(`rc ${x} ${y} ${z} ${yaw}`)

const wifi = (ssid: string, password: string) => commander.send(`wifi ${ssid} ${password}`)

module.exports = { speed, rc, wifi }