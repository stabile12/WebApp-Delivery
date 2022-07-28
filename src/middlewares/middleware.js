const session = require('express-session')

exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success') 
    next();
  };

exports.loginRequired = (req, res, next) => {
  if (!session.user) {
    res.redirect('/login')
    return
  } else {
    next()
  }
}