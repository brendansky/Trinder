var exports = module.exports = {}
 
exports.signup = function(req, res) {
    res.render('signup');
}

exports.signin = function(req, res) {
    res.render('signin'); 
}

exports.dashboard = function(req, res) {
    res.render('dashboard');
}

exports.inventory = function(req, res) {
    res.render('inventory')
}

exports.profile = function(req, res) {
    res.render('profile')
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}
