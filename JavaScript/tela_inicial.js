// Exibir a tela de alerta após 1 segundo
setTimeout(() => {
    document.getElementById('overlay').classList.add('active');
}, 1000);

// Fechar a tela de alerta ao clicar no botão
document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('overlay').classList.remove('active');
});

document.getElementById('close-btn').addEventListener('click', function() {
    window.location.href = '../index.html'; // Redireciona para main.html
});
