
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
    var radios = document.querySelectorAll('input[name="persona"]');
    var historicalCharacterField = document.getElementById('historical-character-field');

    radios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (this.value === '3' && this.checked) {
                historicalCharacterField.style.display = 'block';
            } else {
                historicalCharacterField.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
   
    M.Chips.init(document.querySelectorAll('.chips-placeholder'), {
        placeholder: 'Digite palavras-chave e pressione Enter',
        secondaryPlaceholder: '+Palavra'
    });

    var switchElement = document.getElementById('show-chips');
    var chipsContainer = document.querySelector('.chips');

    switchElement.addEventListener('change', function() {
        if (this.checked) {
            chipsContainer.style.display = 'block';
        } else {
            chipsContainer.style.display = 'none';
        }
    });
});

const window_modal = document.getElementById(SELECTORS.modal);
const close_modal_span = document.getElementsByClassName(SELECTORS.close)[0];
const copy_btn = document.querySelector('.copy-button');

/**
 * Mostra a caixa de texto, onde está sendo gerado o prompt
 */
function show_prompt() {

    let column2 = document.querySelector(SELECTORS.column2);
    let showPrompt = document.querySelector(SELECTORS.appearPrompt);
    let column1 = document.querySelector(SELECTORS.column1);

    if (window.innerWidth < 1300) {
        column1.style.display = 'none';
    }else {
        showPrompt.style.display = STYLES.display_none;
    }

    column2.style.display = STYLES.display_flex;
}

/**
 * Esconde a caixa de texto onde está gerado o prompt
 */
function hide_prompt() {

    let column2 = document.querySelector(SELECTORS.column2);
    let showPrompt = document.querySelector(SELECTORS.appearPrompt);
    let column1 = document.querySelector(SELECTORS.column1);

    if (window.innerWidth < 1300) {
        column1.style.display = 'flex';
    }

    column2.style.display = STYLES.display_none;
    showPrompt.style.display = STYLES.display_block;
}

document.addEventListener('DOMContentLoaded', () => {

    const steps = document.querySelectorAll('.step');
    const formSteps = document.querySelectorAll('.form-step');

    let currentStep = 1;

    // Armazena os textos originais dos passos
    const originalTexts = {};

    steps.forEach((stepElem) => {
        originalTexts[stepElem.dataset.step] = stepElem.textContent;

        stepElem.addEventListener('mouseover', () => {
            stepElem.textContent = stepElem.dataset.title;
            stepElem.style.width = 'auto';
        });

        stepElem.addEventListener('mouseout', () => {
            stepElem.textContent = originalTexts[stepElem.dataset.step];
            stepElem.style.width = '';
        });

        stepElem.addEventListener('click', (e) => {
            e.preventDefault();
            showStep(parseInt(stepElem.dataset.step));
        });
    });

    function showStep(step) {
        formSteps.forEach((formStep) => {
            formStep.classList.remove('active');
        });
        steps.forEach((stepElem) => {
            stepElem.classList.remove('active');
        });

        document.querySelector(`.step-${step}`).classList.add('active');
        document.querySelector(`.step[data-step="${step}"]`).classList.add('active');

        currentStep = step;
    }

    document.querySelectorAll('.next-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (currentStep < steps.length) {
                showStep(currentStep + 1);
            }
        });
    });

    document.querySelectorAll('.prev-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (currentStep > 1) {
                showStep(currentStep - 1);
            }
        });
    });
});

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

/**
 * Copia o texto gerado para a área de transferência.
 * 
 * -> Utiliza a API Clipboard para copiar o texto para a área de transferência
 */
copy_btn.onclick = function copy_text() {

    const prompt = document.querySelector('.prompt-generator');

    var text_to_copy = prompt.textContent;

    navigator.clipboard.writeText(text_to_copy)
        .then(() => {
            window_modal.style.display = STYLES.display_block;
        })
        .catch(err => {
            console.error(STRINGS.console_log_error_copy, err);
            copy.textContent = STRINGS.content_copy;
        });
}