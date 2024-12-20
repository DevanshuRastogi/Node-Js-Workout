// not actual req and response ,, just skelton to show how thing works undr the hood 

// const request = require("./request")
// const response = require("./response")

//  function requestResponse(url , data){
// request.send(url , data );
// response.read();
// }

// another clean syntax is using destructruring 
const {send} = require("./request")
const {read} = require("./response")

 function requestResponse(url , data){
send(url , data );
read();
}



requestResponse("www.google.com", "google baba ")
