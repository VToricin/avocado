let avocado  = document.getElementById('avocado');
let mainBlockMoto = document.querySelector('.mainBlockMoto');
let windowHeight = window.innerHeight;
let avocadoTop = 0;
let isRipeBrandName = document.querySelector('.isRipeBrandName');
let startView__name = document.querySelector('.start-view__name');

function avocadoPosition () {
windowHeight = window.innerHeight;
if (windowHeight<420) {
   avocadoTop = -40;
   
} else if (windowHeight<680) {
   avocadoTop = 250;   
} else {
   avocadoTop = 320;
} 

avocado.style.top = `${avocadoTop}px`;
}
function colorize () {
   isRipeBrandName.style.color = '#772b97';
   setTimeout(()=>{
      isRipeBrandName.style.color = '#502b97';
      setTimeout(()=>{
         isRipeBrandName.style.color = '#2b4c97';
         setTimeout(()=>{
            isRipeBrandName.style.color = '#2b8897';
            setTimeout(()=>{
               isRipeBrandName.style.color = 'rgb(113 71 27)';
               setTimeout(()=>{
                  isRipeBrandName.style.color = '#515151';
                  
               },350)
            },350)
         },350)
      },350)
   },350) 
}
avocadoPosition();

window.addEventListener('scroll',()=>{
  colorize();
  if (window.pageYOffset>120) {
     isRipeBrandName.classList.add('scrolled');
     isRipeBrandName.style.left = `${window.innerWidth/2-73}px`
     isRipeBrandName.style.fontSize = `25px`;
     startView__name.style.top = `3px`;
     
  } else {
     isRipeBrandName.classList.remove('scrolled');
     isRipeBrandName.style.left = `-85px`;
     isRipeBrandName.style.fontSize = `75px`;
     startView__name.style.top = `19px`;
     
  }

  avocado.style.top = `${avocadoTop-window.pageYOffset}px`;
  

  if (window.pageYOffset>400) {
     mainBlockMoto.style.color = "black"; 
  }else {   
     mainBlockMoto.style.color = "rgb(187, 187, 187)"; 
  }
})
screen.orientation.onchange = function () { 
   avocadoPosition(); 
}

