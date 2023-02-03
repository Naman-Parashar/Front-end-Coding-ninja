// var a = "naman";
// document.write(a);

//  a = 10;
// document.write(a);

//  a = 12.5;
// document.write(a);
// //  var can store different values. 

// console.log(a);   // to print the value in console.

// var a = "A";
// console.log(65 - a);

// var i=0 ;     
//    while(i<5); { 
//       console.log("hii"); 
//       ++i ; 
//    }ile(i<5);
// var a = 10;
// console.log(typeof(a));
// if( typeof(a) ) {
//     console.log("true")
// }
// else {
//     console.log("false")
// }

// function multiply(a, b) {
//     return a*b;
// };

// console.log(multiply);
// var a =[1,2,3];

// var a = 1;

// function b() {
//     a = 10;
//     return;
//     function a(){
//         console.log(5);
//     }
// }

// b();
// console.log(a);

// array = [ 60, 70, 20, 10, 40, 90 ];

// const test = function(x) {
//     return x > 5;
// }
// console.log(test);
// if(array.every(test)) {
//     console.log("statement 1"); 
// }

// else {
//     console.log("statement 2"); 
// }

// var words = ['one', 'two', 'three', 'four'];

// words.forEach(function(word) {
//     console.log(word);
//     if (word === 'two') {
//         words.shift();
//     }
// });

// function a(){
//     function b() {
//         return 3;
//     }

//     return b();

//     function b() {
//         return 8;
//    }
// } 

// console.log(a());

// function fun(...input){  // variable input functions
//     var sum = 0;
//     for(var i = 0; i < input.length; i++){
//         sum += input[i];
//     }
//     return sum;
// }
// console.log(fun(1,2,3,4,5)); 

// function f(a,b = 1) {
//     console.log(a*b)
//   } 
//   var x = undefined;
//   f(5,x)

// var arr = [1,2];
// var a = arr.concat(arr);
// console.log(a);

// var st = {
//     Name:"Naman Parashar",
//     age:21,
//     rollNo:17,
//     address:{
//         city:"Meerut",
//         state:"UP",
//     }
// };

// console.log("Before Deleating");
// st["rollNo"];
// for(var x in st){
//     if(x != "address")console.log(x,st[x]);
//     if( x == "address"){
//         for(var y in st["address"]){
//             console.log(y,st.address[y]);
//         }
//     }
// }
// console.log("After Deleating");
// delete st["rollNo"];
// for(var x in st){
//     if(x != "address")console.log(x,st[x]);
//     if( x == "address"){
//         for(var y in st["address"]){
//             console.log(y,st.address[y]);
//         }
//     }
// }


// var arr = [1,2,3,4,5,6,7,8,9];
// for (const key in arr) {
//     console.log(arr[key]);
// }

function g(){
    console.log("hello world!");
}
// setInterval(g,1000);
// setInterval(g);

//or

// setInterval(function(){
//     console.log("hello world!");
// },1000)

// setInterval(() => console.log("hello world!") , 1000);

// function abc(arr) {
//     var arr2 = [];
//     for(i in arr) {
//         arr2[i] = i;
//     }
//     return arr2;
// }

// var arr = [12, 56, 48, "hello"];
// console.log(abc(arr));
//setTimeout(function, milliseconds, param1, param2, ...)
//param1,param2,...	are Optional Parameters to pass to the function.
// However, if you use an anonymous function, it will work in all browsers:

// setTimeout(function() {myFunc("param1", "param2")}, 2000);
// var obj1 = {};
// var obj2 = new Object();
// var obj3 = {};
// console.log(obj1==obj2, obj1 == obj3);

// var abc = setInterval(counting, 300);
// var count = 0;

// function counting() {
//     console.log(count++);
//     if(count == 5) {
//         clearInterval(abc);
//     }
// }

let list = [4, 5, 6];
// for (let i in list) {
//    console.log(i); 
// }

// for (let i of list) {
//    console.log(i); 
// }

// var arr = []

// arr.push("hello")
// arr.hello = 0
// var value = 0
// for(var i = 0;i < 5; i++) {
//     value = arr[value]
// }

// console.log(value)

// function change1(obj) {
//     obj.name = "ninjas"
//   }
//   function change2(obj) {
//     obj = {
//         name: "changed"
//     }
//   }
  
//   var obj = {name:"coding"}
  
//   change1(obj)
//   change2(obj)
//   console.log(obj.name)  

// var d = {h: 2, j: 3}

// var e = d
// var f = {...d, j: 4}

// console.log(f.h)
// console.log(f.j)

// function propertyExists(obj, path) {
    // // Write logic here
    // var s="" ;
    //   for(var x of path){
    //       s +=x; 
    //   }
    //   var a =get(obj,s);
    //   console.log(a);
//     if(getProp(obj,path)) return getProp(obj,path);
//     else return false;
//   }
//   function getProp (object, path) {
//     if (path.length === 1) return object[path[0]];
//        else if (path.length === 0) throw error;
//     else {
//        if (object[path[0]]) return getProp(object[path[0]], path.slice(1));
//        else {
//           object[path[0]] = {};
//           return getProp(object[path[0]], path.slice(1));
//        }
//     }
//  }

