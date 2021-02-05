export const responseDiagnosticSevereSymptomsFallbackInitial = [
  {
    text: 'Não entendi. 😓',

    title: 'Para concluir o pré-diagnóstico, você precisa me indicar se teve ou não algum desses sintomas citados:\n' +
      '\n' +
      '- Convulsão ou Vômito;\n' +
      '- Dificuldade para respirar;\n' +
      '- Sensação de desmaio;\n' +
      '- Dedos azulados e pálidos.',

    suggestions: ['Sim', 'Não']
  }
]

export const responseDiagnosticSevereSymptomsFallbackMid = [
  {

    title: 'Desculpe, ainda não consegui entender. Você teve algum dos sintomas citados?\n',

    suggestions: ['Sim', 'Não']
  }
]

export const responseDiagnosticSevereSymptomsFallbackFinal = [
  {
    text: 'Realmente, não consegui entender. \n' +
      'Vamos parar por aqui. '
  }
]
