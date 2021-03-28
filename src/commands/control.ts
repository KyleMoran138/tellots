import * as commander from '../exchanger';
import { Chords } from '../models/State';

const connect = () => commander.send('command')

const takeOff = () => commander.send('takeoff')

const land = () => commander.send('land')

const emergency = () => commander.send('emergency')

const stop = () => commander.send('stop')

const flip = (side: string) => commander.send(`flip ${side}`)

const up = (distance: string) => commander.send(`up ${distance}`)

const down = (distance: string) => commander.send(`down ${distance}`)

const left = (distance: string) => commander.send(`left ${distance}`)

const right = (distance: string) => commander.send(`right ${distance}`)

const front = (distance: string) => commander.send(`forward ${distance}`)

const back = (distance: string) => commander.send(`back ${distance}`)

const clockwise = (angle: string) => commander.send(`cw ${angle}`)

const counterClockwise = (angle: string) => commander.send(`ccw ${angle}`)

const go = (end: Chords,speed: string) => commander.send(`go ${end.x} ${end.y} ${end.z} ${speed}`)

const curve = (start: Chords, end: Chords,speed: string) => commander.send(`curve ${start.x} ${start.y} ${start.z} ${end.x} ${end.y} ${end.z} ${speed}`)

module.exports = { 
    connect, 
    takeOff, 
    land, 
    emergency,
    stop,
    go,
    curve,
    move: { up, down, left, right, back, front },
    rotate: { clockwise, counterClockwise },
    flip: {
        left: () => flip('l'),
        right: () => flip('r'),
        back: () => flip('b'),
        front: () => flip('f'),
    } 
}