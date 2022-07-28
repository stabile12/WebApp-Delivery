const session = require('express-session')
const Endereco = require('../models/contaModel')
exports.index = (req, res) => {
    res.render('conta', {
        email: session.user
    })
}

exports.registro = async function(req, res) {
    req.body.user = session.user
    const address = new Endereco(req.body)
    
    await address.registro()
    res.redirect('/conta')
}