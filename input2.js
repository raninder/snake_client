let connection;


const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    // if (key === '\u001B\u005B\u0041') {
    //   process.stdout.write( "wOW RD" );
    // }
    if (key === "z") {
      console.log( "wOW RD" );
    }

    if (key === '\u0003') {
      process.exit();
    }

    process.stdout.write(key);
  });
  return stdin;
};

module.exports = { setupInput };



