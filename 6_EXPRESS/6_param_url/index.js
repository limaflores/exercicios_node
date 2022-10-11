const express = require('express')
const app = express()
const port = 3000 // variável ambiente

const path = require("path")
const { runInNewContext } = require('vm')

const basePath = path.join(__dirname, 'templates')


app.get('/users/:id', (req, res) => {
    const id = req.params.id
    
    // Leitura da tabela users, resgatar o usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
    // res.send('Olá mundo!!')
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})
