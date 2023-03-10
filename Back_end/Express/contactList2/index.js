const express = require('express');
const path = require('path');
const port = 8000;
const app = express();
// const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'vews2')); 
app.use(express.urlencoded());

app.use(express.static('Assets'));  // to access static files

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


// without listen it will not work.
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

let title = {
    title : 'My Contact List for Practic'
};
app.get('/practic2', function(req, res){
    return res.render('practic2', title);
});


// form

app.post('/create-contact', function(req, res){
    // return res.redirect('/practic2');
    // console.log(req.body);

    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });

     contactList.push(req.body);
    // return res.redirect('/');
    return res.redirect('back'); // return to where we come from
});

app.get('/delete-contact/:phone', function(req, res){
    console.log(req.params);
    let phone = req.params.phone;

    let contactIndex = contactList.findIndex(function(contact){
        return contact.phone == phone;
    });
    console.log(contactIndex);

    if (contactIndex != -1){
        contactList.splice(contactIndex, 1); // remove only  contactIndex if i put 2 then remeove 2 contac from contactIndex
    }

    return res.redirect('back'); // return to where we came from
});

// or using queary params
// app.get('/delete-contact/', function(req, res){
//     console.log(req.query);
//     let phone = req.query.phone;
// });
