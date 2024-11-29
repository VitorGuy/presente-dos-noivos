// Seleciona o botão e o texto do código PIX
const copiarCodigoBtn = document.getElementById('copiarCodigo');
const codigoPix = document.querySelector('.codigo-pix').textContent;

// Adiciona o evento de clique ao botão
copiarCodigoBtn.addEventListener('click', () => {
    // Cria um elemento de texto temporário
    const textarea = document.createElement('textarea');
    textarea.value = codigoPix; // Adiciona o texto do PIX ao elemento
    document.body.appendChild(textarea);
    textarea.select(); // Seleciona o conteúdo
    document.execCommand('copy'); // Copia o conteúdo
    document.body.removeChild(textarea); // Remove o elemento temporário

    // Alerta de sucesso
    alert('Código PIX copiado para a área de transferência!');
});
