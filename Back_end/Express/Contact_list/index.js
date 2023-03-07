const express = require('express');
const path = require('path');
const port = 8000;

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));  // second view is folder name



app.listen(port , function(err){
    if(err) {
        console.log('Error in running the server',err);
    }

    console.log('Starting server');
    console.log(__dirname);

});
// in node if we don't have a return page then it;s just load but in express it shows us it can't load anything.

// return a page from server


// get just render the page for different rquests as we use if else or switch in node it make it more moduler.
app.get('/', function(req, res){
    // console.log(__dirname);
    // res.send('<H1>cool server is available</H1>');
    return res.render('home', {title : 'My Contact List'});
});


// controler for practice.ejs page
let title = {
    title : 'My Contact List for Practic'
};
app.get('/practic', function(req, res){
    return res.render('practic', title);
});
