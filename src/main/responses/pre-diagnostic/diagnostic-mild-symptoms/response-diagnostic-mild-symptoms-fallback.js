export const responseDiagnosticMildSymptomsFallbackInitial = [
  {
    text: 'Não entendi. Para continuarmos, você precisa me indicar se apresentou ou não algum desses sintomas citados:',

    title: '- Coriza ou nariz entupido;\n' +
      '- Cansaço;\n' +
      '- Dor de cabeça;\n' +
      '- Dores no corpo ou abdominais;\n' +
      '- Dor de garganta ;\n' +
      '- Diarréia ou mal estar;\n' +
      '- Tosse;\n' +
      '- E Perda do olfato ou paladar;',

    suggestions: ['Nenhum', '1', '2', '3', 'Mais de três sintomas']
  }
]

export const responseDiagnosticMildSymptomsFallbackMid = [
  {
    text: 'Desculpe, ainda não consegui entender.',

    title: 'Quantos dos sintomas citados você apresenta?',

    suggestions: ['Nenhum', '1', '2', '3', 'Mais de três sintomas']
  }
]

export const responseDiagnosticMildSymptomsFallbackFinal = [
  {
    text: 'Realmente, não consegui entender. \n' +
      'Vamos parar por aqui. '

  }
]
