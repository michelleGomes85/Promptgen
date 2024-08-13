/**
 * Inicializa o efeito de digitação no elemento com id 'description_site' usando a biblioteca Typed.js.
 * 
 * Esta função configura o Typed.js para exibir um efeito de digitação no elemento selecionado.
 * O efeito inclui a digitação de uma lista de strings, com uma velocidade de digitação e apagamento ajustável.
 * O texto é digitado e apagado em um loop infinito com atrasos configuráveis.
 * 
 * Opções configuradas:
 * - strings: Lista de strings a serem digitadas.
 * - typeSpeed: Velocidade de digitação em milissegundos por caractere.
 * - backSpeed: Velocidade de apagamento em milissegundos por caractere.
 * - backDelay: Atraso antes do início do apagamento do texto.
 * - startDelay: Atraso antes do início da digitação.
 * - loop: Se o efeito deve repetir após completar a digitação.
 */
document.addEventListener('DOMContentLoaded', function () {
    const options = {
        strings: [
            "Crie perguntas e instruções facilmente para impulsionar seu aprendizado com nossa ferramenta intuitiva.",
            "Potencialize sua jornada educacional com prompts personalizados!"
        ],
        typeSpeed: 25,    
        backSpeed: 20,    
        backDelay: 1000,  
        startDelay: 600,  
        loop: true        
    };

    new Typed('#description_site', options);
});

// Função para ativar o link correspondente com base no índice
function active_link(index) {
    var buttons = document.querySelectorAll('.menu_button');
    buttons.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
}

// Adiciona o comportamento de rolagem suave aos botões de navegação
document.querySelectorAll('.menu_button').forEach(button => {
    button.addEventListener('click', function() {
        var targetId = this.getAttribute('data-target');
        var targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Adiciona o evento de rolagem para ativar o botão correspondente
window.addEventListener('scroll', function() {
    var sections = ['start', 'how_it_works', 'about', 'contacts'];
    var scroll_top = window.scrollY || document.documentElement.scrollTop;
    var viewport_height = window.innerHeight;

    sections.forEach((sectionId, index) => {
        var section = document.getElementById(sectionId);
        if (section) {
            var section_top = section.offsetTop;
            var section_bottom = section_top + section.offsetHeight;

            if (scroll_top >= (section_top - viewport_height / 2) && scroll_top < (section_bottom - viewport_height / 2)) {
                active_link(index);
            }
        }
    });
});
