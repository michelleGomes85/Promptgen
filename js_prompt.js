const promptParts = {

    "assunto": "Explique o básico de {{assunto}}",

    "nivelConhecimento": {
        "1": [
            ",para alguém começando do zero <br>",
            ", introzindo o básico <br>",
            ", considerando que não possuo nenhum conhecimento prévio. <br>"
        ],
        "2": [
            ", possuo um conhecimento básico. <br>",
            ", me ajudando a construir uma base. <br>",
            ", fornecendo uma visão geral para iniciantes. <br>"
        ],
        "3": [
            ", aprofunde-se no assunto pois já possui um conhecimento intermediário. <br>",
            ", eu já possuo certa familiaridade com o conteúdo <br>",
            ", pode expandir o entendimento pois estou em um nível intermediário. <br>"
        ],
        "4": [
            ", explore em profundidade já possuo um conhecimento avançado. <br>",
            ", forneça uma análise detalhada e técnica. <br>",
            ", oferencendo uma perspectiva avançada. <br>."
        ]
    },

    "nivelEscolaridade": {
        "1": [
            "<br> Adapte o conteúdo para alguém com ensino médio completo.",
            "<br> Explique considerando que possuo ensino médio completo.",
            "<br> Apresente com a premissa que possuo ensino médio completo."
        ],
        "2": [
            "<br> Aborde considerando que possuo ensino médio incompleto.",
            "<br> Desenvolva uma explicação sobre, levando em consideração que possuo ensino medio incompleto",
            "<br> Ofereça informações sobre considerando uma formação incompleta no ensino medio"
        ],
        "3": [
            "<br> Explique com base em uma graduação completa.",
            "<br> Apresente considerando uma formação de graduação completa.",
            "<br> Forneça detalhes sobre para alguém com graduação completa."
        ],
        "4": [
            "<br> Desenvolva o conteúdo para alguém com graduação incompleta.",
            "<br> Explique considerando uma graduação não concluída.",
            "<br> Ofereça uma visão para quem está na graduação."
        ],
        "5": [
            "<br> Aborde com a profundidade de uma pós-graduação completa.",
            "<br> Forneça uma explicação avançada para alguém com pós-graduação completa.",
            "<br> Desenvolva o tema considerando uma formação de pós-graduação completa."
        ],
        "6": [
            "<br> Explique para alguém com pós-graduação incompleta.",
            "<br> Apresente considerando que estou no meio da pós graduação.",
            "<br> Desenvolva uma visão detalhada para alguém com pós-graduação incompleta."
        ]
    },

    "objetivoEstudo": {
        "1": [
            "<br> Tenho como objetivo possuir uma visão geral sobre o tema",
            "<br> Gostaria de ter uma compreensão ampla.",
            "<br> Preciso de resumo sobre a matéria."
        ],
        "2": [
            "<br> Necessito treinar com exercícios para revisão.",
            "<br> Desenvolva questões para praticar meu conhecimento.",
            "<br> Ofereça exercícios relacionados ao assunto para revisão."
        ],
        "3": [
            "<br> Prepare uma explicação visando a realização de um exame ou prova.",
            "<br> Elabore um material de estudo sobre o assunto para preparação para exames.",
            "<br> Desenvolva um guia de revisão focado em exames."
        ]
    },

    "horasDisponiveis": [
        "<br> Pssuo {{horasDisponiveis}} hora[s] disponivel para estudo por dia",
        "Desenvolva um plano de estudo considerando que possuo {{horasDisponiveis}} hora[s] disponiveis por dia",
        "Explique o assunto com base em {{horasDisponiveis}} hora[s] de estudo por dia."
    ],

    "tempoDominio": {
        "Menos de 1 semana": [
            "<br> Preciso de uma abordagem rápida para dominar o conteudo em menos de 1 semana.",
            "<br> Explique para um domínio rápido de menos de 1 semana.",
            "<br> Desenvolva um plano intensivo com menos de 1 semana de estudo."
        ],

        "De 1 a 3 semanas": [
            "<br> Desenvolva um plano de estudo que possa ser dominado em 1 a 3 semanas.",
            "<br> Ofereça uma abordagem detalhada para um tempo de estudo de 1 a 3 semanas.",
            "<br> Explique considerando um período de 1 a 3 semanas para domínio."
        ],
        "Mais de 3 semanas": [
            "<br> Forneça um guia abrangente para para dominar em mais de 3 semanas.",
            "<br> Explique com um plano de longo prazo, superior a 3 semanas.",
            "<br> Desenvolva uma abordagem detalhada considerando mais de 3 semanas para domínio."
        ]
    },

    "personaIA": {
        "1": [
            "<br> Haja como um professor especialista ao explicar o conteudo",
            "<br> Adote o papel de um professor especialista para fornecer detalhes sobre estudo.",
            "<br> Desenvolva uma explicação sobre o assunto como se fosse um professor especialista."
        ],
        "2": [
            "<br> Descreva com a perspectiva de alguém que trabalha na área.",
            "<br> Explique como se você fosse um profissional da área.",
            "<br> Forneça uma visão prática com base na experiência profissional."
        ],
        "3": [
            "<br> Encare assunto com a perspectiva de {{personagemHistorico}}.",
            "<br> Explique o como se fosse {{personagemHistorico}}.",
            "<br> Desenvolva um material na perspectiva de {{personagemHistorico}}."
        ]
    },

    "tomConversa": {
        "1": [
            "<br> Adote um tom formal",
            "<br> Desenvolva um tom de conversa formal.",
            "<br> Explique usando um tom formal e profissional."
        ],
        "2": [
            "<br> Descreva de maneira informal e amigável.",
            "<br> Explique em um tom informal e acessível.",
            "<br> Forneça uma visão com um tom de conversa informal."
        ],
        "3": [
            "<br> Utilize um tom inspirador",
            "<br> Explique de forma inspiradora e motivadora.",
            "<br> Desenvolva com um tom que inspire e motive."
        ],
        "4": [
            "<br> Adote um tom objetivo e direto",
            "<br> Forneça uma explicação objetiva e clara",
            "<br> Desenvolva com um tom que seja direto e objetivo."
        ]
    },

    "formatoDaResposta": {
        "1": [
            "<br> Apresente em tópicos claros e objetivos.",
            "<br> Descreva usando uma estrutura em tópicos.",
            "<br> Forneça informações organizadas em tópicos."
        ],
        "2": [
            "<br> Explique em parágrafos detalhados.",
            "<br> Desenvolva com uma explicação em formato de parágrafos.",
            "<br> Forneça uma descrição completa em parágrafos."
        ],
        "3": [
            "<br> Utilize exemplos relacionados para ilustrar",
            "<br> Descreva com exemplos práticos e relacionados.",
            "<br> Explique usando exemplos que ajudem a entender o conteúdo."
        ],
        "4": [
            "<br> Forneça uma explicação mais visual, como desenhos ou tabelas.",
            "<br> Apresente com o uso de visuais e gráficos.",
            "<br> Desenvolva com recursos visuais para melhor compreensão."
        ]
    },

    "pontosPrincipais": {
        "1": [
            "<br> Foque na história e contexto.",
            "<br> Desenvolva destacando sua história e contexto.",
            "<br> Explique com ênfase na história e contexto."
        ],
        "2": [
            "<br> Aborde as vantagens e desvantagens em relação ao conteúdo.",
            "<br> Descreva destacando suas vantagens e desvantagens.",
            "<br> Forneça uma análise com foco nas vantagens e desvantagens."
        ],
        "3": [
            "<br> Explique os procedimentos e instruções.",
            "<br> Desenvolva com detalhes sobre procedimentos e instruções.",
            "<br> Apresente focando nos procedimentos e instruções relevantes."
        ],
        "4": [
            "<br> Forneça estudos de caso e exemplos reais sobre o assunto.",
            "<br> Descreva o conteudo com base em estudos de caso e exemplos práticos.",
            "<br> Explique usando estudos de caso e exemplos reais."
        ]
    },

    "preferenciaFonte": {
        "1": [
            "<br> Utilize sua própria pesquisa para fornecer informações.",
            "<br> Baseie a explicação em pesquisa própria.",
            "<br> Desenvolva com base em suas próprias descobertas e pesquisa."
        ],
        "2": [
            "<br> Forneça informações usando fontes acadêmicas e científicas.",
            "<br> Descreva com base em fontes acadêmicas e pesquisas científicas.",
            "<br> Explique referenciando fontes acadêmicas e científicas."
        ],
        "3": [
            "<br> Utilize relatos de terceiros para explicação.",
            "<br> Desenvolva com base em relatos e experiências de terceiros.",
            "<br> Forneça informações usando relatos e testemunhos de terceiros."
        ]
    },

    "palavrasChave": [
        "<br> Inclua as palavras-chave fornecidas pelo usuário para aprofundar.",
        "<br> Utilize as palavras-chave fornecidas para detalhar a explicação.",
        "<br> Incorpore as palavras-chave fornecidas para enriquecer a explicação."
    ]
}

