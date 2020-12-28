export class Utils {
  /**
   * Gera mensagem dependendo da hora
   * @returns {string}
   */
  static salutation () {
    const hour = new Date().getHours()
    let salutation = 'uma boa noite'

    if (hour >= 12 && hour < 18) {
      salutation = 'uma boa tarde'
    }
    if (hour >= 6 && hour < 12) {
      salutation = 'um bom dia'
    }
    return salutation
  }
}
