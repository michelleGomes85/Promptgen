const promptParts = {

    "assunto": "Explique sobre <b>{{assunto}}</b>",

    "nivelConhecimento": {
        "1": [
            ", para alguém <b>começando do zero</b>",
            ", introzindo o <b>básico</b>",
            ", considerando que não possuo <b>nenhum conhecimento prévio</b>"
        ],
        "2": [
            ", possuo um <b>conhecimento básico<b>",
            ", me ajudando a construir <b>uma base</b>",
            ", fornecendo uma <b>visão geral para iniciantes</b>"
        ],
        "3": [
            ", aprofundando-se no assunto pois já possuo um <b>conhecimento intermediário</b>",
            ", considere que já possuo certa <b>familiaridade</b> com o conteúdo",
            ", expandindo o entendimento pois estou em um <b>nível intermediário</b>"
        ],
        "4": [
            ", explorando em profundidade pois já possuo um <b>conhecimento avançado</b>",
            ", fornecendo uma análise detalhada e técnica pois já sou <b>avançado no assunto</b>",
            ", oferencendo uma <b>perspectiva avançada</b>"
        ]
    },

    "nivelEscolaridade": {
        "1": [
            ", adaptando o conteúdo para alguém com <b>ensino médio completo</b>",
            ", descreva considerando que possuo <b>ensino médio completo</b>",
            ", apresente com a premissa que possuo <b>ensino médio completo</b>"
        ],
        "2": [
            ", aborde considerando que possuo <b>ensino médio incompleto</b>",
            ", desenvolva a explicação, levando em consideração que possuo <b>ensino medio incompleto</b>",
            ", ofereça informações considerando uma formação <b>incompleta</b> no <b>ensino medio</b>"
        ],
        "3": [
            ", detalhe com base em uma <b>graduação completa</b>",
            ", desenvolva considerando uma formação de <b>graduação completa</b>",
            ", forneça detalhes sobre para alguém com <b>graduação completa</b>"
        ],
        "4": [
            ", desenvolva o conteúdo para alguém com <b>graduação incompleta</b>",
            ", detalhe considerando uma <b>graduação não concluída</b>",
            ", ofereça uma visão para quem <b>não</b> concluiu a <b>graduação</b>"
        ],
        "5": [
            ", aborde com a profundidade de uma <b>pós-graduação completa</b>",
            ", forneça uma explicação avançada para alguém com <b>pós-graduação completa</b>",
            ", desenvolva o tema considerando uma formação de <b>pós-graduação completa</b>"
        ],
        "6": [
            ", descreva para alguém com <b>pós-graduação incompleta</b>",
            ", apresente considerando que estou no <b>meio da pós graduação</b>",
            ", desenvolva o assunto para alguém com <b>pós-graduação incompleta</b>"
        ]
    },

    "objetivoEstudo": {
        "1": [
            "Tenho como objetivo <b>possuir uma visão geral sobre o tema</b>.",
            "Gostaria de <b>ter uma compreensão ampla sobre o assunto</b>.",
            "Preciso de <b>um resumo sobre a matéria</b>."
        ],
        "2": [
            "Necessito <b>treinar com exercícios para revisão</b>.",
            "Desenvolva <b>questões para praticar meu conhecimento</b>.",
            "Ofereça <b>exercícios relacionados ao assunto para revisão</b>."
        ],
        "3": [
            "Prepare <b>uma explicação visando a realização de um exame ou prova</b>.",
            "Elabore <b>um material de estudo sobre o assunto para preparação para exames</b>.",
            "Desenvolva <b>um guia de revisão focado em exames</b>."
        ]
    },

    "horasDisponiveis": [
        "Possuo <b>{{horasDisponiveis}} {{juncao}}</b> para estudo por dia",
        "Desenvolva um plano de estudo considerando que possuo <b>{{horasDisponiveis}} {{juncao}}</b> por dia",
        "Explique o assunto com base em <b>{{horasDisponiveis}} {{juncao}}</b> de estudo por dia"
    ],

    "tempoDominio": {
        "1": [
            "Preciso de uma abordagem rápida para dominar o conteudo em <b>menos de 1 semana</b>",
            "Ensine para um domínio rápido de <b>menos de 1 semana</b>",
            "Desenvolva um plano intensivo com <b>menos de 1 semana</b> de estudo"
        ],

        "2": [
            "Desenvolva um plano de estudo que possa ser dominado em <b>1 a 3 semanas</b>",
            "Ofereça uma abordagem detalhada para um tempo de estudo de <b>1 a 3 semanas</b>",
            "Explique considerando um período de <b>1 a 3 semanas</b> para domínio"
        ],
        "3": [
            "Forneça um guia abrangente para para dominar em <b>mais de 3 semanas</b>",
            "Explique com um plano de longo prazo, <b>superior a 3 semanas</b>",
            "Desenvolva uma abordagem detalhada considerando <b>mais de 3 semanas</b> para domínio"
        ]
    },

    "personaIA": {
        "1": [
            "Haja como um <b>professor especialista</b> ao explicar o conteudo",
            "Adote o papel de um <b>professor especialista</b> para fornecer detalhes sobre estudo",
            "Desenvolva uma explicação sobre o assunto como se fosse um <b>professor especialista</b>"
        ],
        "2": [
            "Descreva com a perspectiva de alguém que <b>trabalha na área</b>",
            "Ensine como se você fosse um <b>profissional da área</b>",
            "Forneça uma visão prática com base na <b>experiência profissional</b> na área"
        ],
        "3": [
            "Encare assunto com a perspectiva de <b>{{personagemHistorico}}</b>",
            "Ensine o como se fosse <b>{{personagemHistorico}}</b>",
            "Desenvolva um material na perspectiva de <b>{{personagemHistorico}}</b>"
        ]
    },

    "tomConversa": {
        "1": [
            "Adote um tom <b>formal</b>",
            "Desenvolva um tom de conversa <b>formal</b>",
            "Explique usando um tom formal e profissional</b>"
        ],
        "2": [
            "Descreva de maneira <b>informal</b> e amigável",
            "Explique em um tom <b>informal</b> e acessível",
            "Forneça uma visão com um tom de conversa <b>informal</b>"
        ],
        "3": [
            "Utilize um tom inspirador",
            "Explique de forma <b>inspiradora</b> e motivadora",
            "Desenvolva com um tom que <b>inspire</b> e motive"
        ],
        "4": [
            "Adote um tom <b>objetivo</b> e direto",
            "Forneça uma explicação <b>objetiva</b> e clara",
            "Desenvolva com um tom que seja direto e <b>objetivo</b>"
        ]
    },

    "pontosPrincipais": {
        "1": [
            "Foque na <b>história e contexto</b>",
            "Desenvolva uma análise destacando sua história e contexto</b>",
            "Explique com ênfase na <b>história e contexto</b>"
        ],
        "2": [
            "Aborde as <b>vantagens e desvantagens</b> em relação ao conteúdo",
            "Desenvolva uma análise com foco nas <b>vantagens e desvantagens</b>",
            "Forneça uma análise com foco nas <b>vantagens e desvantagens</b>"
        ],
        "3": [
            "Explique os <b>procedimentos e instruções</b>",
            "Desenvolva com detalhes sobre <b>procedimentos e instruções</b>",
            "Apresente focando nos <b>procedimentos e instruções</b> relevantes."
        ],
        "4": [
            "Forneça <b>estudos de caso e exemplos reais</b> sobre o assunto",
            "Descreva o conteudo com base em <b>estudos de caso e exemplos práticos</b>",
            "Explique usando <b>estudos de caso e exemplos reais</b>"
        ]
    },

    "formatoDaResposta": {
        "1": [
            "Apresente em <b>tópicos</b> claros e objetivos",
            "Descreva usando uma estrutura em <b>tópicos</b>",
            "Forneça as informações organizadas em <b>tópicos</b>"
        ],
        "2": [
            "Explique em <b>parágrafos</b> detalhados",
            "Desenvolva com uma explicação em formato de <b>parágrafos</b>",
            "Forneça uma descrição completa em <b>parágrafos</b>"
        ],
        "3": [
            "Utilize <b>exemplos</b> relacionados para ilustrar",
            "Descreva com <b>exemplos</b> práticos e relacionados",
            "Explique usando <b>exemplos</b> que ajudem a entender o conteúdo"
        ],
        "4": [
            "Forneça uma explicação <b>mais visual</b>, como desenhos ou tabelas",
            "Apresente com o resursos <b>visuais e gráficos</b>",
            "Desenvolva com <b>recursos visuais</b> para melhor compreensão"
        ]
    },

    "preferenciaFonte": {
        "1": [
            "Utilize sua <b>própria pesquisa</b> para fornecer informações",
            "Baseie a explicação em <b>pesquisa própria</b>",
            "Desenvolva com base em suas <b>próprias descobertas</b> e pesquisa"
        ],
        "2": [
            "Forneça informações usando <b>fontes acadêmicas e científicas</b>",
            "Descreva com base em fontes <b>acadêmicas e pesquisas científicas</b>",
            "Explique referenciando <b>fontes acadêmicas e científicas</b>"
        ],
        "3": [
            "Utilize <b>relatos de terceiros</b> para explicação",
            "Desenvolva com base em <b>relatos e experiências de terceiros</b>",
            "Forneça informações usando <b>relatos e testemunhos de terceiros</b>"
        ]
    },

    "palavrasChave": [
        "Inclua as palavras-chave fornecidas como {{palavras}} para aprofundar o assunto.",
        "Utilize as palavras-chave {{palavras}} para detalhar a explicação.",
        "Incorpore as palavras-chave {{palavras}} para enriquecer a explicação."
    ]
}

