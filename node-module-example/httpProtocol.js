// const http = require("http");


// const request = http.request("http://www.www.google.com",(res)=>{
// res.on("data",(chunks)=>{
// console.log(`data chunks from the website : ${chunks} `)
// });

// res.on("end",()=>{
//     console.log("No more data for now Thanku")
// });

// })

// request.end();


//============================  Give encrypted response but node js decrypts and show us as it is ===============
// const https = require("https");


// const request = https.request("https://www.www.google.com",(res)=>{
// res.on("data",(chunks)=>{
// console.log(`data chunks from the website : ${chunks} `)
// });

// res.on("end",()=>{
//     console.log("No more data for now Thanku")
// });

// })

// request.end();







// best way is to use destructring .. when we know the exact name of functionality like get/reuest etc 

// const {request} =  require(`https`);

// const req = request("https://www.google.com",(res)=>{
//     res.on("data",(chunks)=>{
// console.log(`data chunks from the website : ${chunks} `)



//     })


//     res.on("end",()=>{
//         console.log("no more data broo");
//     })
// })

// req.end();



// using get 
const {get } =  require ('https');

get("https://www.google.com",(res)=>{
    res.on("data",(chunks)=>{
console.log(`data chunks from the website : ${chunks} `)



    })


    res.on("end",()=>{
        console.log("no more data broo");
    })
})

