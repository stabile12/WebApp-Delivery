const express = require('express')
const app = express()
const flash = require('connect-flash');
const routes = require('./routes')
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cookieParser = require("cookie-parser");
const connectionString = 'mongodb+srv://estabile12:estabile123@app.tbdzgyv.mongodb.net/?retryWrites=true&w=majority'
const {middlewareGlobal} = require('./src/middlewares/middleware')
mongoose.connect(connectionString)
.then (() => {
    console.log('conectado à base de dados')
}) 

app.use(express.static(path.resolve(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }));
app.set('views', './src/views')
app.set('view engine', 'ejs');

app.use(routes)


app.use(session({
  secret: 'sessao qualquer',
  store: MongoStore.create({ mongoUrl: connectionString }),
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: false
  } 
}));
app.use(cookieParser());
app.use(flash())
app.use(middlewareGlobal); 
app.listen(3012, () => {
    console.log('acessar http://localhost:3012/login')
})