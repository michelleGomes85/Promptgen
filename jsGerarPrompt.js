
/**
 * Seleciona todos os links do aside, e adiciona um evento, para que quando clicado
 * mostre o a parte correspondendo do formulário
 */
let linksMenu = document.querySelectorAll('.agrupar-link');

/** 
 * Releciona todas as partes do formulário. Cada parte representa 
 * uma sessão.
 */
let partes = document.querySelectorAll('.parte');

/**
 * Seleciona todos os spans, com os números correspondentes 
 * as sessões do aside
 */
let numeros = document.querySelectorAll('.numero');

/** 
 * Controla qual parte do formulário está sendo mostrada atualmente
*/
let indexParteAtual = 0;

/**
 * Adiciona um event listener a cada link do menu, para mostre a parte 
 * correspondente quando 'click'.
 */
linksMenu.forEach((link, index) => {
  link.addEventListener('click', () => {
    indexParteAtual = index; 
    mostrarParte(index);
  });
});

/**
 * Mostra a parte do formulário correspondente ao índice fornecido,
 * atualizar qual vai ser o número ativo no momento
 * 
 * @param {number} index - O índice da parte a ser mostrada.
 */
function mostrarParte(index) {

  partes.forEach((parte, i) => {
    (i === index) ? parte.classList.remove('hidden') : parte.classList.add('hidden');
  });

  numeros.forEach((numero, i) => {
    
    if (i === index) {
      numero.classList.add('span-ativo');
      numero.classList.remove('span-inativo');
    } else {
      numero.classList.remove('span-ativo');
      numero.classList.add('span-inativo');
    }

  });
}

/**
 * Avança para a próxima parte do formulário.
 */
function proximoParte() {
  if (indexParteAtual < partes.length - 1) {
    indexParteAtual++;
    mostrarParte(indexParteAtual);
  }
}

/**
 * Retrocede para a parte anterior do formulário.
 */
function anteriorParte() {
  if (indexParteAtual > 0) {
    indexParteAtual--;
    mostrarParte(indexParteAtual);
  }
}

/**
 * Alterna a visibilidade da barra lateral do formulário
 */
function toggleSidebar() {

  var sidebar = document.getElementById('sidebar');
  var aside = document.querySelector('aside');
  var main = document.querySelector('main');

  sidebar.classList.toggle('active');
  sidebar.classList.toggle('inactive');

  if (sidebar.classList.contains('inactive')) {
    aside.style.width = '5%';
    main.style.width = '95%';
  } 
  else 
  {
    if (window.innerWidth < 1300) {
      main.style.width = '70%';
      aside.style.width = '30%';
    }
    else {
      aside.style.width = '20%';
      main.style.width = '80%';
    }
  }

  changeText();
}

/**
 * Altera o texto do botão de toggle da barra lateral. Para que tenha um simbolo
 * diferente, dependendo se está ativo ou inativo
 */
function changeText() {

  var text = document.querySelector('.material-icons');
  var sidebar = document.getElementById('sidebar');
  var newText = sidebar.classList.contains('inactive') ? 'arrow_forward_ios' : 'arrow_back_ios';
  text.textContent = newText;
}

/**
 * Mostra a caixa de texto, onde está sendo gerado o prompt
 */
function aparecerPrompt() {

  var aparecer = document.querySelector('.aparecer-prompt');
  var desaparecer = document.querySelector('.desaparecer-prompt');

  var prompt = document.querySelector('.textArea');
  var coluna1 = document.querySelector('.main-column1');
  var coluna2 = document.querySelector('.main-column2');

  if (window.innerWidth < 1300) {
    coluna1.style.display = 'none';
    coluna2.style.width = '100%';
  } else {
    coluna2.style.width = '40%';
    coluna1.style.width = '60%';
  }

  prompt.style.display = 'block';
  aparecer.style.display = 'none';
  desaparecer.style.display = 'inline';
}

/**
 * Esconde a caixa de texto onde está gerado o prompt
 */
function desaparecerPrompt() {

  var prompt = document.querySelector('.textArea');
  var aparecer = document.querySelector('.aparecer-prompt');
  var desaparecer = document.querySelector('.desaparecer-prompt');

  var coluna1 = document.querySelector('.main-column1');
  var coluna2 = document.querySelector('.main-column2');

  if (window.innerHeight < 850) {
    coluna1.style.width = '100%';
    coluna2.style.width = '1%';
    coluna1.style.display = 'block';
  } 
  else if (window.innerWidth < 1300) {
    coluna1.style.display = 'block';
    coluna1.style.width = '95%';
    coluna2.style.width = '1%';
  } 
  else {
    coluna1.style.display = 'block';
    coluna1.style.width = '95%';
    coluna2.style.width = '5%';
  }

  prompt.style.display = 'none';
  aparecer.style.display = 'inline';
  desaparecer.style.display = 'none';
}

