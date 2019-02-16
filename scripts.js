let btn = document.querySelector('.btn');
let box = document.querySelector('.box');

btn.addEventListener('click', () => anim());

function anim(){
   let pos = 0;
   
   let timer = setInterval(mov, 20);

   function mov(){
       if(pos < 300){
           box.style.left  = ++pos;
           box.style.top = pos;
       } else{clearInterval(timer)}
       
   }
}