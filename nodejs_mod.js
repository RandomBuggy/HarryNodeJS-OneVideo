/* Module Wrappar Function, Node.js does this automatically */

// (function(exports, require, module, __filename, __dirname) {


/*
harry = {
    name: "Harry",
    favName: 36,
    developer: true
}

console.log(exports, require, module, __filename, __dirname);
module.export = harry;
*/
// });

const os = require("os");
const path = require("path");
const fs = require("fs");
const simple = require("./module_first");
const http = require("http");
// import {complex} from "./module_second.mjs";

p = "/data/data/com.termux/files/home/nodeJS/";

console.log(os.freemem());
console.log(os.endianness());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.arch());
console.log(os.platform());
console.log(os.release())
console.log(os.loadavg());
console.log(os.type());
console.log(os.uptime());
console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.networkInterfaces());

console.log(path.basename(p + "sqlite3_commands.txt"));
console.log(path.dirname(p + "sqlite3_commands.txt"));
console.log(path.extname(p + "sqlite3_commands.txt"));
console.log(path.extname(__filename));

console.log(fs);
fs.readFile(p + "nodejs_mod.js", "utf8", (error, data) => {
    console.log(error);
    console.log("Reading The Current JS File");
    console.log(data);
});

/* non-blocking I/O model proof 
   this below line will print before the file content is printed */
console.log("Finished Teading The File");

console.log("using another fs api");

console.log(fs.readFileSync(p + "nodejs_mod.js"));
console.log(fs.readFileSync(p + "nodejs_mod.js").toString());
console.log("Finished Teading The File");

fs.writeFile(p + "node_generated.txt", fs.readFileSync(p + "nodejs_mod.js", "utf8").toString(), () => {
    console.log("File Buffer Has Been Written");
});
console.log("Finished writing This File");

fs.stat(p + "nodejs_mod.js", (error, stats) => {
    console.log(error);
    console.log(stats);
});

/* commonjs modules
 */
simple();
/* ECMAScript modules
 */
// complex();


const port = process.env.port || 4500;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<H6> HELLO WORLD </H6>");
    console.log(req);
});

console.log(`port: ${port}`);

server.listen(port, () => {
    console.log(`server is running on 'http://localhost:${port}/'`);
});
