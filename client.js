const net = require("net");

const connect = function () {
    console.log("inside connect");
      const conn = net.createConnection({
        host: "165.227.47.243",
        port: 50541// PORT number here,
      });
      conn.on("connect", ()=>{
          console.log("connected");
          conn.write("Name: RKD");
      });
      conn.on('data', function(data) {
        console.log('Received: ' + data);
    });
    
      // interpret incoming data as text
      conn.setEncoding("utf8");
    
      return conn;
    };
    
module.exports = {connect};