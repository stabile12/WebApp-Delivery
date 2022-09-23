const session = require('express-session')
const Endereco = require('../models/contaModel')

exports.index = async (req, res) => {
    const endereco = new Endereco(req.body)
    const address = await endereco.readAddress()
    res.render('conta', {
        email: session.user,
        address: address,
        id : address.id
    }) 
}

exports.registro = async function(req, res) {
    req.body.user = session.user
    const address = new Endereco(req.body)
    
    await address.registro()
    res.redirect('/conta')
}

