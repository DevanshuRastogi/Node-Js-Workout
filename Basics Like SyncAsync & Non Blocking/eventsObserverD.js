const EEmitter = require('events');  // EventEmitter class

const celebrity = new EEmitter();

celebrity.on("I am Last of all start",()=>{
console.log("Well said SRK");
})
celebrity.on("I am Last of all start",()=>{
console.log("Love Uh SRK");
})



process.on("exit",(code)=>{
    console.log("process ended with code : ",code)
});


celebrity.emit("I am Last of all start");
