const EEmitter = require('events');  // Event module and value that get assigned to variable EEmitter

const celebrity = new EEmitter();

// celebrity.on("I am Last of all start",()=>{
// console.log("Well said SRK");
// })
// celebrity.on("I am Last of all start",()=>{
// console.log("Love Uh SRK");
// })

// process.on("exit",(code)=>{
//     console.log("process ended with code : ",code)
// });

// celebrity.emit("I am Last of all start");
// celebrity.on("I am Last of all start",()=>{
// console.log("Well said SRK");
// })


//============== Another way could be ========================//
celebrity.on("race",(result )=>{
if(result==="win") console.log("wohho congrats celeb")
})
celebrity.on("race",(result )=>{
if(result==="lost") console.log("oh noooo ")
})



process.on("exit",(code)=>{
    console.log("process ended with code : ",code)
});


celebrity.emit("race" , "win");
celebrity.emit("race" , "lost");
