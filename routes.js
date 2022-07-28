const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const contaController = require('./src/controllers/contaController')
const menuController = require('./src/controllers/menuController')


const loginRequired  = require('./src/middlewares/middleware')
 

route.get('/home', loginRequired.loginRequired, homeController.home)

route.get('/login', loginController.index)
route.post('/login/register', loginController.register)
route.post('/login/login', loginController.login)

route.get('/conta', loginRequired.loginRequired, contaController.index )
route.post('/conta/endereco', contaController.registro)

route.get('/home/menu', menuController.index )


module.exports = route





