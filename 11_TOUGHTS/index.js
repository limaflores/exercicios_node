const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()
const conn = require('./db/conn')

// Models
const Tought = require('./models/Tought')
const User = require('./models/User')

// Import routes
const toughstRoutes = require('./routes/toughstRoutes')
const authRoutes = require('./routes/authRoutes')

// Import controllers
const ToughtController = require('./controllers/ToughtController')

// Template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Receber resposta do body
app.use(
    express.urlencoded({ 
        extended: true 
    })
)

app.use(express.json())

// Session middleware
app.use(
    session({
        name: 'session',
        secret: 'nosso_secret',
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function() {},
            path: require('path').join(require('os').tmpdir(), 'sessions')
        }),
        cookie: {
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now() + 360000),
            httpOnly: true
        }
    })
)

// Flash messages
app.use(flash())

// Public path
app.use(express.static('public'))

// Set session to res
app.use((req, res, next) => {
    if (req.session.userid) {
        res.locals.session = req.session
    }

    next()
})

// Routes
app.use('/toughts', toughstRoutes)
app.use('/', authRoutes)

app.get('/', ToughtController.showToughts)

conn
.sync( )
.then(() => {
    app.listen(3000)
})
