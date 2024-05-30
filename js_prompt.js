

let links_aside = document.querySelectorAll(SELECTORS.group_link);

let parts_form = document.querySelectorAll(SELECTORS.part_form);

let spans_number = document.querySelectorAll(SELECTORS.number_form);

let index_current_part_form = 0;

var window_modal = document.getElementById(SELECTORS.modal);

var close_modal_span = document.getElementsByClassName(SELECTORS.close)[0];

/**
 * Adiciona um event listener a cada link do menu, para mostre a parte 
 * correspondente quando 'click'.
 */
links_aside.forEach((link, index) => {

  link.addEventListener('click', () => {
    index_current_part_form = index; 
    show_part_form(index);
  });

});

/**
 * Mostra a parte do formulário correspondente ao índice fornecido,
 * atualizar qual vai ser o número ativo no momento
 * 
 * @param {number} index - O índice da parte a ser mostrada.
 */
function show_part_form(index) {

  parts_form.forEach((parte, i) => {
    (i === index) ? parte.classList.remove(SELECTORS.hidden) : parte.classList.add(SELECTORS.hidden);
  });

  spans_number.forEach((number, i) => {
    
    if (i === index) {
      number.classList.add(SELECTORS.active_span);
      number.classList.remove(SELECTORS.inactive_span);
    } else {
      number.classList.remove(SELECTORS.active_span);
      number.classList.add(SELECTORS.inactive_span);
    }

  });
}

/**
 * Avança para a próxima parte do formulário.
 */
function next_part_form() {
  if (index_current_part_form < parts_form.length - 1) {
    index_current_part_form++;
    show_part_form(index_current_part_form);
  }
}

/**
 * Retrocede para a parte anterior do formulário.
 */
function previous_part_form() {
  if (index_current_part_form > 0) {
    index_current_part_form--;
    show_part_form(index_current_part_form);
  }
}

/**
 * Alterna a visibilidade da barra lateral do formulário
 */
function toggle_sidebar() {

  var side_bar = document.getElementById(SELECTORS.side_bar);
  var aside = document.querySelector(SELECTORS.aside);
  var main = document.querySelector(SELECTORS.main);

  side_bar.classList.toggle(SELECTORS.active);
  side_bar.classList.toggle(SELECTORS.inactive);

  if (side_bar.classList.contains(SELECTORS.inactive)) {
    aside.style.width = STYLES.width5;
    main.style.width = STYLES.width95;
  } 
  else 
  {
    if (window.innerWidth < 1300) {
      main.style.width = STYLES.width70;
      aside.style.width = STYLES.width30;
    }
    else {
      aside.style.width = STYLES.width20;
      main.style.width = STYLES.width80;
    }
  }

  change_text();
}

/**
 * Altera o texto do botão de toggle da barra lateral. Para que tenha um simbolo
 * diferente, dependendo se está ativo ou inativo
 */
function change_text() {

  var text = document.querySelector(SELECTORS.material_icons);
  var side_bar = document.getElementById(SELECTORS.side_bar);
  var new_text = side_bar.classList.contains(SELECTORS.inactive) ? STRINGS.arrow_forward : STRINGS.arrow_back;

  text.textContent = new_text;
}

/**
 * Exibe a seção de palavras-chave no formulário.
 */
function show_keys_words() {
  document.getElementById(SELECTORS.answers_yes).classList.remove(SELECTORS.hidden);
}

/**
 * Oculta a seção de palavras-chave no formulário.
 */
function hide_keys_words() {
  document.getElementById(SELECTORS.answers_yes).classList.add(SELECTORS.hidden);
}

/**
 * Quando o usuário clicar no <span> (x), fecha o modal
 */
close_modal_span.onclick = function () {
    window_modal.style.display = STYLES.display_none;
}

/** 
  Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
*/
window.onclick = function (event) {
    if (event.target == window_modal) {
        window_modal.style.display = STYLES.display_none;
    }
}