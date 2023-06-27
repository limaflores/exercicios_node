const url = require("url")
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'
const parsedUrl = new url.URL(address)
console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('produtos'))



// const port = 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Contenty-Type', 'text/html')
//     res.end('<h1>Olá, este é o meu primeiro server com HTML<p>Testando atualização</p></>')
// })

// server.listen(port, () => {
//     console.log(`Servidor rodando na porta: ${port}`)
// })