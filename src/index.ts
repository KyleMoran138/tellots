const controlCommands = require('./commands/control')
const readCommands = require('./commands/read')
const setCommands = require('./commands/set')
const stateStream = require('./streams/state')
const videoStream = require('./streams/video')


module.exports = { 
    control: controlCommands,
    read: readCommands,
    set: setCommands,
    receiver: {
        state: stateStream,
        video: videoStream
    }
 }