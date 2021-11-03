const net = require("net");

const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541// PORT number here,
});

module.exports = conn;