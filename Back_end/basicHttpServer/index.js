/*     1--> making server live. it will just lode as we are not serving response to the browser.*/

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


/*   Step 2 -- after making server live we will responce for the browser we will create a request function. we will pass the function to the
createServer(); method*/

/* 
function requestHandler(req, responce){
    console.log(req.url);

    responce.end("Hello");
}
 */

/* 3. NOw we will try to return html */
/* 
function requestHandler(req, responce){
    console.log(req.url);
    responce.writeHead(200, {'content-type':'text/html'});    // 200 is just like code of a responce 200 for success 404 for not found etc..
    responce.end("<h1>Hello</h1>");
} */


/* 4 return html file */
// const fs = require('fs');   // WE NEED THIS MODULE TO READ/WRITE INTO FLES .

// function requestHandler(req, responce){
//     console.log(req.url);
//     responce.writeHead(200, {'content-type':'text/html'});

//     // we use an async function to reed the html file which has two arguments Ist file name and IInd callBack function 
//     // which always has error as its first argument and second argument is the  data .
//     fs.readFile('./index.html', function(err,data){
//         if(err){
//             console.log(err);
//             return responce.end('<h1>Error</h1>');
//         }

//        return responce.end(data);
//     });
// }


// return html files using cases
const fs = require('fs');  

function requestHandler(req, responce){
    console.log(req.url);
    responce.writeHead(200, {'content-type':'text/html'});
    
    let filePath;

    switch(req.url){
        //   "/" means root path / home page.
        case '/':
            filePath = './index.html';
            break;
        case '/profile':
            filePath = './profile.html';
            break;
        default:
            filePath = "./404.html";
    }
    fs.readFile(filePath,function(err, data){
        if (err) {
            console.log(err);
            return;
        }
        return responce.end(data);
    });
}