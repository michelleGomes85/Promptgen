let usingExample = false; // Variável de controle para saber se está usando exemplo

document.addEventListener('DOMContentLoaded', function () {
  initializeModals();
  setupEventListeners();
  init();
});

/**
 * Função principal para inicialização
 */
function init() {
  loadFormData();
  addEventListeners();
}

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
  setupGeneratePromptButtons();
  setupSwitchElement();
  setupRadioButtonsPersona();
  setupDropdownTriggers();
  setupDropdownItems();
  setupNewSubjectButton();
}

/**
 * Configura os botões para gerar o prompt.
 */
function setupGeneratePromptButtons() {
  const generatePromptButtons = document.querySelectorAll('.gerar-prompt');
  generatePromptButtons.forEach(button => {
    button.addEventListener('click', handleGeneratePromptClick);
  });
}

/**
 * Configura o switch para mostrar/ocultar o container de chips.
 */
function setupSwitchElement() {
  const switchElement = document.getElementById('show-chips');
  if (switchElement) {
    switchElement.addEventListener('change', toggleChipsContainer);
  }
}

/**
 * Configura os botões de rádio para selecionar o personagem histórico.
 */
function setupRadioButtonsPersona() {
  const radios = document.querySelectorAll('input[name="persona"]');
  radios.forEach(radio => {
    radio.addEventListener('change', toggleHistoricalCharacterField);
  });
}

/**
 * Configura os gatilhos para os dropdowns.
 */
function setupDropdownTriggers() {
  const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
  if (dropdownTriggers.length > 0) {
    M.Dropdown.init(dropdownTriggers, {});
  }
}

/**
 * Configura os itens do dropdown.
 */
function setupDropdownItems() {
  const dropdownItems = document.querySelectorAll('#dropdown1 a');
  dropdownItems.forEach(item => {
    item.addEventListener('click', function () {
      const example = this.getAttribute('data-example');
      usingExample = true;
      loadExampleData(example);
    });
  });
}

/**
 * Configura o botão para adicionar novo assunto.
 */
function setupNewSubjectButton() {
  const new_subject = document.querySelector('#new_subject');
  if (new_subject) {
    new_subject.onclick = function () {
      loadFormData();
      localStorage.removeItem('formData');
      localStorage.removeItem('exampleData');
      window.location.href = 'index_prompt.html?form=subject';
    }
  }
}

/**
 * Lida com o click do botão "gerar-prompt".
 */
function handleGeneratePromptClick() {

  const formData = localStorage.getItem('formData');

  if (formData) {
    const modal = M.Modal.getInstance(document.getElementById('customModal'));
    modal.open();

    setupModalConfirmationButtons();
  } else {
    window.location.href = 'index_prompt.html?form=subject';
  }
}

/**
 * Configura os botões de confirmação do modal.
 */
function setupModalConfirmationButtons() {

  document.getElementById('modalYes').addEventListener('click', () => {
    localStorage.removeItem('exampleData');
    window.location.href = 'index_prompt.html?form=prompt';
  });

  document.getElementById('modalNo').addEventListener('click', () => {
    localStorage.removeItem('formData');
    window.location.href = 'index_prompt.html?form=subject';
  });
}

/**
 * Carrega os dados e exibe o formulário apropriado com base nos parâmetros da URL.
 */
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const formType = params.get('form');

  if (formType === 'prompt') {
    show_form_prompt();
  } else if (formType === 'subject') {
    show_form_subject();
  }
});

/**
 * Atualiza o efeito de digitação do texto no elemento especificado.
 * @param {string} text - O texto a ser exibido com o efeito de digitação.
 */
let typed = null;

