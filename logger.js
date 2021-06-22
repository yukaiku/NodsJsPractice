const eventEmitter = require("events");
const uuid = require("uuid");

class Logger extends eventEmitter {
    log(msg){
        //Call event
        this.emit('message', {id: uuid.v4(), msg: msg});
        this.emit('data', {id: uuid.v4(), msg: "msg"});
    }
}

module.exports = Logger;