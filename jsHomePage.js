
/**
 * Varivel para controlar o indice do caracter exibido para o usuário
 */
let index = 0;

/**
 * Texto a ser adiciona na descrição do site
 */
const texto = "Crie perguntas e instruções facilmente para impulsionar seu aprendizado com nossa ferramenta intuititiva. "
    + "Potencialize sua jornada educacional com prompts personalizados!";

/**
 * Função para simular a digitação de texto na tela, no #descricao-site
 */
function digitar() {
    if (index < texto.length) {
        document.getElementById("descricao-site").textContent += texto.charAt(index);
        index++;
        setTimeout(digitar, 15);
    }
}

/**
 * Chama a função para digitar sempre que a tela é carregada
 */
window.onload = function () {
    digitar();
};

/**
 * Adiciona um evento de scroll à tela.
 * 
 * Atualiza o link do header que está ativo conforme a sessão visível na tela.
 * A função `ativarLink()` responsável por essa funcionalidade está definida 
 * no arquivo jsHeader.js.
 */
window.addEventListener('scroll', function () {

    var inicio = this.document.getElementById('inicio');
    var comoFunciona = this.document.getElementById('comoFunciona');
    var sobre = this.document.getElementById('sobre');
    var contatos = this.document.getElementById('contatos');

    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    var inicioTop = inicio.offsetTop;
    var comoFuncionaTop = comoFunciona.offsetTop;
    var sobreTop = sobre.offsetTop;
    var contatosTop = contatos.offsetTop;

    if (scrollTop >= (inicioTop - 500))
        ativarLink(0);

    if (scrollTop - 10 >= (comoFuncionaTop - 500))
        ativarLink(1);

    if (scrollTop >= (sobreTop - 500))
        ativarLink(2);

    if (scrollTop >= (contatosTop - 500))
        ativarLink(3);
})