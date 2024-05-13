/**
 * Abrir o botão do menu, quando este estiver na tela de celular
 */
openMenu.addEventListener('click', () => {

    menu.style.display = 'flex'

    menu.style.right = (menu.offsetWidth * -1) + 'px'

    openMenu.style.display = 'none'

    setTimeout(() => {
        menu.style.opacity = '1'

        menu.style.right = '0'
    }, 10)
});

/**
 * Fechar o botão do menu, quando este estiver na tela de celular
 */
closeMenu.addEventListener('click', () => {

    menu.style.opacity = '0'

    setTimeout(() => {
        menu.removeAttribute('style')
        openMenu.removeAttribute('style')
    }, 200)

    menu.style.right = (menu.offsetWidth * -1) + 'px'
});

/*
    Pega todos os links do menu, header para controlar quam vai está ativo na momento
*/
let links = document.querySelectorAll('.menu-link');

/**
 * Adiciona um event listener sempre que o usuário 'click' no link
 */
links.forEach((link, i) => {

    link.addEventListener('click', () => {
        ativarLink(i);
    })
});

/**
 * Ativa o link do header, adicionando o removendo a classe active
 * 
 * @param {index} index index do link que vai ser ativado 
 */
function ativarLink(index) {

    links.forEach((link, i) => {
        (i === index) ? link.classList.add('active') : link.classList.remove('active');
    })
}