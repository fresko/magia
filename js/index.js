const conteRoot = document.querySelector('.conte-root');
const puntero = document.querySelector('.puntero');
const btn = document.querySelector('.btn');

const ladoPuntero = 100;
const ladoPunteroGrande = 100;
const btGrande = false;



puntero.style.width = ladoPuntero + "px";
puntero.style.height = ladoPuntero + "px";
puntero.style.borderRadius = ladoPuntero + "px";

conteRoot.addEventListener('mousemove', (e) => {
   const lado = btGrande ? ladoPunteroGrande : ladoPuntero;
    console.log(e.pageX, e.pageY) 
    puntero.style.top = (e.pageY - (lado/2)) + "px";
    puntero.style.left = (e.pageX - (lado/2)) + "px";
})

btn.addEventListener('mouseover', () => {
  puntero.style.width = ladoPunteroGrande + "px";
  puntero.style.height = ladoPunteroGrande + "px";
  puntero.style.borderRadius = ladoPunteroGrande + "px";
  btGrande = true;
})


btn.addEventListener('mouseout', () => {
    puntero.style.width = ladoPunteroGrande + "px";
    puntero.style.height = ladoPunteroGrande + "px";
    puntero.style.borderRadius = ladoPunteroGrande + "px";
    btn=false;
})  

