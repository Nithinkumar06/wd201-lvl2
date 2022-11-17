const fs = require("fs");
const http = require("http");
const args = require('minimist')(process.argv.slice(2));
let homeContent = "";
let projectContent = "";
let registrationContent="";
let registrationscript="";
fs.readFile("home.html",(err,home) => {
  if(err){
    throw err;
  }
  homeContent = home;
});
fs.readFile("project.html",(err,project) => {
  if(err){
    throw err;
  }
  projectContent=project;
});
fs.readFile("registration.html",(err,registration) => {
  if(err){
    throw err;
  }
  registrationContent=registration;
});
fs.readFile("script.js",(err,script) => {
  if(err){
    throw err;
  }
  registrationscript=script;
});

http
  .createServer((request,response) => {
    let url = request.url;
    response.writeHeader(200,{"Content-Type":"text/html"});
    switch(url){
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registration":
        response.write(registrationContent);
        response.end();
        break;
      case "/script.js":
        response.write(registrationscript);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;  
    }
  })
  .listen(args.port);