// var obj = {
//     "a":{
//         "b":"dadsa"
//     }
// };

// var path = ['a','b','c'];
// console.log(propertyExists(obj,path));


// var p = ['g','g'];
// var s="" ;
//     for(var x of p){
//         s +=x; 
//     }

// console.log(s+" "+typeof(s));
// var i = document.getElementById('demo');
// i.style.borderColor="green";

// var c = document.querySelectorAll('.demo');
// c.borderColor='blue';
// c[1].innerText="Second Element of Class";

// function foo(a){
//     a = 20;
//     console.log(a);
//     }
//     foo(10);    
//     console.log(a);
// var a = 10;
// console.log(a);
// var a =20;
// console.log(a);

// var a = (function(){
//     return typeof arguments;
//  })();
//  console.log(a);

// var i = 10;

// function outer(){
//     var j = 20;
//     console.log(i, j);

// function inner(){
//         var k = 30;
//         console.log(j, k);
//         k++;
//     }
//     inner();
//     inner();    
// }
// outer();
// t();
// op is  10 20
//        20 30

// var a = (function(){
//     return typeof arguments;
//  })();
//  console.log(a);
// var add = (function ( ) {
//     var counter = 0;
//     return function ( ) {
//          counter += 1; 
//          return counter;
//   }
//   })();    
//   console.log(add());
//   console.log(add());
//   console.log(add());

// for (var i = 0; i <=5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     },1000)
// }
// console.log("After FOR loop completed :" + i);

// console.log((function(x, f = () => x) {
//     var x;
//     var y = x;
//     x = 2;
//     return [x, y, f()];
//   })(1));

//   function cart() {
//     let items = 0;
//     return {
//        addItem: function () {
//             items++;
//         },
//         getItem: function () {
//             return items;
//         }
//     };
// }

// const closure = cart();
// closure.addItem();
// closure.addItem();
// closure.addItem();
// console.log(closure.getItem());

// function generateID(start) {
//     // Write logic here
//     var counter = start; 
//   var a =  function () {
//       console.log('A-2021_'+counter);
//       counter ++;
//     }
//    return a;
// }

// var a = generateID(5);
// a();
// a();
// a();
// generateID(1);
// generateID(1);

// function makeCounter() {
//     let count = 0;
//     return function() {
//       return count++;
//     };
//   }
//   let counter1 = makeCounter();
//   let counter2 = makeCounter();
//   console.log( counter1() ); 
//   console.log( counter1() ); 
//   console.log( counter2() ); 

// function makeArmy() {
//     debugger;
//     let shooters = [];
//     let i = 0;
//     while (i < 10) {
//       let shooter = function() {
//         console.log( i ); 
//       };
//       shooters.push(shooter);
//       i++;
//     }
//     return shooters;
//   }
//   let army = makeArmy();
//   army[0]();
//   army[5]();

// function makeArmy() {
//     debugger;
//     let shooters = [];
//     for(let i = 0; i < 10; i++) {
//       let shooter = function() {
//         console.log( i );
//       };
//       shooters.push(shooter);
//     }
//     return shooters;    
//   }
//   let army = makeArmy();
//   army[0]();
//   army[5]();


// let People = function(person, age) { 
//     this.person = person; 
//     this.age = age; 
//     this.info = function() { 
//         console.log(this);  
//        setTimeout(() => {  
//         console.log(this.person + " is " + this.age + " years old"); 
//        }, 3000); 
//     } 
// }  
// let person1 = new People('John', 21); 
// person1.info();

// var arguments = [1, 2, 3];
// var arr = () => arguments[2];
// console.log(arr());
// function foo(n) {
//     console.log(arguments[0]);
//   var f = () => arguments[0] + n; 
//   return f();
// }
// foo(3);  



/////////////////////////////////////////////////////////////////////

// using new 
// function vehicle(){
//   console.log(this);
// }
// new vehicle();

// Explisit bindings
// const CN = {
//   name: "Coding Ninjas"
// };

// function print(){
//   console.log(this) ;
// }

// print.bind(CN)() ;

// var joe = {
//   name: "Joe",
//   hello: function (){
//      console.log("hi, I am " + this.name) ;
//   }
// }

// var globalHello1 = joe.hello.bind(joe) ;
// var globalHello2 = joe.hello ;
// globalHello1();
// globalHello2.bind(joe)();

// var joe = {
//   name: "Joe"
// }; 

// function print(){
//   console.log(this);
// }

// print.apply(joe);

// const billy = {
//   name: "Billy Jol", 
//   outer: function() {
//        console.log(this);
//      }     
// };
// new (billy.outer.bind(billy))();

// const john = {
//   name:  "John",
//   greet: function(){
//       console.log(  "Hello! My name is " + this.name) ;
//   }
// }

// const CN = {
// name: "Coding Ninjas",
// printName: function(){
//       console.log(this) ;
//   }
// };

// var op1 = CN.printName.bind(john);
// op1();

// john.greet.call(CN);
// CN.printName.call(john);

