// var targetPosition = 1500;
// var currentPosition = 0;

// var scrollIntervel = setInterval(function() {
//     if(currentPosition >= targetPosition){
//         clearInterval(scrollIntervel);
//     }
//     window.scrollBy(0,20);
//     currentPosition+=20;  
// },15);


// var navMenueAnchorTag = document.querySelectorAll("#navigation-bar a");
// // console.log(navMenueAnchorTag);
// for(var i=0; i<navMenueAnchorTag.length ;i++){   // we handel all click links
//     navMenueAnchorTag[i].addEventListener("click",function (e) {
//         e.preventDefault();

//         var targetSectionID = this.textContent.trim().toLowerCase();
//         console.log(targetSectionID);
//         var targetSection = document.getElementById(targetSectionID);
//         // console.log(targetSection);
//         var interval = setInterval(function () {
//             var targetSectionCoordinate = targetSection.getBoundingClientRect();
//             if (targetSectionCoordinate.top <=0){
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0,35);
//         },15);
//         });
// }


 /*             or we can just create a different method and then call it
 we also need to pass targetSection to the function. we cant just write scrollVertically(targetSection) as
 it become a function call so we pass 3 aug to setInterval which are the arg of the function 
 we also have to declare   var interval  outside to make it global var.*/


 var interval;
 var navMenueAnchorTag = document.querySelectorAll("#navigation-bar a");
// console.log(navMenueAnchorTag);
for(var i=0; i<navMenueAnchorTag.length ;i++){   // we handel all click links
    navMenueAnchorTag[i].addEventListener("click",function (e) {
        e.preventDefault();

        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(targetSectionID);
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);
         interval = setInterval(scrollVertically,15,targetSection);
        });
}
 function scrollVertically (targetSection) {
            var targetSectionCoordinate = targetSection.getBoundingClientRect();
            if (targetSectionCoordinate.top <=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,35);
        }


      // aoto fill skil section
/*  step 1: handle srcoll on window as after every scroll we need to find that is skill section visible or not.
    step 2: ensure that initial width of colored skill dives is Zero.
    step 3: start animation on every skill ie increase skill inner div width from zero to skill level.
    step 4: store skill level in html with the help of data attribute */  


    var progressBars = document.querySelectorAll('.skill-progress > div');
    var skillsContainer = document.getElementById('skill-index');
    window.addEventListener('scroll', checkscroll);

    // width od bar should be zero.
    // var bar is global but within the function. we can also use let as let has block scope
    function bar(){
        for (let bar of progressBars){
            bar.style.width = 0+'%';
        }
    }
    bar(); // call the function.
    // this function eill check for every single scrool but as we only want to fire animation once so,
    // we create a var to determin whether the animation is done or not.
    var aniDone = false;


    //check wether skill cointainer is visible 
        // condition as we scroll top decrease (top is the height fron top to that container )
        // as top is less then view Port height YHEN THE SECTION IS visible.
    function checkscroll(){
        var cordinates = skillsContainer.getBoundingClientRect();
        if(!aniDone && cordinates.top < window.innerHeight){
            // animation will start. 
            aniDone = true;
            // console.log("skill");
            fillBar();
        }
        else if(cordinates.top > window.innerHeight){
            aniDone = false;;
            bar();
        }
    }

    function fillBar(){
        for(let bar of progressBars){   // we can't use var as it will only fill last bar.
            let targetWidth = bar.getAttribute('data-bar-width');
            let currentWidth = 0;
            let interval = setInterval(function(){
                if(currentWidth > targetWidth){
                    clearInterval(interval);
                    return;
                }
                currentWidth++;
                bar.style.width = currentWidth + '%';
            },5);
        }
    }