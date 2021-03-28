"use strict";
var controlCommands = require('./commands/control');
var readCommands = require('./commands/read');
var setCommands = require('./commands/set');
var stateStream = require('./streams/state');
var videoStream = require('./streams/video');
module.exports = {
    control: controlCommands,
    read: readCommands,
    set: setCommands,
    receiver: {
        state: stateStream,
        video: videoStream
    }
};
