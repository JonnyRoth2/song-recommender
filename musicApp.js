const path = require('path');
const express= require('express');
const bcrypt = require('bcrypt')
const app=express();
const bodyParser= require("body-parser");
require("dotenv").config({ path: path.resolve(__dirname, 'credentialsDontPost/.env') }) 
const portNumber = 5000;
app.set("views", path.resolve(__dirname, "templates"));
app.set("view engine", "ejs");
app.listen(portNumber);
app.use(express.static(path.join(__dirname,'public')));
console.log(`Web server is running at http://localhost:${portNumber}`);
process.stdin.setEncoding("utf8");
const prompt = "Stop to shutdown the server: "
process.stdout.write(prompt);
process.stdin.on("readable", function () {const dataInput = process.stdin.read();
    const command = dataInput.trim(); 
    if(command.toLowerCase() === "stop"){
    	    process.stdout.write("Shutting down the server") 
            process.exit(0); 
    	      } 
    	    else{ 
          process.stdout.write(`Invalid command: ${command}\n`);
    	    } 
        }); 
app.get("/", (request, response) => response.render('index'));
app.get("/login", (request, response)=> response.render('login.ejs'));
app.get("/signup", (request, response)=> response.render('signup.ejs'));
app.post("/signup", (request, response) => {
  
})