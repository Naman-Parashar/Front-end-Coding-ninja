
var b = document.getElementById('bo');
b.onclick = count;
var c = 0;
function count() {
    c+=1;
    var d = document.getElementById('value');
    d.innerText = "Box is clicked "+ c +" times"
}