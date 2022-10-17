const exp = require('constants')
const express = require('express')
const app = express()
const port = 5000 // variável ambiente

const path = require("path")

app.use(express.json())

// arquivos estáticos
app.use(express.static('public'))


const basePath = path.join(__dirname, 'templates')



app.get('/', (req, res) => {
    // res.send('Olá mundo!!')
    res.sendFile(`${basePath}/index.html`)
})

app.use(function(req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})
