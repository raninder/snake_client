const {connect} = require("./client");
const {setupInput} = require("./input");


const conn = connect();   
setupInput(conn);
//conn.connect();
console.log("Connecting ...");

//module.exports = {connect,setupInput};