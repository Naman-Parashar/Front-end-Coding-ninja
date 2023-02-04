/*     1--> making server live. it will just lode as we are not serving response to the browser.

const http = require('http');
const port  = 8000;

const server = http.createServer();

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log('listening on port',port);
}); */


/*   Step 2 -- after making server live we will responce for the browser we will create a request function. we will pass the function to the
createServer(); method*/
/* 
function requestHandler(req, responce){
    console.log(req.url);

    responce.end("Hello");
}


const http = require('http');
const port  = 8000;

const server = http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log('listening on port',port);

}); */

/* 3. NOw we will try to return html */
function requestHandler(req, responce){
    console.log(req.url);
    responce.writeHead()
    responce.end("Hello");
}


const http = require('http');
const port  = 8000;

const server = http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log('listening on port',port);

});