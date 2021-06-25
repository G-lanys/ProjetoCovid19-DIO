/** Arquivo só para sobrescrever a configuração do React. Não é necessario para a criação de uma PWA.*/
/** Aqui ele pega as configurações e utiliza o babel.*/

const { useBabelRc, override } = require('customize-cra')
module.exports = override(useBabelRc())

