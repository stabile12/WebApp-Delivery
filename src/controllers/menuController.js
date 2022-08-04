const session = require('express-session')
const Pedido = require('../models/pedidoModel')
const Endereco = require('../models/contaModel')
 
exports.index = async (req, res) => {
    const endereco = new Endereco(req.body)
    const address = await endereco.readAddress()
    res.render('menu' , {
        email: session.user,
        address: address
    })
}

exports.escolha = async function(req, res) {
    req.body.user = session.user

    const pedido = new Pedido(req.body)
    await pedido.finaliza()

    const endereco = new Endereco(req.body)
    const address = await endereco.readAddress()

    res.render('checkUp', {   
        email: session.user,
        address: req.body.endereço,
        pedido : req.body.pedido, 
        valor: req.body.total
    })
}


