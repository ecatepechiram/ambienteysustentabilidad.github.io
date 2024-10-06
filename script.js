const targets = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]');

targets.forEach(target => {
    target.addEventListener('click', () => {
        // Remover la clase 'active' de todos los elementos de contenido
        content.forEach(c => {
            c.classList.remove('active');
        });
        
        // Seleccionar el contenido correspondiente y agregarle la clase 'active'
        const t = document.querySelector(target.dataset.target);
        t.classList.add('active');
    });
});
