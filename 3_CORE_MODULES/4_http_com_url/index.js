const http = require("http");
const url = require("url");
const port = 3000;
 const server = http.createServer((req, res) => {
  // Parse the URL and extract the query parameters
  const urlInfo = require('url').parse(req.url, true);
  const name = urlInfo.query.name;
   res.statusCode = 200;
  res.setHeader('Contenty-Type', 'text/html');
   // Check if the name query parameter is present
  if (!name) {
    // If not present, display a form to enter the name
    res.end('<h1>Preencha o seu nome:</h1><form method="GET"><input type="text" name="name" /><input type="submit" value="Enviar" ></form>');
  } else {
    // If present, display a welcome message with the name
    res.end(`<h1>Seja bem vindo ${name}!</h1>`);
  }
});
 server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});