const conn = require("./client");

conn.on("connect", () => {
    console.log("connected");
})
conn.on('data', function (data) {
    console.log('Received: ' + data);
});
// interpret incoming data as text
conn.setEncoding("utf8");

console.log("Connecting ...");
