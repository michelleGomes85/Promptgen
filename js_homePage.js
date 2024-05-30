
/**
 * Varivel para controlar o indice do caracter exibido para o usuário
 */
let index = 0;

/**
 * Texto a ser adiciona na descrição do site
 */
const text = "Crie perguntas e instruções facilmente para impulsionar seu aprendizado com nossa ferramenta intuititiva. "
    + "Potencialize sua jornada educacional com prompts personalizados!";

const description = document.getElementById(SELECTORS.description);

/**
 * Função para simular a digitação de texto na tela, no #descricao-site
 */
function to_type() {
    if (index < text.length) {
        description.textContent += text.charAt(index);
        index++;
        setTimeout(to_type, 15);
    }
}

/**
 * Chama a função para digitar sempre que a tela é carregada
 */
window.onload = function () {
    to_type();
};

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

    if (scroll_top >= (start_top - 500))
        active_link(0);

    if (scroll_top - 10 >= (how_it_works_top - 500))
        active_link(1);

    if (scroll_top >= (about_top - 500))
        active_link(2);

    if (scroll_top >= (contacts_top - 500))
        active_link(3);
})