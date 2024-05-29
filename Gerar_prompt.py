import random

def gerar_prompt(assunto, nivel_conhecimento, palavras_chave, nivel_escolaridade, objetivo, tempo_disponivel, tempo_aprender, persona, tom_conversa, formato, teorico_pratico):
  """
  Gera um prompt para um modelo de linguagem baseado nas preferências do usuário.

  Args:
    assunto: O assunto que o usuário deseja aprender.
    nivel_conhecimento: O nível de conhecimento do usuário sobre o assunto.
    palavras_chave: Palavras-chave relacionadas ao assunto.
    nivel_escolaridade: O nível de escolaridade do usuário.
    objetivo: O objetivo do usuário com o estudo do assunto.
    tempo_disponivel: O tempo disponível do usuário para estudar por dia.
    tempo_aprender: O tempo que o usuário precisa para dominar o assunto.
    persona: A persona que o usuário gostaria que a IA assumisse.
    tom_conversa: O tom que o usuário gostaria que a IA utilizasse.
    formato: O formato da resposta que o usuário prefere.
    teorico_pratico: Se o usuário prefere conteúdo teórico ou prático.

  Returns:
    Um prompt para um modelo de linguagem.
  """

  # Define o início do prompt
  prompt = f"Você é um(a) {persona} com conhecimento profundo sobre {assunto}. "

  # Adiciona informações sobre o nível de conhecimento do usuário
  if nivel_conhecimento == "Sem conhecimento prévio":
    prompt += "O usuário não tem conhecimento prévio sobre o assunto. "
  elif nivel_conhecimento == "Conhecimento básico":
    prompt += "O usuário tem conhecimento básico sobre o assunto. "
  elif nivel_conhecimento == "Conhecimento intermediário":
    prompt += "O usuário tem conhecimento intermediário sobre o assunto. "
  elif nivel_conhecimento == "Conhecimento avançado":
    prompt += "O usuário tem conhecimento avançado sobre o assunto. "

  # Adiciona palavras-chave, se fornecidas
  if palavras_chave:
    prompt += f"As palavras-chave relacionadas ao assunto são: {palavras_chave}. "

  # Adiciona informações sobre o nível de escolaridade do usuário
  prompt += f"O usuário possui nível de escolaridade {nivel_escolaridade}. "

  # Adiciona informações sobre o objetivo do usuário
  if objetivo == "Ter uma visão geral do assunto":
    prompt += "O usuário deseja ter uma visão geral do assunto. "
  elif objetivo == "Praticar com exercícios de revisão":
    prompt += "O usuário deseja praticar com exercícios de revisão. "
  elif objetivo == "Preparar-se para um exame ou prova":
    prompt += "O usuário deseja preparar-se para um exame ou prova. "

  # Adiciona informações sobre o tempo disponível do usuário
  if tempo_disponivel == "Menos de 1 hora":
    prompt += "O usuário tem menos de 1 hora disponível para estudar por dia. "
  elif tempo_disponivel == "De 1 às 3":
    prompt += "O usuário tem de 1 às 3 horas disponíveis para estudar por dia. "
  elif tempo_disponivel == "Mais de 3 horas":
    prompt += "O usuário tem mais de 3 horas disponíveis para estudar por dia. "

  # Adiciona informações sobre o tempo que o usuário precisa para dominar o assunto
  if tempo_aprender == "Menos de 1 semana":
    prompt += "O usuário precisa de menos de 1 semana para dominar o assunto. "
  elif tempo_aprender == "De 1 a 3 semanas":
    prompt += "O usuário precisa de 1 a 3 semanas para dominar o assunto. "
  elif tempo_aprender == "Mais de 3 semanas":
    prompt += "O usuário precisa de mais de 3 semanas para dominar o assunto. "

  # Adiciona informações sobre o tom da conversa
  if tom_conversa == "Formal":
    prompt += "O usuário prefere um tom formal. "
  elif tom_conversa == "Informal":
    prompt += "O usuário prefere um tom informal. "
  elif tom_conversa == "Inspirador":
    prompt += "O usuário prefere um tom inspirador. "

  # Adiciona informações sobre o formato da resposta
  if formato == "Tópicos":
    prompt += "O usuário prefere a resposta em tópicos. "
  elif formato == "Parágrafos":
    prompt += "O usuário prefere a resposta em parágrafos. "
  elif formato == "Exemplos relacionados":
    prompt += "O usuário prefere a resposta com exemplos relacionados. "

  # Adiciona informações sobre o tipo de conteúdo
  if teorico_pratico == "Teórico: focado em conceitos e princípios":
    prompt += "O usuário prefere conteúdo teórico. "
  elif teorico_pratico == "Prático: focado em aplicações e exemplos do mundo real":
    prompt += "O usuário prefere conteúdo prático. "

  # Define o final do prompt
  prompt += "Crie um conteúdo educacional sobre o assunto, considerando as informações acima."

  return prompt

# Exemplo de uso
assunto = "Python"
nivel_conhecimento = "Sem conhecimento prévio"
palavras_chave = "variáveis, funções, loops"
nivel_escolaridade = "Ensino Médio Completo"
objetivo = "Ter uma visão geral do assunto"
tempo_disponivel = "De 1 às 3"
tempo_aprender = "De 1 a 3 semanas"
persona = "Professor especialista"
tom_conversa = "Formal"
formato = "Tópicos"
teorico_pratico = "Teórico: focado em conceitos e princípios"

prompt = gerar_prompt(assunto, nivel_conhecimento, palavras_chave, nivel_escolaridade, objetivo, tempo_disponivel, tempo_aprender, persona, tom_conversa, formato, teorico_pratico)

print(prompt)
