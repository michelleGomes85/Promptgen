var typed = null;

  function updateTypingEffect(text) {
    if (typed) {
      typed.destroy();
    }

    typed = new Typed(".prompt-generator", {
      strings: [text],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: false,
      showCursor: false
    });
  }

  function generatePromptData() {
    const nivelConhecimento = document.getElementById('nivel-conhecimento').value;
    const nivelEscolaridade = document.getElementById('nivel-escolaridade').value;
    const objetivoEstudo = document.querySelector('input[name="objetivo"]:checked')?.value;
    const horasDisponiveis = document.getElementById('slice').value;
    const tempoDominio = document.querySelector('input[name="tempo"]:checked')?.value;
    const personaIA = document.querySelector('input[name="persona"]:checked')?.value;
    const personagemHistorico = document.getElementById('historical-character').value;
    const tomConversa = document.getElementById('tom-resposta').value;
    const formatoDaResposta = document.getElementById('formato-resposta').value;
    const pontosPrincipais = document.getElementById('conteudo-resposta').value;
    const preferenciaFonte = document.getElementById('fonte-resposta').value;

    let palavrasChave = [];
    if (document.getElementById('show-chips').checked) {
      const chips = document.querySelectorAll('.chips .chip');
      chips.forEach(chip => {
        const chipText = Array.from(chip.childNodes)
          .filter(node => node.nodeType === Node.TEXT_NODE)
          .map(node => node.textContent.trim())
          .join(' ');
        if (chipText) palavrasChave.push(chipText);
      });
    }

    // Verifica se o valor é diferente de uma string vazia e 0
    const values = {
      nivelConhecimento,
      nivelEscolaridade,
      objetivoEstudo,
      horasDisponiveis,
      tempoDominio,
      personaIA,
      personagemHistorico,
      tomConversa,
      formatoDaResposta,
      pontosPrincipais,
      preferenciaFonte,
      palavrasChave
    };

    let text = '';
    Object.keys(values).forEach(key => {
      const value = values[key];
      if (Array.isArray(value)) {
        value.forEach(item => {
          if (item !== "" && item !== "0" && item !== undefined) {
            text += item + ' ';
          }
        });
      } else if (value !== "" && value !== "0" && value !== undefined) {
        text += value + ' ';
      }
    });

    updateTypingEffect(text.trim());
  }

  function addEventListeners() {

    updateTypingEffect('Gerador de prompt ...');

    document.querySelectorAll('select').forEach(select => {
      select.addEventListener('change', generatePromptData);
    });

    document.querySelectorAll('input[type="text"]').forEach(text => {
      text.addEventListener('input', generatePromptData);
    });
    
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', generatePromptData);
    });

    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', generatePromptData);
    });

    document.querySelectorAll('input[type="range"]').forEach(range => {
      range.addEventListener('input', generatePromptData);
    });

    document.querySelector('.copy-button').addEventListener('click', () => {
      generatePromptData();
    });
  }

  // Inicializa os listeners quando o documento estiver pronto
  document.addEventListener('DOMContentLoaded', addEventListeners);