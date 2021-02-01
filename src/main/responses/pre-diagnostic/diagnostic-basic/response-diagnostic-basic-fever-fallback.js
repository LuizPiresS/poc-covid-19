export const responseDiagnosticFeverFallbackInitial = [
  {
    text: 'Não entendi.',

    title: 'Para continuarmos, você precisa me indicar se teve ou não, febre maior que 37,8ºC nos últimos 7 dias. 🌡️',

    suggestions: ['Tive febre', 'Não tive febre']

  }
]

export const responseDiagnosticFeverFallbackMid = [
  {
    text: 'Desculpe, ainda não consegui entender.',

    title: 'Você teve febre maior que 37,8ºC nos últimos 7 dias? 🌡️',

    suggestions: ['Sim', 'Não']

  }
]

export const responseDiagnosticFeverFallbackFinal = [
  {
    text: 'Realmente, não consegui entender. \n' +
      'Vamos parar por aqui. '
  }
]
