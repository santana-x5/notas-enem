document.getElementById('btn-2025').addEventListener('click', function() {
    const container = document.getElementById('resposta-container');
    
    // Corrigido para innerHTML (maiúsculo)
    container.innerHTML = ""; 

    const userMsg = document.createElement('div');
    userMsg.className = 'user-reply';
    userMsg.innerText = '2025';

    const botMsg = document.createElement('div');
    botMsg.className = 'final-msg';
    botMsg.innerText = "Zerou né lindo(a)! ✨";

    container.appendChild(userMsg);
    
    setTimeout(() => {
        container.appendChild(botMsg);
    }, 500);
});