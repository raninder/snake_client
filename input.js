//const {connect} = require("./client");

let connection;


const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    if (key === "w") {
      connection.write('Move: up');
    }
    if (key === "a") {
      connection.write('Move: left');
    }
    if (key === "s") {
      connection.write('Move: up');
    }
    if (key === "d") {
      connection.write('Move: right');;
    }
    if (key === '\u0003') {
      process.exit();
    }
  
    process.stdout.write( key );
  });
  return stdin;
};
const handleUserInput = function (data) {
  // your code here
  
};
module.exports = { setupInput };



