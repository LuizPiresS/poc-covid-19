export const responseDiagnosticBasicGroupOfRisk = [
  {
    text: '👴 Pessoas com mais de 60 anos; \n' +
      '🤰 Gestantes;\n' +
      '🤒 Pessoas com doenças crônicas (como: Diabetes, doenças cardiovasculares ou pulmonares);\n' +
      '💊 Pessoas em tratamento contra o câncer.',
    suggestions: ['Pertenço', 'Não pertenço'],
    title: 'Você pertence a algum desses grupos citados a seguir?'

  }
]

export const responseDiagnosticBasicGroupOfRiskYes = [{
  title: 'Ok. Pelo o que você me contou, vejo que você se enquadra no grupo de risco. \n' +
    '\n' +
    'Vamos continuar?',

  suggestions: ['Sim', 'Não']
}]

export const responseDiagnosticBasicGroupOfRiskNo = [{
  title: 'Ok. Pelo o que você me contou, vejo que você não se enquadra no grupo de risco. \n' +
    '\n' +
    'Vamos continuar?',

  suggestions: ['Sim', 'Não']

}]
