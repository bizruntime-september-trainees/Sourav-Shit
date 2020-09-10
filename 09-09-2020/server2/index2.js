const WebSocket = require("ws");
const wss=new WebSocket.Server({port:8080});
wss.on("connection",ws=>{
     console.log("new connection create");

ws.on("message", e=>{
   console.log("data id-:$(data)");
   ws.send(20+245);
  // {rasult: e.data.add.num1+e.data.add.num2}
});
    
     

 ws.on("close",ws=>{
    console.log("connection closed");
});
});