var i , sum =0;
for(i=0; i<5;i++){
    sum += i;
}
document.write(sum+"<br/>")
document.write("This script tag is in External File <br/>")
document.write("This script tag is in External File <br/>")

document.write("<b/>This is a variable whose value is not assigned<br/>")
var s;
document.write(s+"<br/>")

s=1;
for(; ; ){
    document.write((s++) +"<br/>")
    if(s==11) break
}


// alert("Alert box")

// var b = confirm("Do you want this")
// if(b){
//     document.write("You Press ok <br/>")
// }
// else{
//     document.write("You Press cancel<br/>")
// }

// var n = prompt("Enter your Name<br/>")
// if(n != null && n.length > 0){
//     document.write(n+"<br/>")
// }

document.write(eval("2+5+5"))
document.write(parseInt("15VRV"))
document.write("<br/><br/><br/>")

// var t =setTimeout("sumf(25,25)",2000)

// function sumf( a , b){
//     document.write(a+b)
// }
// clearTimeout(t)

    //     functions
// function show(){
//     alert("this is a alert message")
// }

// function show(value){
//     alert(value)
// }


function show(){
    var t = setInterval("alert('1 second')",1000)
}
    
// function emp(name , sal){
//     this.name = name
//     this.sal = sal
// }

// var e = new emp('naman',10000000)
// document.write(e.name+"    "+e.sal)
// var s = "nsmsn"

var a1 = ['m','t','w','h','f']
var a2 = [1,2,3,4,5]

var x = a1.join(a2)
document.write(x)

// alert("alert")

// ................................................................