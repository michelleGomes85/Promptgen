
/**
 * Mostra a caixa de texto, onde está sendo gerado o prompt
 */
function show_prompt() {

    var prompt = document.querySelector(SELECTORS.prompt);
    var appear = document.querySelector(SELECTORS.appear);
    var disappear = document.querySelector(SELECTORS.disappear);

    var column1 = document.querySelector(SELECTORS.column1);
    var column2 = document.querySelector(SELECTORS.column2);

    if (window.innerWidth < 1300) {
        column1.style.display = STYLES.display_none;
        column2.style.width = STYLES.width100;
    } else {
        column1.style.width = STYLES.width60;
        column2.style.width = STYLES.width40;
    }

    prompt.style.display = STYLES.display_block;
    appear.style.display = STYLES.display_none;
    disappear.style.display = STYLES.display_inline;
}

/**
 * Esconde a caixa de texto onde está gerado o prompt
 */
function hide_prompt() {

    var prompt = document.querySelector(SELECTORS.prompt);
    var appear = document.querySelector(SELECTORS.appear);
    var disappear = document.querySelector(SELECTORS.disappear);

    var column1 = document.querySelector(SELECTORS.column1);
    var column2 = document.querySelector(SELECTORS.column2);

    if (window.innerHeight < 850) {
        column1.style.width = STYLES.width100;
        column2.style.width = STYLES.width1;
        column1.style.display = STYLES.display_block;
    }
    else if (window.innerWidth < 1300) {
        column1.style.display = STYLES.display_block;
        column1.style.width = STYLES.width95;
        column2.style.width = STYLES.width1;
    }
    else {
        column1.style.display = STYLES.display_block;
        column1.style.width = STYLES.width95;
        column2.style.width = STYLES.width5;
    }

    prompt.style.display = STYLES.display_none;
    appear.style.display = STYLES.display_inline;
    disappear.style.display = STYLES.display_none;
}

/** 
 *  Objeto JSON que representa as respostas do usuário 
*/
const data = {
    subject: STRINGS.empty,
    knowledge_level: STRINGS.empty,
    education_level: STRINGS.empty,
    goal: STRINGS.empty,
    available_time: STRINGS.empty,
    time_to_learn: STRINGS.empty,
    persona: STRINGS.especialista,
    conversation_tone: STRINGS.empty,
    format: STRINGS.empty,
    theoretical_practical: STRINGS.empty,
    key_words: STRINGS.empty,
    words: STRINGS.empty,
};

/**
 * Atualiza o objeto Respostas com os valores do formulário.
 */
function update_JSON() {

    data.subject = document.getElementById(SELECTORS.input_subject).value;
    data.knowledge_level = get_radio_value(SELECTORS.knowledge_level);
    data.education_level = get_radio_value(SELECTORS.education_level);
    data.goal = get_radio_value(SELECTORS.goal);
    data.available_time = get_radio_value(SELECTORS.available_time);
    data.time_to_learn = get_radio_value(SELECTORS.time_to_learn);

    const persona = get_radio_value(SELECTORS.persona);
    data.persona = (persona == STRINGS.empty) ? STRINGS.specialist : persona;

    data.conversation_tone = get_radio_value(SELECTORS.conversation_tone);
    data.format = get_radio_value(SELECTORS.format);
    data.theoretical_practical = get_radio_value(SELECTORS.theoretical_practical);

    data.key_words = get_radio_value(SELECTORS.details);
    data.words = document.getElementById(SELECTORS.key_words).value;
}

/**
 * Obtém o valor selecionado de um grupo de botões de rádio.
 * 
 * @param {string} name - O nome do grupo de botões de rádio.
 * @returns {string} - O valor selecionado.
 */
function get_radio_value(name) {

    var radios = document.getElementsByName(name);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked)
            return radios[i].nextElementSibling.textContent.trim();
    }

    return STRINGS.empty;
}

/**
 * Seleciona um elemento aleatório de um array.
 * 
 * @param {Array} arr - O array do qual selecionar um elemento.
 * @returns {string} - Um elemento aleatório do array.
 */
