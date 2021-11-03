const net = require("net");

// establishes a connection with the game server
//const client = new net.Socket();
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541// PORT number here,
  });
  conn.on("connect", ()=>{
      conn.write("hello");
      console.log("connected");
  })
  conn.on('data', function(data) {
	console.log('Received: ' + data);
});
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();