function getPromptPart(key, value) {

    if (!promptParts[key]) return '';

    const part = promptParts[key];

    if (key == 'palavrasChave' || key == 'horasDisponiveis') {
        return part[Math.floor(Math.random() * part.length)].replace(`{{${key}}}`, value);
    }

    if (typeof part === 'object' && part[value]) {

        const options = part[value];
        return options[Math.floor(Math.random() * options.length)].replace(`{{${key}}}`, value);
    } 

    return '';
}

/**
 * Formata palavras-chave, incluindo espaços, em HTML com negrito.
 * @param {Array<string>} words - Array de palavras-chave a serem formatadas.
 * @returns {string} - Palavras formatadas com HTML.
 */
function formatKeywords(words) {
    return words
        .map(word => {
            return word.split(' ').map(part => `<b>${part}</b>`).join(' ');
        })
        .join(', ');
}

function lowercaseFirstLetter(str) {
    if (!str) return str;

    return str.charAt(0).toLowerCase() + str.slice(1);
}

async function generatePromptText(values) {

    let text = promptParts['assunto'].replace(`{{assunto}}`, values.assunto);

    if (values.nivelConhecimento) {
        text += getPromptPart('nivelConhecimento', values.nivelConhecimento);
    }

    if (values.nivelEscolaridade) {
        text += getPromptPart('nivelEscolaridade', values.nivelEscolaridade);
    }

    if (values.objetivoEstudo) {
        if (text.charAt(text.length - 1) != '.')
            text += '. ';
        text += getPromptPart('objetivoEstudo', values.objetivoEstudo);
    }

    text += '<span></span>'

    let tempo = '';

    if (values.horasDisponiveis != 0) {
        let hora = values.horasDisponiveis;

        let horasDisponiveis = getPromptPart('horasDisponiveis', values.horasDisponiveis).replace('{{juncao}}', (hora == 1) ? 'hora disponivel' : 'horas disponiveis');
        horasDisponiveis.replace('{{horasDisponiveis}}', hora);

        tempo += horasDisponiveis;
    }

    if (tempo == '')
        tempo += getPromptPart('tempoDominio', values.tempoDominio);
    else
        tempo += ', ' + lowercaseFirstLetter(getPromptPart('tempoDominio', values.tempoDominio));

    if (tempo != '')
        text += tempo + '.<span></span>';

    let valuePersona = values.personaIA;
    let textRespostaFormato = getPromptPart('personaIA', values.personaIA);

    if (valuePersona == '3')
        textRespostaFormato = textRespostaFormato.replace('{{personagemHistorico}}', values.personagemHistorico);

    if (values.tomConversa != '') {
        if (textRespostaFormato == '') 
            textRespostaFormato = getPromptPart('tomConversa', values.tomConversa);
        else
            textRespostaFormato += ', e ' + lowercaseFirstLetter(getPromptPart('tomConversa', values.tomConversa));
    }

    if (textRespostaFormato != '')
        text += textRespostaFormato + '.<span></span>';

    let abordagem = '';

    abordagem = getPromptPart('pontosPrincipais', values.pontosPrincipais);

    if (values.formatoDaResposta != '') {
        if (abordagem == '') 
            abordagem = getPromptPart('formatoDaResposta', values.formatoDaResposta);
        else 
            abordagem  += ', e ' + lowercaseFirstLetter(getPromptPart('formatoDaResposta', values.formatoDaResposta));
    }

    if (valuePersona.preferenciaFonte != '') {

        if (abordagem == '')
            abordagem += getPromptPart('preferenciaFonte', values.preferenciaFonte);
        else 
            abordagem += '. ' + getPromptPart('preferenciaFonte', values.preferenciaFonte);
    }


    if (abordagem != '')
        text += abordagem + '. ';

    text += '<span></span>'

    if (values.palavrasChave && values.palavrasChave.length > 0) {
        const formattedWords = formatKeywords(values.palavrasChave);
        text += getPromptPart('palavrasChave', values.palavrasChave).replace('{{palavras}}', formattedWords);
    }

    return text;
}