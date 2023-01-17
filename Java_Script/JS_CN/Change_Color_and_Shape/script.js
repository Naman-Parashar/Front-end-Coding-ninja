var ccbtn = document.getElementById("cc");
var csbtn = document.getElementById("cs");
var outerDiv = document.getElementById("outer");
var innerDiv = document.getElementById("inner");
var fun = [ toRectangle,toOriginal,toCircle];
var n = getRandonMethode();
ccbtn.addEventListener("click", change_color);
csbtn.addEventListener("click", fun[n]);

function change_color() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    outerDiv.style.backgroundColor = "#" + randomColor;
}

function change_shape() { 
    // console.log("change_shape");
}

function getRandonMethode(){
 return Math.floor(Math.random()*fun.length);
}
function toCircle(){
    innerDiv.classList.toggle("circle");
}

function toRectangle(){
    innerDiv.classList.toggle("rect");
}

function toOriginal(){
    innerDiv.classList.remove("circle");
    innerDiv.classList.remove("rect");
}

        const btn2=document.getElementById('btn2')
        btn2.addEventListener("click",function(){
            document.getElementById('shape').style=`
            color: red; 
            `;
        })