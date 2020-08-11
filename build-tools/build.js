const fs = require('fs-extra')
const path = require('path')
const appRoot = require('app-root-path').path
const characters = require('../src/characters')

const distPath = path.join(appRoot, 'dist')

fs.mkdirpSync(distPath)

fs.writeJSONSync(
  path.join(distPath, 'characters.json'),
  characters)

fs.writeJSONSync(
  path.join(distPath, 'character-names.json'),
  characters.map(({ id, name }) => ({ id, name })))
