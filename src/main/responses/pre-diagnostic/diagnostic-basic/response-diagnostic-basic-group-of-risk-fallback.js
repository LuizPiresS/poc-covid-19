export const responseDiagnosticBasicGroupOfRiskNoInitial = [
  {
    text: 'Não entendi. Para continuarmos, você precisa me indicar se pertence a algum desses grupos citados:',

    title: '👴 Pessoas com mais de 60 anos; \n' +
      '🤰 Gestantes;\n' +
      '🤒 Pessoas com doenças crônicas (como: Diabetes, doenças cardiovasculares ou pulmonares);\n' +
      '💊 Pessoas em tratamento contra o câncer.',

    suggestions: ['Pertenço', 'Não pertenço']
  }
]

export const responseDiagnosticBasicGroupOfRiskNoMid = [
  {
    text: 'Desculpe, ainda não consegui entender. 😓 ',

    title: 'Você pertence a algum dos grupos citados?',

    suggestions: ['Sim', 'Não']
  }
]

export const responseDiagnosticBasicGroupOfRiskNoFinal = [
  {
    text: 'Realmente, não consegui entender. \n' +
      'Vamos parar por aqui. '
  }
]
