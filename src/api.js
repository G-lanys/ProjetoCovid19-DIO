/** API para retornar os dados da covid pelo mundo. */
const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
}
/** função para passar qual país e retornar somente os dados daquele país.*/

function getCountry(country) {
  return fetch(`${path}/${country}`, headers)
    .then((response) => response.json())
}

export default {
  getCountry
}