document.addEventListener('DOMContentLoaded', () => {
    const celulas = document.querySelectorAll('.celula');
    
    const modal = document.getElementById('modal-info');
    const modalTitle = modal.querySelector('h4');
    const modalText = modal.querySelector('p');
    const closeBtn = modal.querySelector('.close-btn');

    celulas.forEach(celula => {
        celula.addEventListener('click', () => {
            let titulo = celula.textContent.trim();
            let info = '';

            if (celula.classList.contains('totipotente')) {
                titulo = 'Célula Totipotente: ' + titulo;
                info = celula.getAttribute('data-info');
            } 
            else if (celula.classList.contains('indiferenciada')) {
                titulo = 'Célula Indiferenciada (Pluripotente): ' + titulo;
                info = celula.getAttribute('data-info');
            } 
            else if (celula.classList.contains('diferenciada')) {
                const tipo = celula.getAttribute('data-tipo');
                titulo = 'Célula Diferenciada: ' + tipo;
                info = `Essa célula já possui uma função e forma altamente especializada. Ela é essencial para o funcionamento de tecidos específicos, como o ${tipo}.`;
                
                if (tipo === 'Hemácia' || tipo === 'Glóbulo Branco') {
                    info = `Essas são células sanguíneas com funções vitais. A ${tipo} é um exemplo de célula ${celula.textContent.trim().toLowerCase()} (ou multipotente) que se especializou completamente.`;
                }

            }

            modalTitle.innerHTML = titulo;
            modalText.innerHTML = info;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

});