// function vehicle(numV , price){
//     this.numV = numV;
//     this.price = price;
// }

// var vehicle1 = new vehicle(1, 50000);

// function Person(name) {
//     this.name = name;
//   }
//   var p1 = new Person("Joy");
//   var p2 = new Person("Julie");
  
//   Person.prototype.getName = function() { return this.name };
  
//   p1.getName = function() {return "John"};
//   console.log(p1.getName() + " is friend with " + p2.getName());
//   p2.getName = function() {return 'Jonson'};

// function Student(id, name, club){
//     this.id = id ;
//     this.name = name ;
//     this.club = club ;
// }

// Student.prototype.printDetails = function(){
//     console.log(this.id, this.name, this.club);
// }
// var s1 = new Student(1, 'Raj', 'Cricket');
// var s2 = new Student(2, 'Rohan', 'Dance');
// var s3 = new Student(3, 'Rita', 'BasketBall');
// var s4 = new Student(4, 'Reema', 'Music');

// var arr = [s1,s2,s3,s4];

// for (const c of arr) {
//     c.printDetails();
// }
// const object1 = new Object();
// object1.property1 = 42;
// console.log(Object());

// class Person {
//     constructor(name) { this.name = name; }
//  }
//  console.log(typeof( Person));

// class v {
//     // constructor(name) { this.name = name; }

//     print(){
//         console.log(this.name);
//     }
// }

// class c extends v{
//     constructor(ndoor){
//         super('naman');
//         this.ndoor = ndoor;
//         console.log(ndoor);
//     }
// }

// var x = new c(5);
// x.print();

// var Person = class {
//     constructor() {}
//     sayHello() {
//       return 'Hello!';
//     }
//   };
//   var instance = new Person();
//   console.log(instance.sayHello()+" "+Person.name);
// "use strict"
// function bike() {
//     console.log(this.name);
//     console.log(this);
//    }
//    var name = "Ninja";
//    bike();

// function Abc() {
//     // "use strict"
//     this.a = 25;
//     return {a: 35, b: 44};
//     }
//     var obj = new Abc();
//     console.log(obj.a, obj.b);

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     getname() {
//         return this._name;
//     }
//     setname(value) {
//         this._name = value;
//     }
//     }
//     var person = new Person("James");
//     console.log(person.getname());

// var ninja = {
//     name: 'Ninja',
//     getName: function() {
//         var name = this.name;
//         return name;
//       }
//     };
//     var funcName = function(snack, hobby) {
//     console.log(this.getName() + ' loves ' + snack + ' and ' + hobby);
//     };
//     funcName.call(ninja,'sushi', 'algorithms'); 
//     funcName.apply(ninja,['sushi', 'algorithms']);

// function MyClass() {}

// const obj1 = new MyClass();
// const obj2 = MyClass();

// console.log(obj1);
// console.log(obj2);

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//  }
  
//  class Student extends Person {
//     constructor(name,sec,rollno){
//         super(name);
//         this.sec = sec;
//         this.rollNo = rollno;
//     }
//     getDetails(){
//         return [this.name, this.sec, this.rollNo];
//     }
//  }

//  class  Teacher extends Person {
//     constructor(name ,teacherId , subject){
//         super(name);
//         this.teacherId = teacherId;
//         this.subject = subject;
//     }
//     getDetails(){
//         return [this.name, this.teacherId, this.subject];
//     }
//  }

// var pr = new Promise((resolve,reject)=>{
//     // resolve("done");
// });

// console.log(pr);
// console.log(1);
// setTimeout(function(){
//     console.log(2);
// },0)
// console.log(3);]

// function getData(){
//     return Promise.resolve("Some Data");
// }
// async function abc(){
//     const data = await getData();
//     console.log(data);
// }
// abc();
// console.log(3);

// const promise1 = new Promise((resolve,reject) => { setTimeout(() => { resolve('a') }) })

// const promise2 = new Promise((resolve,reject) => { resolve('b') })

// const promise3 = new Promise((resolve,reject) => { setTimeout(() => { resolve('c') },10) })

// Promise.all([promise1,promise2,promise3]) .then((msg) => { console.log(msg) })
// x((a,b,c) => {
//     return a+b+c
//   },2,3,6)
  
//   function x(callback,a,b,c) {
//     let str = ""
//     setTimeout(() => {
//       str += "x"
//     });
//     str += callback(a,b,c)
//     console.log(str)
//   }

// const promise1 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('a')
//   })
// })

// const promise2 = new Promise((resolve,reject) => {
//   resolve('b')
// })

// const promise3 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('c')
//   },10)
// })


// Promise.race([promise1,promise2,promise3])
// .then((msg) => {
//   console.log(msg)
// })

// const delay = (time) => {
//   // Write the logic here
//   return new Promise((resolve,reject) => {
//     setTimeout(resolve , time);
//   })
// }
 
// let count = counter()

// count.start()
// setTimeout(() => {
//   count.stop()
// },6000)
var greet = document.createElement("p");
greet.innerHTML = `Hello ${name}`;
var name = "Ninja";
document.body.append(greet);
document.body.append(`Nice to meet you, ${name}!`);