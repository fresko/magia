const conteRoot = document.querySelector('.conte-root');
const puntero = document.querySelector('.puntero');


conteRoot.addEventListener('mousemove', (e) => {
  console.log(e.pageX, e.pageY) 
    puntero.style.left = (e.pageY - 50) + "px";
    puntero.style.top = (e.pageX - 50) + "px";
})


