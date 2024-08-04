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