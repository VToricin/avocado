let avocado  = document.getElementById('avocado');
let mainBlockMoto = document.querySelector('.mainBlockMoto');
let windowHeight = window.innerHeight;
let avocadoTop = 0;

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
avocadoPosition();

window.addEventListener('scroll',()=>{
    
  avocado.style.top = `${avocadoTop-window.pageYOffset}px`;
  if (window.pageYOffset>400) {
     mainBlockMoto.style.color = "black"; 
  }else {   
     mainBlockMoto.style.color = "rgb(187, 187, 187)"; 
  }
})

screen.orientation.addEventListener('change', function() {
   avocadoPosition(); 
})
