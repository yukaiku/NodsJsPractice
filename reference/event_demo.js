const eventEmitter = require("events");
//Create Class

class MyEmitter extends eventEmitter{

}

//init object
const myEmitter = new MyEmitter();

//create event listener
myEmitter.on("event", () => console.log("Event Fired"));


//Init event

myEmitter.emit("event");