function getPromptPart(key, value, promptParts) {

    if (!promptParts[key]) return '';

    const part = promptParts[key];

    if (key == 'palavrasChave' || key == 'horasDisponiveis') {
        return part[Math.floor(Math.random() * part.length)].replace(`{{${key}}}`, value);
    }

    console.log(part);
    if (typeof part === 'object' && part[value]) {

        const options = part[value];
        return options[Math.floor(Math.random() * options.length)].replace(`{{${key}}}`, value);

    } else if (typeof part === 'string') {
        return part.replace(`{{${key}}}`, value);
    }

    return '';
}

async function generatePromptText(values, promptParts) {
    
    let text = '';

    Object.keys(values).forEach(key => {
        const value = values[key];
        if (value !== '' && value.length !== 0) {
            console.log(value);
            let part = getPromptPart(key, value, promptParts);

            if (key === 'personaIA') {
                if (value === '3' && values['personagemHistorico']) {
                    part = part.replace('{{personagemHistorico}}', values['personagemHistorico']);
                }
            }

            if (part) {
                text += part;
            }

            if (key === 'palavrasChave') {
                text += '<ul>';
                values.palavrasChave.forEach(item => {
                    text += `<li>${item}</li>`;
                });
                text += '</ul>';
            }
        }
    });

    return text;
}