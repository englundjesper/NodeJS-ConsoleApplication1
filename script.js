console.log('1. Read package.json'); 
console.log('2. Display OS info'); 
console.log('3. Start HTTP Server');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// menu for the user to choose from three different options
rl.question('Choose an option: ' , (option) => {
    
    switch (option) {
        case '1':
           readPackage();
          break;
        case '2':
           getOS();
          break;
        case '3':
           startHTTP();
           break;
           default:
           console.log("Invalid number. Please try again!");
        }

    rl.close();
});

//package.json
function readPackage() {
    const fs = require('fs');
    
    fs.readFile(__dirname + '/package.json', 'utf-8', (err, content)=>{
        console.log("Reading package.json file");
        console.log(content);
    });
    }

//OS info
function getOS() {
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var cpuCores = os.cpus().length;
var ar = os.arch();
var pf = os.platform();
var rel = os.release();
var userInfo = os.userInfo().homedir;

console.log("Getting OS info...");
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(`CPU Cores: ${cpuCores}`);
console.log(`Arch: ${ar}`);
console.log(`Platform: ${pf}`);
console.log(`Release: ${rel}`);
console.log(`User: ${userInfo}`);
}

//HTTP Server
function startHTTP() {
    const http = require('http');
    
    const hostname = 'localhost';
    const port = 3000;
    
    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World');
    });
    
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
    
    console.log("Starting HTTP Server...");
    console.log('listening on port 3000...');
    }