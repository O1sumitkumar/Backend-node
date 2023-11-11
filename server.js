// this how we gonna create server in node js

const http = require('node:http');
const data = require('./data')
// const chalk = require('chalk');

// console.log(chalk.blue('Hello world!'));


const dataControl = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(data));
    res.write(JSON.stringify({ name: "Sumit", email: "sumitjha365@gmail.com", age: 22, hobby: "riding bike" }));
    // res.write("Am another text ")
    res.end();
}


http.createServer(dataControl).listen(4500)