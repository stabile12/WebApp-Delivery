const session = require('express-session')
exports.home = (req, res, next) => {
    res.render('home', {
        email: session.user
    })
}