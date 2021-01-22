const fs = require('fs')

const cidades = require('../../../data/cities.json')
let file
cidades.cities.forEach(data => {
  file = `"${data.name}","${data.name}"\n`
  fs.appendFile('../../../data/cities.csv', file, err => {
    if (err) throw err
    console.log('Saved')
  })
})
