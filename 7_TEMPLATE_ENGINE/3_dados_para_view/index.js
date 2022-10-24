const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    
    // simula dados do bd
    const user = {
        name: "Matheus",
        surname: "Battisti",
        age: "30"
    }        

    const palavra = "Teste"

    // como a var tem o msm nome poderia utilizar só "user"
    res.render('home', {user: user, palavra} )
})

app.listen(3000, () => {
    console.log( 'App funcionando!' )
})


