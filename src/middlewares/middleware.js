const session = require('express-session')

exports.loginRequired = (req, res, next) => {
  if (!session.user) {
    res.redirect('/login')
    return
  } else {
    next()
  }
}