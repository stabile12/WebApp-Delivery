const session = require('express-session')
const Endereco = require('../models/contaModel')

exports.index = async (req, res) => {
    const endereco = new Endereco(req.body)
    const address = await endereco.show(req.body.id)
    res.render('editar', {
        id: address.id,
        email: session.user,
        rua : address.rua,
        numero : address.numero,
        bairro : address.bairro,
    }) 
}

exports.editar = async (req, res) => {
    const endereco = new Endereco(req.body)
    console.log(req.body.id)
    await endereco.editar(req.body.id, req.body)
    console.log('chegou aqui')
    res.redirect('/conta')
}
