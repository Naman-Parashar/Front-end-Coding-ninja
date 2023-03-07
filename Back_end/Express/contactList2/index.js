const express = require('express');
const path = require('path');
const port = 8000;

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'vews2')); 

var contactList = [
    {
        name: "John",
        phone:"11111111111"
    },
    {
        name: "tony",
        phone:"222222222222"
    },
    {
        name: "hulk",
        phone:"333333333333"
    }
]; // an array of objects

app.listen(port , function(err){
    if(err) {
        console.log('Error in running the server',err);
    }

    console.log('Starting server');
});

app.get('/', function(req, res){
    return res.render('index', {
        title : 'My Contact List',
        Contact_List : contactList
    });
});
