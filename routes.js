const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const contaController = require('./src/controllers/contaController')
const menuController = require('./src/controllers/menuController')
const editarController = require('./src/controllers/editarController')

const loginRequired  = require('./src/middlewares/middleware')
 

route.get('/home', loginRequired.loginRequired, homeController.home)

route.get('/login', loginController.index)
route.post('/login/register', loginController.register)
route.post('/login/login', loginController.login)
route.get('/logout', loginController.logout)

route.get('/conta', loginRequired.loginRequired, contaController.index )
route.post('/conta/endereco',loginRequired.loginRequired, contaController.registro)
route.post('/conta/editar', loginRequired.loginRequired, editarController.index)
route.post('/conta/edited', loginRequired.loginRequired, editarController.editar)   

route.get('/home/menu', loginRequired.loginRequired, menuController.index )  
route.post('/home/menu/pedido', loginRequired.loginRequired, menuController.escolha)



module.exports = route





