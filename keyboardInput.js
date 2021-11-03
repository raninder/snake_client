const conn = require("./client");

const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
  };
  const handleUserInput = function (data) {
    // your code here

    if(data === '\u0003') {
        process.exit();
      }
      else {
          console.log(data);
      }
  };
  
  setupInput();
// console.log(conn.connect);
// conn.connect();
// console.log("Connecting ...");
