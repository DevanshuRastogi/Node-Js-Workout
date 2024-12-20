
const REQUEST_TIMEOUT = 500;
const encryptD=(data)=>{
 console.log(`encrypted data : ${data}`)
}




const send= (url , data )=>{
 encryptD(data);
}

module.exports={
    REQUEST_TIMEOUT,
    send,
}