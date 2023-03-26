let b = $('body');
b.css('text-align', 'center');

$('#btn-container').css({
    width:'200px',
    height:'40px',
    border:'2px solid red',
    borderRadius:'50px',
    margin:'auto'
});

$('#btn').css({
    width:'40px',
    height:'40px',
    backgroundColor:'black',
    borderRadius:'50px',
});

$('h1').css('font-size','100px');

// event 

$('#btn-container').on('click',function(){
    $('#btn').toggleClass("move-btn");
    $('h1').toggleClass("textColor");
    $('body').toggleClass("backColor");
    $('#btn-container').toggleClass("divColor");
});