
// var left=1;
// var right=5;
// // function myshow(){
// //     for(let i=left;i<=right;i++)
// //     {
// //         document.getElementById("c"+i).style.display="inline-block";
// //     }

// // }

// // function leftarrow(){
// //     if(left<=3){
// //         document.getElementById("c"+left).style.display="none";
// //         left+=1;
// //         // right+=1;
// //         for(let i=left;i<=right;i++){
// //             document.getElementById("c"+i).style.display="inline-block";  
// //         }
// //     }
// //     else{
// //         return;
// //     }
     
// // }

// // function rightarrow(){
// //     if(right>=1){
// //         document.getElementById("c"+right).style.display="none";
// //         // left-=1;
// //         right-=1;
// //         // for(i=left;i<=right;i++){
// //         //     document.getElementById("c"+i).style.display="inline-block";  
// //         // }
// //     }
// //     else{
// //         return;
// //     }
     
// // }
// var slidemain = document.getElementById("Slider_parent");
// var slidechild = slidemain.getElementsByClassName("slider_child");
// function leftarrow(){
//     slidemain.prepend(slidechild[slidechild-1]);
// }

// function rightarrow(){
//     slidemain.append(slidechild[0]);
// }


var sliderMain = document.getElementById("Slider_main");
var figure = sliderMain.getElementsByClassName("figure");
function right_next(){
    sliderMain.append(figure[0]);
    console.log("print");

}

function left_prev(){
    sliderMain.prepend(figure[figure.length-1]);
    console.log("hello");
}