/** 
 *  Objeto JSON que representa as respostas do usuário 
*/
var Respostas = {
  texto1: {
    Assunto: "",
    Conhecimento: "",
    PalavrasChave: "",
    Palavras: "",
    Escolaridade: "",
    Objetivo: "",
    TempoDisponivel: "",
    TempoAprender: "",
    Persona: "",
    TomResposta: "",
    FormatoResposta: "",
    tipoConteudo: ""
  },
};

/**
 * Exibe a seção de palavras-chave no formulário.
 */
function mostrarPalavrasChave() {
  document.getElementById("resposta-sim").classList.remove("hidden");
}

/**
 * Oculta a seção de palavras-chave no formulário.
 */
function ocultarPalavrasChave() {
  document.getElementById("resposta-sim").classList.add("hidden");
}

/**
 * Atualiza o objeto Respostas com os valores do formulário.
 */
function atualizarJSON() {
  Respostas.texto1.Assunto = document.getElementById("inputAssunto").value;
  Respostas.texto1.Conhecimento = obterRadioValue("contexto");
  Respostas.texto1.PalavrasChave = obterRadioValue("detalhes");
  Respostas.texto1.Palavras = document.getElementById("palavras_chave").value;
  Respostas.texto1.Escolaridade = obterRadioValue("nivel_escolaridade");
  Respostas.texto1.Objetivo = obterRadioValue("objetivo");
  Respostas.texto1.TempoDisponivel = obterRadioValue("tempo_disponivel");
  Respostas.texto1.TempoAprender = obterRadioValue("tempo_aprender");
  Respostas.texto1.Persona = obterRadioValue("persona");
  Respostas.texto1.TomResposta = obterRadioValue("tom_conversa");
  Respostas.texto1.FormatoResposta = obterRadioValue("formato");
  Respostas.texto1.tipoConteudo = obterRadioValue("teorico_pratico");
}

/**
 * Obtém o valor selecionado de um grupo de botões de rádio.
 * 
 * @param {string} name - O nome do grupo de botões de rádio.
 * @returns {string} - O valor selecionado.
 */
function obterRadioValue(name) {
  
  var radios = document.getElementsByName(name);
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked)
      return radios[i].nextElementSibling.textContent.trim();
  }

  return "";
}

/**
 * Atualiza a barra de progresso com a porcentagem de respostas preenchidas.
 */
function atualizarProgresso() {
  var progresso = document.querySelector(".progresso");
  var porcentagem = calcularPorcentagem();

  progresso.style.width = porcentagem + "%";
}

/**
 * Seleciona todos os campos do usuário
 */
var camposDeEntrada = document.querySelectorAll('.form-control');

/** 
 * Adiciona um listener para sempre que o usuário fizer alguma mudança nos campos
 * do formulário, atualizar o JSON, e o progresso do mesmo 
*/
camposDeEntrada.forEach(function (input) {
  input.addEventListener('change', function () {
    atualizarJSON();
    atualizarProgresso();
  });
});

/**
 * Calcula a porcentagem de respostas preenchidas pelo usuário.
 * 
 * @returns {number} - A porcentagem de respostas preenchidas.
 */
function calcularPorcentagem() {

  var quantidadePerguntas = Object.keys(Respostas.texto1).length;
  var quantidadeResposta = 0;

  for (var campo in Respostas.texto1) {
    if (Respostas.texto1[campo].trim() !== "")
        quantidadeResposta++;
  }

  if (Respostas.texto1.PalavrasChave.trim() === "Não") {
    quantidadePerguntas--;
  }

  var porcentagem = (quantidadeResposta / quantidadePerguntas) * 100;

  return porcentagem;
}

/**
 * Copia o texto gerado para a área de transferência.
 */
function copyText() {

  var textToCopy = document.querySelector('.prompt-gerar').innerText;
  var copy = document.querySelector('.copy-simbolo');

  // Utiliza a API Clipboard para copiar o texto para a área de transferência
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      copy.textContent = 'done';

      var porcentagemRespostas = calcularPorcentagem();

      document.getElementById('porcentagem').textContent = `${porcentagemRespostas.toFixed(2)}%`;

      modal.style.display = "block";
      
      setTimeout(() => {
        copy.textContent = 'content_copy';
      }, 200);
    })
    .catch(err => {
      console.error('Erro ao copiar texto: ', err);
      copy.textContent = 'content_copy';
    });
}

// Pega o modal
var modal = document.getElementById("myModal");

// Pega o botão que abre o modal
var btn = document.getElementById("openModalBtn");

// Pega o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}