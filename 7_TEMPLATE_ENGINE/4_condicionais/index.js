const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/', (req, res) => {
    
    // simula dados do bd
    const user = {
        name: "Matheus",
        surname: "Battisti",
        age: "30"
    }        

    const palavra = "Teste"

    const auth = true

    // como a var tem o msm nome poderia utilizar só "user"
    res.render('home', {user: user, palavra, auth} )
})

app.listen(3000, () => {
    console.log( 'App funcionando!' )
})


