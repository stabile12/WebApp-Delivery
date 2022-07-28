const session = require('express-session')

exports.index = (req, res) => {
    res.render('menu' , {
        email: session.user
    })
}