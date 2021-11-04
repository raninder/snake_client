const net = require("net");
const { IP, PORT } = require("./constants");
//console.log (IP);

const connect = function () {
  console.log("inside connect");
  const conn = net.createConnection({
    host:IP, 
    port:PORT
  });
  conn.on("connect", () => {
    console.log("connected");
    setInterval(function timeout() {
      conn.write("Name: RKD");
      conn.write('Move: up');
    }, 3000);

  });


  conn.on('data', function (data) {
    console.log('Received: ' + data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = { connect };