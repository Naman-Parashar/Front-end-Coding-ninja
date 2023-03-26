// now if i want to fetch a para and want to update something in ja i 1sr use getElementById...etc or querySelector
// abd then use aobj.style.color = "black" but in jquery we do it like 

$('#para1').html('welcome');
$('#para1').text('welcome');
// $('#para1').hide();

var p = $('#para1');
p.text('welcome');
/*  $(class or id).method 
$ is a function in jqueary 

           function $(query){
            return  document.querySelector(query);
           }            
        it's just a rough idea not actual working for $.
*/

/* now i will get all the para tag */

var paras = $('p');  // give me all para tags.
var p1 = paras.eq(0);
p1.html("yoo")

//   or 

var p2 = paras[0];
// p2.html("zooo");   wont work
p2.innerHTML ='ANIMAL';

/* both code chanfe the tex t but 1st one will return jQuary object ie we have all the function of jquery in p1
but in p2 it return the DOM objet so we don't have jq methods. */

// to convert Dom object to  jQuery object 

$(p2);  // without quotes

//  change the CSS

$('#para1').css('color','red');

// TOSELECT MULTIPLE PROPERTIES
$('#para1').css({
    fontSize:'50px',
    color:'red'
});


$('div').width('100px');
$('div').height('100px');
$('div').css('background-color', 'red');

// or
$('div').css({
    width:'100px',
    height:'100px',
    backgroundColor:'red'
});
// Event handling in JQuery

$('div').click(function(){
    alert('Clicked');
});

///    or
$('div').on('click',function(){
    alert('Clicked');
});

$('a').on('click',function(events){
    events.preventDefault();
    alert('A Clicked');
});

// the width of the container is increased by 10 px every time we click on it
$('div').on('click',function(){
    let element = $(this);
    element.width(element.width()+10+"px");
});