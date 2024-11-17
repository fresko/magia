const text = "OctoBrain AI es un agente de inteligencia artificial  que transforma la manera en que interactúas con tus datos. Como un pulpo extiende sus tentáculos a través del universo de datos, conectando y sincronizando información de multiples fuentes simultáneamente. OctoBrain fusiona el poder de los modelos de lenguaje (LLM) con una red neuronal adaptativa, interpretando y comprendiendo los datos  dando resultados magicos que eliminan tareas repetitivas y optimizando procesos.bajo la supervision humana.";

let index = 0;

function typeText() {
    const typingText = document.getElementById('typing-text');
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 50);
    }
}



document.addEventListener('DOMContentLoaded', () => {
    typeText();
    
    // Mantener el código existente del puntero
    const conteRoot = document.querySelector('.conten-root');
    const puntero = document.querySelector('.puntero');
    const puntero2 = document.querySelector('.puntero2');

    conteRoot.addEventListener('mousemove', (e) => {
        puntero.style.top = (e.pageY) + "px";
        puntero.style.left = (e.pageX) + "px";
        createTriangle(e.pageX, e.pageY);
        createTriangle2(e.pageX-60, e.pageY-60);
    });

    // Manejo de botones
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.opacity = '0.6';
            setTimeout(() => this.style.opacity = '1', 200);
        });
    });

    // Chat
    const chatInput = document.querySelector('.chat-input input');
    const sendBtn = document.querySelector('.send-btn');
    const chatMessages = document.querySelector('.chat-messages');

    sendBtn.addEventListener('click', () => {
        if (chatInput.value.trim()) {
            const message = document.createElement('div');
            message.textContent = chatInput.value;
            message.className = 'message';
            chatMessages.appendChild(message);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });
});

// Mantener las funciones createTriangle del código original
function createTriangle(x, y) {
    const triangle = document.createElement('div');
    triangle.className = 'triangle';
    triangle.style.left = `${x}px`;
    triangle.style.top = `${y}px`;
    document.body.appendChild(triangle);
    setTimeout(() => triangle.remove(), 2000);
}

function createTriangle2(x, y) {
    const triangle = document.createElement('div');
    triangle.className = 'triangle';
    triangle.style.left = `${x}px`;
    triangle.style.top = `${y}px`;
    document.body.appendChild(triangle);
    setTimeout(() => triangle.remove(), 2000);
}

