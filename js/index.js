const conteRoot = document.querySelector('.conten-root');
const puntero = document.querySelector('.puntero');
const puntero2 = document.querySelector('.puntero2');
const btn = document.querySelector('.btn');

const ladoPuntero = 100;
const ladoPunteroGrande = 100;
const btGrande = false;

puntero.style.width = ladoPuntero + "px";
puntero.style.height = ladoPuntero + "px";
puntero.style.borderRadius = ladoPuntero + "px";
puntero2.style.borderRadius = ladoPuntero + "px";


document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.searchbox input');
    const label = document.querySelector('.label-text');

    input.addEventListener('input', function() {
        label.textContent = input.value;
    });
});

conteRoot.addEventListener('mousemove', (e) => {
       
    puntero.style.top = (e.pageY) + "px";
    puntero.style.left = (e.pageX) + "px";

    createTriangle(e.pageX, e.pageY); 
    createTriangle2(e.pageX-60, e.pageY-60); 
})


function createTriangle(x, y) {
  const triangle = document.createElement('div');
  triangle.className = 'triangle';
  triangle.style.left = `${x}px`;
  triangle.style.top = `${y}px`;

  // Generar un color aleatorio para el triángulo (blanco, fondo del sitio, amarillo)
  const colors = [
      'rgba(255, 255, 255, 0.8)', // Blanco
      'rgba(7, 22, 34, 0.8)',     // Fondo del sitio
      'rgba(255, 255, 0, 0.8)'    // Amarillo
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  triangle.style.borderBottomColor = color;

  document.body.appendChild(triangle);

  setTimeout(() => {
      triangle.remove();
  }, 2000); // Eliminar el triángulo después de 2 segundos
}

function createTriangle2(x, y) {
  const triangle = document.createElement('puntero2');
  triangle.className = 'triangle';
  triangle.style.left = `${x}px`;
  triangle.style.top = `${y}px`;

  // Generar un color aleatorio para el triángulo (blanco, fondo del sitio, amarillo)
  const colors = [
      'rgba(255, 255, 255, 0.8)', // Blanco
      'rgba(7, 22, 34, 0.8)',     // Fondo del sitio
      'rgba(39, 245, 243, 0.8)'    // Amarillo
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  triangle.style.borderBottomColor = color;

  document.body.appendChild(triangle);

  setTimeout(() => {
      triangle.remove();
  }, 2000); // Eliminar el triángulo después de 2 segundos
}


