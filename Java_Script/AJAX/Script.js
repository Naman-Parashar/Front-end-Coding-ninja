function featchData(){
    let xhr = new XMLHttpRequest();
    // to open request
    xhr.open('GET','https://dog.ceo/api/breeds/image/random',true)
    // true for async requests
    // false for synchronous requests
    xhr.send();
      // print when we have data
      xhr.onload = function(){
        console.log(xhr.response);// print json on console
       let resData = JSON.parse(xhr.response); // to convert json to object
      let imageUrl = resData.message;

      $('#dog-image').attr('src', imageUrl);
    }

    // ERROR handler
    xhr.onerror = function(){
        console.error('Error');
    }
};

// using JQuery
function featchData2(){
    // make asynchronous request
    $.ajax({
        url:'https://dog.ceo/api/breeds/image/random',
        method:'GET',
        success:function(data){
            let imageUrl = data.message;
            $('#dog-image').attr('src', imageUrl);
        }
    }).fail(function(){   // error handling
        console.log('Error');
    });
};

// more simpler AJAX requests
function featchData3(){
     // make asynchronous request
    $.get('https://dog.ceo/api/breeds/image/random',function(data){
        let imageUrl = data.message;
        $('#dog-image').attr('src', imageUrl);
    }).fail(function(xhs , textStatus, errorThrown) {
        console.log('Error');
    });
};

$('#btn').click(featchData);


//  convert JSON to string NOT requred here 
//JSON.stringify(); 