function get_random_element(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Gera um prompt baseado nos dados fornecidos pelo usuário.
 * 
 * @param {Object} data - Os dados do usuário.
 * @returns {string} - O prompt gerado.
 */
function generate(data) {

    const phrases = {

        start: [
            `Haja como um(a) ${data.persona} com conhecimento profundo sobre ${data.subject}. E me ensine sobre este assunto.`
        ],
        knowledge_level: {

            "Sem conhecimento prévio": [
                "O usuário não tem conhecimento prévio sobre o assunto. ",
                "O usuário está começando do zero nesse tema. "
            ],

            "Conhecimento básico": [
                "O usuário tem conhecimento básico sobre o assunto. ",
                "O usuário possui uma compreensão inicial do tema. "
            ],

            "Conhecimento intermediário": [
                "O usuário tem conhecimento intermediário sobre o assunto. ",
                "O usuário entende o assunto em um nível moderado. "
            ],

            "Conhecimento avançado": [
                "O usuário tem conhecimento avançado sobre o assunto. ",
                "O usuário possui uma compreensão profunda do tema. "
            ]
        },
        education_level: [
            `O usuário possui nível de escolaridade ${data.education_level.toLowerCase()}. `,
            `O usuário tem um nível educacional de ${data.education_level.toLowerCase()}. `
        ],
        goal: {
            "Ter uma visão geral do assunto": [
                "O usuário deseja ter uma visão geral do assunto. ",
                "O usuário quer entender o tema de forma geral. "
            ],
            "Praticar com exercícios de revisão": [
                "O usuário deseja praticar com exercícios de revisão. ",
                "O usuário quer reforçar seu conhecimento com exercícios práticos. "
            ],
            "Preparar-se para um exame ou prova": [
                "O usuário deseja preparar-se para um exame ou prova. ",
                "O usuário está estudando para um teste ou avaliação. "
            ]
        },
        available_time: {
            "Menos de 1 hora": [
                "O usuário tem menos de 1 hora disponível para estudar por dia. ",
                "O tempo de estudo diário do usuário é inferior a 1 hora. "
            ],
            "De 1 às 3": [
                "O usuário tem de 1 a 3 horas disponíveis para estudar por dia. ",
                "O usuário pode dedicar entre 1 a 3 horas diárias aos estudos. "
            ],
            "Mais de 3 horas": [
                "O usuário tem mais de 3 horas disponíveis para estudar por dia. ",
                "O usuário pode estudar por mais de 3 horas diariamente. "
            ]
        },
        time_to_learn: {
            "Menos de 1 semana": [
                "O usuário precisa de menos de 1 semana para dominar o assunto. ",
                "O usuário espera entender o tema em menos de uma semana. "
            ],
            "De 1 a 3 semanas": [
                "O usuário precisa de 1 a 3 semanas para dominar o assunto. ",
                "O usuário pretende dominar o tema em 1 a 3 semanas. "
            ],
            "Mais de 3 semanas": [
                "O usuário precisa de mais de 3 semanas para dominar o assunto. ",
                "O usuário vai levar mais de 3 semanas para entender completamente o tema. "
            ]
        },
        conversation_tone: {
            "Formal": [
                "O usuário prefere um tom formal. ",
                "O tom de resposta deve ser formal. "
            ],
            "Informal": [
                "O usuário prefere um tom informal. ",
                "O tom de resposta deve ser informal. "
            ],
            "Inspirador": [
                "O usuário prefere um tom inspirador. ",
                "O tom de resposta deve ser inspirador. "
            ]
        },
        format: {
            "Tópicos": [
                "O usuário prefere a resposta em tópicos. ",
                "A resposta deve ser estruturada em tópicos. "
            ],
            "Parágrafos": [
                "O usuário prefere a resposta em parágrafos. ",
                "A resposta deve ser estruturada em parágrafos. "
            ],
            "Exemplos relacionados": [
                "O usuário prefere a resposta com exemplos relacionados. ",
                "A resposta deve conter exemplos relacionados ao tema. "
            ]
        },
        theoretical_practical: {
            "Teórico: focado em conceitos e\n                                    princípios": [
                "O usuário prefere conteúdo teórico. ",
                "A resposta deve focar em conceitos e princípios teóricos. "
            ],

            "Prático: focado em aplicações e exemplos do mundo\n                                    real": [
                "O usuário prefere conteúdo prático. ",
                "A resposta deve focar em aplicações e exemplos práticos do mundo real. "
            ]
        },
        words: [
            `As palavras-chave relacionadas ao assunto são: ${data.words}. `,
            `Palavras importantes para este tema incluem: ${data.words}. `
        ]
    };

    if (data.subject == STRINGS.empty)
        return STRINGS.empty;
    else {

        let prompt = get_random_element(phrases.start);

        if (data.knowledge_level != STRINGS.empty)
            prompt += get_random_element(phrases.knowledge_level[data.knowledge_level]);

        if (data.key_words != STRINGS.empty && data.key_words != STRINGS.no)
            prompt += get_random_element(phrases.words);

        if (data.education_level != STRINGS.empty)
            prompt += get_random_element(phrases.education_level);

        if (data.goal != STRINGS.empty)
            prompt += get_random_element(phrases.goal[data.goal]);

        if (data.available_time != STRINGS.empty)
            prompt += get_random_element(phrases.available_time[data.available_time]);

        if (data.time_to_learn != STRINGS.empty)
            prompt += get_random_element(phrases.time_to_learn[data.time_to_learn]);

        if (data.conversation_tone != STRINGS.empty)
            prompt += get_random_element(phrases.conversation_tone[data.conversation_tone]);

        if (data.format != STRINGS.empty)
            prompt += get_random_element(phrases.format[data.format]);

        if (data.theoretical_practical != STRINGS.empty)
            prompt += get_random_element(phrases.theoretical_practical[data.theoretical_practical]);

        return prompt;
    }
}

var prompt_text;
var index;
const prompt = document.getElementById(SELECTORS.prompt_generator);

/**
 * Atualiza o texto do prompt gerado com base nos dados fornecidos pelo usuário.
 */
function generate_prompt() {

    prompt_text = generate(data);

    if (prompt_text == STRINGS.empty)
        prompt.innerHTML = STRINGS.console_log_prompt;
    else {
        prompt.innerHTML = STRINGS.empty;
        index = 0;
        to_type();
    }
}

function to_type() {
    if (index < prompt_text.length) {
        prompt.innerHTML += prompt_text.charAt(index);
        index++;
        setTimeout(to_type, 10);
    }
}

/**
 * Atualiza a barra de progresso com a porcentagem de respostas preenchidas.
 */
function update_progress() {

    var progress = document.querySelector(SELECTORS.progress);
    var percentage = calculate_percentage();

    progress.style.width = percentage + STRINGS.percent;
}

/**
 * Seleciona todos os campos do usuário
 */
var input_fields = document.querySelectorAll(SELECTORS.form_control);

/** 
 * Adiciona um listener para sempre que o usuário fizer alguma mudança nos campos
 * do formulário, atualizar o JSON, e o progresso do mesmo 
*/
input_fields.forEach(function (input) {

    input.addEventListener('change', function () {
        update_JSON();
        update_progress();
        generate_prompt();
    });
});

/**
 * Calcula a porcentagem de respostas preenchidas pelo usuário.
 * 
 * @returns {number} - A porcentagem de respostas preenchidas.
 */
function calculate_percentage() {

    var number_of_questions = Object.keys(data).length;
    var number_of_answers = 0;

    for (var field in data) {

        if (data[field] != STRINGS.empty)
            number_of_answers++;
    }

    if (data.persona == STRINGS.specialist)
        number_of_answers--;

    if (data.key_words == STRINGS.no)
        number_of_questions--;

    var percentage = (number_of_answers / number_of_questions) * 100;

    return percentage;
}

/**
 * Copia o texto gerado para a área de transferência.
 * 
 * -> Utiliza a API Clipboard para copiar o texto para a área de transferência
 */
function copy_text() {

    const input_subject = document.querySelector('.input_field');
    const err = document.querySelector('.err');
    const err_span = document.querySelector('.err-span');

    if (input_subject.value == STRINGS.empty) {
        err.classList.add(SELECTORS.input_error);
        err_span.style.color = STYLES.red;
        input_subject.focus();
    } else {
        
        input_subject.classList.remove(SELECTORS.input_error);
        err_span.style.color = STYLES.blue;

        var text_to_copy = prompt.innerText;
        var copy = document.querySelector(SELECTORS.copy_symbol);

        navigator.clipboard.writeText(text_to_copy)
            .then(() => {

                copy.textContent = STRINGS.done;

                var percentage_answers = calculate_percentage();

                document.getElementById(SELECTORS.percentage).textContent = `${percentage_answers.toFixed(2)}%`;

                window_modal.style.display = STYLES.display_block;

                setTimeout(() => {
                    copy.textContent = STRINGS.content_copy;
                }, 200);
            })
            .catch(err => {
                console.error(STRINGS.console_log_error_copy, err);
                copy.textContent = STRINGS.content_copy;
            });
    }
}