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

/**
 * Adiciona um evento de scroll à tela.
 * 
 * Atualiza o link do header que está ativo conforme a sessão visível na tela.
 * A função `ativarLink()` responsável por essa funcionalidade está definida 
 * no arquivo jsHeader.js.
 */
window.addEventListener('scroll', function () {

    var start = document.getElementById(SELECTORS.start);
    var how_it_works = document.getElementById(SELECTORS.how_it_works);
    var about = document.getElementById(SELECTORS.about);
    var contacts = document.getElementById(SELECTORS.contacts);

    var scroll_top = window.scrollY || document.documentElement.scrollTop;

    var start_top = start.offsetTop;
    var how_it_works_top = how_it_works.offsetTop;
    var about_top = about.offsetTop;
    var contacts_top = contacts.offsetTop;

    if (scroll_top >= (start_top))
        active_link(0);

    if (scroll_top >= (how_it_works_top))
        active_link(1);

    if (scroll_top >= (about_top - 10))
        active_link(2);

    if (scroll_top >= (contacts_top))
        active_link(3);
})