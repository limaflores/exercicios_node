const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static("public"))





const products = [
    {
        id: "1",
        title: "Livro",
        price: 12.99
    },
    {
        id: "2",
        title: "Cadeira",
        price: 200.99
    },
    {
        id: "3",
        title: "Lâmpada",
        price: 2.99
    },
]



app.get('/', (req, res) => {    
    res.render('home', {products} )
})

app.get('/product/:id', (req, res) => {    
    const product = products[parseInt(req.params.id) -1]

    res.render('product', {product} )
})

app.listen(3000, () => {
    console.log( 'App funcionando!' )
})


