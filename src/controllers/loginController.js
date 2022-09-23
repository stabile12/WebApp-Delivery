const express = require('express')
const session = require('express-session')
const Login = require('../models/loginModel')
const nodemailer = require('nodemailer')

exports.index = (req, res) => {
    res.render('login', {
        error: erroLogin,
    })
}
let erroLogin = []
const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: 'edpadua123@outlook.com',
        pass: 'estabile!12'
    }
});


exports.register = async function(req, res, next) {
    const login = new Login(req.body)
    await login.register() 
    if (login.errors.length > 0) {
        erroLogin = login.errors
        return res.redirect('/login')
    } else { 
        session.user = req.body.email
        session.password = req.body.password
        const mailOptions = {
            from: 'edpadua123@outlook.com',
            to: `${req.body.email}`,
            subject: 'Confirmação de cadastro',
            text: 'Conta criada com sucesso'
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
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
            console.log(session)
        }
}

exports.logout = function(req, res) {
    delete session.user
    delete session.password
    res.redirect('/login')
    

}