const session = require('express-session')
const Login = require('../models/loginModel')

exports.index = (req, res) => {
    res.render('login', {
        error: erroLogin,
    })
}
let erroLogin = []

exports.register = async function(req, res, next) {
    const login = new Login(req.body)
    await login.register() 
    if (login.errors.length > 0) {
        erroLogin = login.errors
        return res.redirect('/login')
    } else { 
        session.user = req.body.email
        session.password = req.body.password
        res.redirect('/home')
    }
}

exports.login = async function(req, res) {
        const login = new Login(req.body);
        await login.login()
        if (login.errors.length > 0) {
            erroLogin = login.errors
            return res.redirect('/login')
        }
        else {
            session.user = req.body.email
            session.password = req.body.password
            res.redirect('/home')
        }
}