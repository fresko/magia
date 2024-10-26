const conteRoot = document.querySelector('.conte-root');
const puntero = document.querySelector('.puntero');
const ladoPuntero = 100;

puntero.style.width = ladoPuntero + "px";
puntero.style.height = ladoPuntero + "px";
puntero.style.borderRadius = ladoPuntero + "px";

conteRoot.addEventListener('mousemove', (e) => {
  console.log(e.pageX, e.pageY) 
    puntero.style.top = (e.pageY - (ladoPuntero/2)) + "px";
    puntero.style.left = (e.pageX - (ladoPuntero/2)) + "px";
})


