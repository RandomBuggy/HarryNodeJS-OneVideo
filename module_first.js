function simple() {
    console.log("Simple");
}

module.exports = simple;

const {time} = require("console");
const e = require("events");
const {setTimeout} = require("timers/promises");

class MyEmitter extends e {}
const emitter = new MyEmitter();

emitter.on("WaterFull", () => {
    console.log("Please, Turn Off the Motor");
    setTimeout(() => {
        console.log("It's a Gentle Reminder.Pleaee, Turn Off The Motor!");
    }, 5000);
});

console.log("script is running");
for (let index = 0; index < 10; index++) {
    console.log("here yoi are");
    if (index == 7) {
        emitter.emit("WaterFull");
    }
}
console.log("script is still running");
