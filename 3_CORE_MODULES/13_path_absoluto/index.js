const fs = require('fs')

const path = require("path")
const customPath = "/relatorios/matheus/relatorio1.pdf"

// path absoluto
console.log(path.resolve('teste.txt'))

// formar path 
const midFolder = 'relatorios'
const fileName = 'matheus.txt'

const finalPath = path.join("/", 'arquivos', midFolder, fileName)

console.log(finalPath)

