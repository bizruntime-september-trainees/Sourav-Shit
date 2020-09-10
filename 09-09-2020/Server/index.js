const WebSocket = require("ws");
const wss=new WebSocket.Server({port:8082});
wss.on("connection",ws=>{
     console.log("new connection create");

ws.on("message", data=>{
    ws.send(data.toUpperCase());
});
    
     

 ws.on("close",ws=>{
    console.log("connection closed");
});
});