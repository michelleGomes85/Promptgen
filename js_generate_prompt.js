/**
 * Lida com o click do botão "gerar-prompt".
 */
async function handleGeneratePromptClick() {

  const formData = localStorage.getItem('formData');

  if (formData) {
    const modal = M.Modal.getInstance(document.getElementById('customModal'));
    modal.open();

    document.getElementById('modalYes').addEventListener('click', () => {
      window.location.href = 'index_prompt.html';
    });

    document.getElementById('modalNo').addEventListener('click', () => {
      localStorage.removeItem('formData');
      window.location.href = 'index_assunto.html';
    });
  } else {
    window.location.href = 'index_assunto.html';
  }
}

let typed = null;

/**
 * Atualiza o efeito de digitação do texto no elemento especificado.
 * @param {string} text - O texto a ser exibido com o efeito de digitação.
 */
async function updateTypingEffect(text) {

  const promptElement = document.querySelector(".prompt-generator");

  if (typed) {
    typed.destroy();
  }

  if (promptElement) {
    typed = new Typed(promptElement, {
      strings: [text],
      typeSpeed: 10,
      backSpeed: 500,
      backDelay: 1000,
      startDelay: 0,
      loop: false,
      showCursor: true
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {

  initializeModals();
  setupEventListeners();
  init(); // Inicializa os event listeners e outras funcionalidades
});

/**
 * Inicializa os modais.
 */
function initializeModals() {
  const elems = document.querySelectorAll('.modal');
  M.Modal.init(elems);
}

/**
 * Configura os event listeners.
 */
function setupEventListeners() {
  const generatePromptButtons = document.querySelectorAll('.gerar-prompt');
  generatePromptButtons.forEach(button => {
    button.addEventListener('click', handleGeneratePromptClick);
  });

  const switchElement = document.getElementById('show-chips');
  if (switchElement) {
    switchElement.addEventListener('change', toggleChipsContainer);
  }

  const radios = document.querySelectorAll('input[name="persona"]');
  radios.forEach(radio => {
    radio.addEventListener('change', toggleHistoricalCharacterField);
  });
}

/**
 * Alterna a visibilidade do container de chips com base no estado do checkbox.
 */
function toggleChipsContainer() {
  const chipsContainer = document.querySelector('.chips');
  if (chipsContainer) {
    chipsContainer.style.display = this.checked ? 'block' : 'none';
  }
}

/**
 * Alterna a exibição do campo de personagem histórico com base na seleção do rádio.
 */
function toggleHistoricalCharacterField() {
  const historicalCharacterField = document.getElementById('historical-character-field');
  historicalCharacterField.style.display = this.value === '3' && this.checked ? 'block' : 'none';
}

/**
 * Salva os dados do formulário no localStorage.
 */
async function saveDataToLocalStorage() {

  const values = {
    assunto: document.getElementById('subject')?.value || '',
    nivelConhecimento: document.getElementById('nivel-conhecimento')?.value || '',
    nivelEscolaridade: document.getElementById('nivel-escolaridade')?.value || '',
    objetivoEstudo: document.querySelector('input[name="objetivo"]:checked')?.value || '',
    horasDisponiveis: document.getElementById('slice')?.value || '',
    tempoDominio: document.querySelector('input[name="tempo"]:checked')?.value || '',
    personaIA: document.querySelector('input[name="persona"]:checked')?.value || '',
    personagemHistorico: document.getElementById('historical-character')?.value || '',
    tomConversa: document.getElementById('tom-resposta')?.value || '',
    formatoDaResposta: document.getElementById('formato-resposta')?.value || '',
    pontosPrincipais: document.getElementById('conteudo-resposta')?.value || '',
    preferenciaFonte: document.getElementById('fonte-resposta')?.value || '',
    showChips: document.getElementById('show-chips')?.checked || false,
    palavrasChave: document.getElementById('show-chips')?.checked
      ? Array.from(document.querySelectorAll('.chips .chip')).map(chip =>
        Array.from(chip.childNodes)
          .filter(node => node.nodeType === Node.TEXT_NODE)
          .map(node => node.textContent.trim())
          .join(' ')
      )
      : []
  };

  const savedData = JSON.parse(localStorage.getItem('formData')) || {};

  Object.keys(values).forEach(key => {
    if (key === "assunto" && values[key] === '') {
      if (savedData.hasOwnProperty(key))
        return;
    }
    savedData[key] = values[key];
  });

  localStorage.setItem('formData', JSON.stringify(savedData));
}

/**
 * Gera o texto do prompt com base nos dados salvos e atualiza o efeito de digitação.
 */
async function generatePromptData() {
  
  const savedData = JSON.parse(localStorage.getItem('formData')) || {};

  const values = {
    assunto: savedData.assunto || '',
    nivelConhecimento: savedData.nivelConhecimento || '',
    nivelEscolaridade: savedData.nivelEscolaridade || '',
    objetivoEstudo: savedData.objetivoEstudo || '',
    horasDisponiveis: (savedData.horasDisponiveis !== '0' && savedData.horasDisponiveis != null) ? savedData.horasDisponiveis : '',
    tempoDominio: savedData.tempoDominio || '',
    personaIA: savedData.personaIA || '',
    personagemHistorico: savedData.personagemHistorico || ' um personagem histórico relacionado ao assunto',
    tomConversa: savedData.tomConversa || '',
    formatoDaResposta: savedData.formatoDaResposta || '',
    pontosPrincipais: savedData.pontosPrincipais || '',
    preferenciaFonte: savedData.preferenciaFonte || '',
    palavrasChave: savedData.palavrasChave || ''
  };

  const text = await generatePromptText(values);

  await updateTypingEffect(text.trim());
}

/**
 * Define o valor de um elemento <select>.
 * @param {string} selectId - O ID do elemento <select>.
 * @param {string} savedValue - O valor a ser definido.
 */
async function setSelectValue(selectId, savedValue) {
  const selectElement = document.getElementById(selectId);
  if (selectElement) {
    selectElement.value = savedValue || selectElement.querySelector('option').value;
    M.FormSelect.init(selectElement); // Atualiza a exibição do select
  }
}

/**
 * Define o valor de um <Radio>.
 * @param {string} name - O nome do grupo de rádio.
 * @param {string} value - O valor do rádio a ser selecionado.
 */
async function setRadioValue(name, value) {
  const radio = document.querySelector(`input[name="${name}"][value="${value}"]`);
  if (radio) {
    radio.checked = true;
    radio.dispatchEvent(new Event('change'));
  }
}

/*
  Carrega os dados do localStorage e atualiza os campos do formulário
*/
async function loadFormData() {

  const savedData = JSON.parse(localStorage.getItem('formData')) || {};

  setSelectValue('nivel-conhecimento', savedData.nivelConhecimento);
  setSelectValue('nivel-escolaridade', savedData.nivelEscolaridade);
  setSelectValue('tom-resposta', savedData.tomConversa);
  setSelectValue('formato-resposta', savedData.formatoDaResposta);
  setSelectValue('conteudo-resposta', savedData.pontosPrincipais);
  setSelectValue('fonte-resposta', savedData.preferenciaFonte);

  const assunto = document.getElementById('subject');
  if (assunto && typeof savedData.assunto === 'string') {
    assunto.value = savedData.assunto.trim() || '';
    assunto.focus();
  }

  const historical_character = document.getElementById('historical-character');
  if (historical_character && typeof savedData.personagemHistorico === 'string') {
    historical_character.value = savedData.personagemHistorico.trim() || '';

    const event = new Event('change', { bubbles: true });
    historical_character.dispatchEvent(event);
  }

  const slice = document.getElementById('slice');
  if (slice && !isNaN(savedData.horasDisponiveis)) {
    slice.value = savedData.horasDisponiveis || '0';
  }

  if (savedData.objetivoEstudo && typeof savedData.objetivoEstudo === 'string') {
    setRadioValue('objetivo', savedData.objetivoEstudo);
  }

  if (savedData.tempoDominio && typeof savedData.tempoDominio === 'string') {
    setRadioValue('tempo', savedData.tempoDominio);
  }

  if (savedData.personaIA && typeof savedData.personaIA === 'string') {
    setRadioValue('persona', savedData.personaIA);
  }

  const showChipsCheckbox = document.getElementById('show-chips');
  if (savedData.showChips && showChipsCheckbox) {
    showChipsCheckbox.checked = true;
    showChipsCheckbox.dispatchEvent(new Event('change'));
  }

  const elems = document.querySelectorAll('.chips-placeholder');
  const chipsData = (savedData.palavrasChave || []).map(word => ({ tag: word }));

  if (elems && chipsData) {
    instance = M.Chips.init(elems, {
      placeholder: 'Digite palavras-chave e pressione Enter',
      secondaryPlaceholder: '+Palavra',
      data: chipsData
    });
  }

  generatePromptData();
}

/*
  Adiciona event listeners para todos os campos do formulário
*/
function addEventListeners() {

  document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', () => {
      saveDataToLocalStorage();
      generatePromptData();
    });
  });

  document.querySelectorAll('input[type="text"]').forEach(text => {
    text.addEventListener('input', () => {
      saveDataToLocalStorage();
      generatePromptData();
    });
  });

  const input = document.querySelector('.input');
  if (input) {
    input.addEventListener('keydown', (event) => {

      if (event.key === 'Enter') {

        saveDataToLocalStorage();
        generatePromptData();
      }
    });
  }

  document.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('close')) {

      event.target.parentElement.remove();
      saveDataToLocalStorage();
      generatePromptData();
    }
  });

  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
      saveDataToLocalStorage();
      generatePromptData();
    });
  });

  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      saveDataToLocalStorage();
      generatePromptData();
    });
  });

  document.querySelectorAll('input[type="range"]').forEach(range => {
    range.addEventListener('input', () => {
      saveDataToLocalStorage();
      generatePromptData();
    });
  });

  const continueButton = document.querySelector('#continue');
  if (continueButton) {
    continueButton.addEventListener('click', () => {
      const subjectField = document.getElementById('subject');
      const subjectLabel = document.querySelector('.subject');
      const err = document.querySelector('.hint');
      const subjectValue = subjectField ? subjectField.value.trim() : '';

      // Remove classes de erro se o campo não estiver vazio
      subjectField.classList.remove('err');
      subjectLabel.classList.remove('err-label');

      if (subjectValue !== '') {
        saveDataToLocalStorage();
        window.location.href = 'index_prompt.html';
      } else {
        subjectField.focus();
        // Adiciona classes de erro se o campo estiver vazio
        subjectField.classList.add('err');
        subjectLabel.classList.add('err-label');
        err.style.display = 'block';
      }
    });
  }


  const copyButton = document.querySelector('.copy-button');
  if (copyButton) {
    copyButton.addEventListener('click', () => {
      const promptText = document.querySelector(".prompt-generator").innerText;
      navigator.clipboard.writeText(promptText).then(() => {
        window_modal.style.display = STYLES.display_block;
      }).catch(err => {
        alert("Falha ao copiar texto: " + err);
      });
    });
  }

  const close_modal_span = document.querySelector(SELECTORS.close_modal);
  if (close_modal_span) {
    close_modal_span.onclick = function () {
      window_modal.style.display = STYLES.display_none;
    }
  }

  const window_modal = document.getElementById(SELECTORS.modal);
  window.onclick = function (event) {
    if (event.target == window_modal) {
      window_modal.style.display = STYLES.display_none;
    }
  }
}

/**
 * Função principal para inicialização
 */
async function init() {
  loadFormData();
  addEventListeners();
}
