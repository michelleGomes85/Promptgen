
const SELECTORS = {

    description: 'description_site',
    start: 'start',
    how_it_works: 'how_it_works',
    about: 'about',
    contacts: 'contacts',

    open_menu: '#open_menu',
    close_menu: '#close_menu',
    menu: '#menu',
    menu_link: '.menu_link',
    active: 'active',
    inactive: 'inactive',

    progress: '.progress-form',

    active_span: 'active_span',
    inactive_span: 'inactive_span',
    group_link: '.group_link',
    part_form: '.part',
    column1: '.main_column1',
    column2: '.main_column2',

    number_form: '.number',
    hidden: 'hidden',
    side_bar: 'sidebar',
    aside: 'aside',
    main: 'main',
    material_icons: '.material-icons',
    answers_yes: "answers_yes",
    modal: "my_modal",
    close_modal: '.close-modal',

    appearPrompt: '.show_prompt',
    disappear: '.hide_prompt',
    prompt: '.textArea',
    prompt_generator: 'prompt_generator',
    form_control: '.form_control',
    copy_symbol: '.copy_symbol',
    percentage: 'percentage',

    input_subject: 'input_subject',
    knowledge_level: 'knowledge_level',
    goal: 'goal',
    available_time: 'available_time',
    time_to_learn: 'time_to_learn',
    persona: 'persona',
    conversation_tone: 'conversation_tone',
    format: 'format',
    theoretical_practical: 'theoretical_practical',
    details: 'details',
    key_words: 'key_words',
    education_level: 'education_level',

    input_error: 'input_error',

    form_step: '.form-step'
}

const STYLES = {

    display_flex: 'flex',
    display_none: 'none',
    opacity0: '0',
    opacity1: '1',

    display_block: 'block',
    display_inline: 'inline',
    width100: '100%',
    width20: '20%',
    width30: '30%',
    width40: '40%',
    width60: '60%',
    width70: '70%',
    width80: '80%',
    width95: '95%',
    width5: '5%',
    width1: '1%',

    red: 'read',
    blue: '#0F2A5B',

    center: 'center'
}

const STRINGS = {

    px: 'px',
    style: 'style',

    empty: '',
    percent: '%',
    done: 'done',
    content_copy: 'content_copy',
    specialist: 'Especialista',
    no: 'Não',
    console_log_prompt: 'Gerador de prompt ...',
    console_log_error_copy: 'Erro ao copiar texto: ',

    arrow_forward: 'arrow_forward_ios',
    arrow_back: 'arrow_back_ios'
}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
});

/**
 * Configura os gatilhos para os dropdowns.
 */
function setupDropdownTriggers() {
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
    if (dropdownTriggers.length > 0) {
      M.Dropdown.init(dropdownTriggers, {});
    }
  }

const links_header = document.querySelectorAll(SELECTORS.menu_link);

// Adiciona um event listener a todos os links do menu
links_header.forEach((link, i) => {
    link.addEventListener('click', () => {
        active_link(i);
        closeMenu(); // Fecha o menu ao clicar em um link
    });
});

// Função para ativar o link do header, adicionando ou removendo a classe active
function active_link(index) {
    links_header.forEach((link, i) => {
        (i === index) ? link.classList.add(SELECTORS.active) : link.classList.remove(SELECTORS.active);
    });
}
