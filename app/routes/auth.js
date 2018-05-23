var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport, db) {
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.get('/profile', authController.profile);
    app.get('/inventory', authController.inventory);
    app.get('/dashboard', isLoggedIn, authController.dashboard);
    app.get('/logout', authController.logout);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }));
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin'
    }));

    app.get("/api/items", isLoggedIn, function (req, res) {
        db.Item.findAll({}).then(function (dbItem) {
            res.json(dbItem);
        });
    });

    app.post("/api/items",isLoggedIn, function (req, res) {
        db.Item.create(req.body).then(function (dbItem) {
            res.json(dbItem);

        })
    });
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/signin');
}