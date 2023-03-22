/* file 1 ---->  export let name = "Naman";
                export function fun(){};

   file 2 ----> import {name} from 'file 1(path)';
                import {fun} from 'file 1(path)';\

in html --->
     <script type="module" src="path"></SCRIPT>


    todo:  it only work with live server.
              */

export let message = "ES6 Modules";

export function user(){
    console.log("hello");
}


/*                             or  

let message = "ES6 Modules";

function user(){
    console.log("hello");
}

export {message, user};

*/