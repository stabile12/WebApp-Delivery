const session = require('express-session')

exports.middlewareGlobal = (req, res, next) => {
  
  };

exports.loginRequired = (req, res, next) => {
  if (!session.user) {
    res.redirect('/login')
    return
  } else {
    next()
  }
}