var btn = document.querySelector('#toggle-btn');
btn.onclick = onn;
                //    OR
// var btn = document.querySelector('.nn');
// btn.onclick = onn;
        //   OR
// var btn = document.querySelectorAll('.nn');
// btn[0].onclick = onn; 

function onn(){
    var b = document.getElementById("circle");
    b.classList.toggle('on');
    var bc = document.getElementsByTagName("body");
    bc[0].classList.toggle('color');
    var hc = document.getElementsByClassName("h1");
    hc[0].classList.toggle('h-color');
}