function updateTypingEffect(text) {
  
  const promptElement = document.querySelector(".prompt-generator");
  const copy = document.querySelector(".copy");
  const copyButton = document.querySelector('.copy-button');

  if (copyButton)
    copyButton.disabled = true;

  if (copy)
    copy.style.opacity = '0';

  if (typed) {
    typed.destroy();
  }

  if (promptElement) {
    typed = new Typed(promptElement, {
      strings: [text],
      typeSpeed: 5,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 0,
      loop: false,
      showCursor: true,
      onComplete: () => {
        if (copyButton)
          copyButton.disabled = false;
      
        if (copy)
          copy.style.opacity = '1';
      }
    });
  } else {
    if (copyButton)
      copyButton.disabled = false;
  
    if (copy)
      copy.style.opacity = '1';
  }
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
 * Exemplos disponiveis
 * @param {string} example 
 */
function loadExampleData(example) {

  let exampleData;

  show_form_prompt();

  exampleData = getExampleDataByType(example);

  localStorage.setItem('exampleData', JSON.stringify(exampleData));

  loadFormData();
}

/**
 * Obtém os dados de exemplo com base no tipo fornecido.
 * @param {string} type - O tipo de exemplo.
 * @returns {Object} Dados do exemplo.
 */
function getExampleDataByType(type) {
  switch (type) {
    case 'web-development':
      return {
        assunto: 'Desenvolvimento Web',
        nivelConhecimento: '1',
        nivelEscolaridade: '2',
        objetivoEstudo: '1',
        horasDisponiveis: '2',
        tempoDominio: '1',
        personaIA: '1',
        personagemHistorico: '',
        tomConversa: '1',
        formatoDaResposta: '2',
        pontosPrincipais: '1',
        preferenciaFonte: '3',
        showChips: true,
        palavrasChave: ["HTML", "CSS", "JavaScript"]
      };
    case 'ai':
      return {
        assunto: 'Inteligência Artificial',
        nivelConhecimento: '2',
        nivelEscolaridade: '3',
        objetivoEstudo: '2',
        horasDisponiveis: '3',
        tempoDominio: '2',
        personaIA: '3',
        personagemHistorico: 'Alan Turing',
        tomConversa: '2',
        formatoDaResposta: '1',
        pontosPrincipais: '2',
        preferenciaFonte: '2',
        showChips: true,
        palavrasChave: ['Machine Learning', 'Deep Learning', 'Redes Neurais']
      };
    case 'nutrition':
      return {
        assunto: 'Benefícios da Água',
        nivelConhecimento: '1',
        nivelEscolaridade: '2',
        objetivoEstudo: '1',
        horasDisponiveis: '2',
        tempoDominio: '1',
        personaIA: '2',
        personagemHistorico: '',
        tomConversa: '1',
        formatoDaResposta: '2',
        pontosPrincipais: '1',
        preferenciaFonte: '3',
        showChips: true,
        palavrasChave: ["hidratação", "saúde", "energia"]
      };
    default:
      return {};
  }
}

/**
 * Obtém os dados com base na fonte especificada.
 *
 * Esta função determina a origem dos dados com base na variável `usingExample`. 
 * Se `usingExample` estiver definido como verdadeiro, a função irá buscar os dados 
 * a partir da função `getExampleData()`. Caso contrário, a função retornará os dados 
 * obtidos pela função `getFormData()`.
 *
 * @returns {Object} Os dados provenientes da função correspondente à fonte 
 * escolhida (`getExampleData` ou `getFormData`).
 */
function getData() {
  return (usingExample) ? getExampleData() : getFormData();
}

/**
 * Obtém os dados do localStorage.
 * @returns {Object} Dados do formulário.
 */
function getFormData() {
  return JSON.parse(localStorage.getItem('formData')) || {};
}

/**
 * Obtém os dados de exemplo do localStorage.
 * @returns {Object} Dados do exemplo.
 */
function getExampleData() {
  return JSON.parse(localStorage.getItem('exampleData')) || {};
}

/**
 * Salva os dados do formulário no localStorage.
 * @param {Object} data - Dados a serem salvos.
 */
function saveFormData(data) {
  localStorage.setItem('formData', JSON.stringify(data));
}

/**
 * Salva os dados de exemplo.
 * @param {Object} data - Dados a serem salvos.
 */
function saveExampleData(data) {
  localStorage.setItem('exampleData', JSON.stringify(data));
}

/**
 * Define os dados no localStorage com base na condição de exemplo.
 * @param {Object} data - Dados a serem salvos.
 */
function setData(data) {
  if (usingExample) {
    saveExampleData(data);
  } else {
    saveFormData(data);
  }
}

/**
 * Salva os dados do formulário no localStorage.
 */
function saveDataToLocalStorage() {

  const values = gatherFormValues();
  const savedData = getFormData();

  Object.keys(values).forEach(key => {
    if (key === "assunto" && values[key] === '') {
      if (savedData.hasOwnProperty(key))
        return;
    }
    savedData[key] = values[key];
  });

  setData(savedData);
}

/**
 * Coleta os valores dos campos do formulário.
 * @returns {Object} Valores coletados do formulário.
 */
function gatherFormValues() {
  return {
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
}

/**
 * Gera o texto do prompt com base nos dados salvos e atualiza o efeito de digitação.
 */
async function generatePromptData(savedData) {

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
    showChips: savedData.showChips || false,
    palavrasChave: savedData.palavrasChave || ''
  };

  const text = await generatePromptText(values);

  await updateTypingEffect(text.trim());

  update_progress(savedData);
}

/**
 * Define o valor de um elemento <select>.
 * @param {string} selectId - O ID do elemento <select>.
 * @param {string} savedValue - O valor a ser definido.
 */
function setSelectValue(selectId, savedValue) {
  const selectElement = document.getElementById(selectId);
  if (selectElement) {
    selectElement.value = savedValue || selectElement.querySelector('option').value;
    M.FormSelect.init(selectElement);
  }
}

/**
 * Define o valor de um <Radio>.
 * @param {string} name - O nome do grupo de rádio.
 * @param {string} value - O valor do rádio a ser selecionado.
 */
function setRadioValue(name, value) {
  const radio = document.querySelector(`input[name="${name}"][value="${value}"]`);
  if (radio) {
    radio.checked = true;
    radio.dispatchEvent(new Event('change'));
  }
}

/*
  Carrega os dados do localStorage e atualiza os campos do formulário
*/
function loadFormData() {

  const dataToLoad = getData();

  setSelectValue('nivel-conhecimento', dataToLoad.nivelConhecimento);
  setSelectValue('nivel-escolaridade', dataToLoad.nivelEscolaridade);
  setSelectValue('tom-resposta', dataToLoad.tomConversa);
  setSelectValue('formato-resposta', dataToLoad.formatoDaResposta);
  setSelectValue('conteudo-resposta', dataToLoad.pontosPrincipais);
  setSelectValue('fonte-resposta', dataToLoad.preferenciaFonte);

  const assunto = document.getElementById('subject');
  if (assunto && typeof dataToLoad.assunto === 'string') {
    assunto.value = dataToLoad.assunto.trim() || '';
    assunto.focus();
  }

  const historical_character = document.getElementById('historical-character');
  if (historical_character && typeof dataToLoad.personagemHistorico === 'string') {
    historical_character.value = dataToLoad.personagemHistorico.trim() || '';

    const event = new Event('change', { bubbles: true });
    historical_character.dispatchEvent(event);
  }

  const slice = document.getElementById('slice');
  if (slice && !isNaN(dataToLoad.horasDisponiveis)) {
    slice.value = dataToLoad.horasDisponiveis || '0';
  }

  if (dataToLoad.objetivoEstudo && typeof dataToLoad.objetivoEstudo === 'string') {
    setRadioValue('objetivo', dataToLoad.objetivoEstudo);
  }

  if (dataToLoad.tempoDominio && typeof dataToLoad.tempoDominio === 'string') {
    setRadioValue('tempo', dataToLoad.tempoDominio);
  }

  if (dataToLoad.personaIA && typeof dataToLoad.personaIA === 'string') {
    setRadioValue('persona', dataToLoad.personaIA);
  }

  const showChipsCheckbox = document.getElementById('show-chips');
  if (dataToLoad.showChips && showChipsCheckbox) {
    showChipsCheckbox.checked = true;
    showChipsCheckbox.dispatchEvent(new Event('change'));
  }

  const elems = document.querySelectorAll('.chips-placeholder');
  const chipsData = (dataToLoad.palavrasChave || []).map(word => ({ tag: word }));

  if (elems && chipsData) {
    instance = M.Chips.init(elems, {
      placeholder: 'Digite palavras-chave e pressione Enter',
      secondaryPlaceholder: '+Palavra',
      data: chipsData
    });
  }

  generatePromptData(dataToLoad);
}

/**
 * Adiciona listeners de eventos aos elementos do formulário.
 * - Adiciona eventos de mudança para elementos <select>, <input>, <radio>, <checkbox>, <range>.
 * - Adiciona um evento de click para o botão de continuar e para o botão de copiar.
 * - Adiciona eventos de click e keypress para o fechamento do modal e interação com o formulário.
 */
function addEventListeners() {

  document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', () => {
      saveDataToLocalStorage();
      generatePromptData(getData());
    });
  });

  document.querySelectorAll('input[type="text"]').forEach(text => {
    text.addEventListener('input', () => {
      saveDataToLocalStorage();
      generatePromptData(getData());
    });
  });

  const input = document.querySelector('.input');
  if (input) {
    input.addEventListener('keydown', (event) => {

      if (event.key === 'Enter') {
        saveDataToLocalStorage();
        generatePromptData(getData());
      }
    });
  }

  document.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('close')) {

      event.target.parentElement.remove();
      saveDataToLocalStorage();
      generatePromptData(getData());
    }
  });

  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
      saveDataToLocalStorage();
      generatePromptData(getData());
    });
  });

  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      saveDataToLocalStorage();
      generatePromptData(getData());
    });
  });

  document.querySelectorAll('input[type="range"]').forEach(range => {
    range.addEventListener('input', () => {
      saveDataToLocalStorage();
      generatePromptData(getData());
    });
  });

  const subject = document.querySelector('#subject');
  const continueButton = document.querySelector('#continue');

  if (continueButton) {
    continueButton.addEventListener('click', () => {
      continueLogic();
    });
  }

  if (subject) {
    subject.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        continueButton.click();
      }
    });
  }

  const copy = document.querySelector('.copy');

  if (copy) {
    copy.addEventListener('click', () => {
      copyLogic(window_modal, getData());
    });
  }

  const copyButton = document.querySelector('.copy-button');
  if (copyButton) {
    copyButton.addEventListener('click', () => {
      copyLogic(window_modal, getData());
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
 * Lida com a lógica de continuação do formulário.
 * - Valida o campo "subject" e mostra o próximo formulário se o campo não estiver vazio.
 * - Adiciona classes de erro e exibe mensagens de erro se o campo estiver vazio.
 */
function continueLogic() {

  const subjectField = document.getElementById('subject');
  const subjectLabel = document.querySelector('.subject');
  const err = document.querySelector('.hint');
  const subjectValue = subjectField ? subjectField.value.trim() : '';

  subjectField.classList.remove('err');
  subjectLabel.classList.remove('err-label');

  if (subjectValue !== '') {
    saveDataToLocalStorage();
    show_form_prompt();

  } else {
    subjectField.focus();
    subjectField.classList.add('err');
    subjectLabel.classList.add('err-label');
    err.style.display = 'block';
  }
}

/**
 * Copia o texto do prompt para a área de transferência e exibe o modal com a porcentagem de respostas preenchidas.
 * @param {HTMLElement} window_modal - O modal que será exibido.
 * @param {Object} savedData - Dados salvos para calcular a porcentagem.
 */
function copyLogic(window_modal, savedData) {
  const promptText = document.querySelector(".prompt-generator").innerText;
  navigator.clipboard.writeText(promptText).then(() => {
    window_modal.style.display = STYLES.display_block;
  }).catch(err => {
    alert("Falha ao copiar texto: " + err);
  });
}

/**
 * Calcula a porcentagem de respostas preenchidas em relação ao total de perguntas.
 * @param {Object} savedData - Dados salvos para calcular a porcentagem.
 * @returns {number} - Porcentagem de respostas preenchidas.
 */
function calculate_percentage(savedData) {

  var number_of_questions = Object.keys(savedData).length - 3;
  var number_of_answers = 0;

  console.log(savedData);
  for (var field in savedData) {

    if (savedData[field] != STRINGS.empty && savedData[field] != '0' && field != "showChips" && field != "palavrasChave" && field != "personagemHistorico") {
      number_of_answers++;
    }
  }

  if (savedData.personaIA == '3')
    number_of_questions++;

  if (savedData.showChips == true)
    number_of_questions++;

  if (savedData.personaIA == "3" && savedData.personagemHistorico != STRINGS.empty)
    number_of_answers++;

  if (savedData.showChips == true && savedData.palavrasChave.length != 0)
    number_of_answers++;

  console.log(number_of_questions + "  " + number_of_answers);

  var percentage = (number_of_answers / number_of_questions) * 100;

  return percentage;
}

/**
 * Atualiza a barra de progresso com base na porcentagem calculada.
 * @param {Object} savedData - Dados salvos para calcular a porcentagem.
 */
function update_progress(savedData) {

  var progress = document.querySelector(SELECTORS.progress);
  var percentage = calculate_percentage(savedData);
  if (progress)
    progress.style.width = percentage + STRINGS.percent;

  const modal_update = document.getElementById(SELECTORS.percentage);
  if (modal_update)
    modal_update.textContent = `${percentage.toFixed(0)}%`;
}

/**
 * Exibe o formulário de assunto e oculta o formulário principal.
 */
function show_form_subject() {
  const container_subject = document.querySelector('.container-subject');
  const container_form = document.querySelector('.container-form');
  const assunto = document.getElementById('subject');

  container_subject.style.display = 'block';
  container_form.style.display = 'none';

  if (assunto) {
    assunto.focus();
  }
}

/**
 * Exibe o formulário principal e oculta o formulário de assunto.
 */
function show_form_prompt() {
  const container_subject = document.querySelector('.container-subject');
  const container_form = document.querySelector('.container-form');

  container_subject.style.display = 'none';
  container_form.style.display = 'flex';
}