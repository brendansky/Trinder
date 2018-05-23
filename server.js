let express = require("express");
let exphbs = require("express-handlebars");
let bodyParser = require("body-parser");
let passport = require('passport')
let session = require('express-session')
let env = require('dotenv').load();

let PORT = process.env.PORT || 3000;
let app = express();


app.use(express.static(process.cwd() + "/app/public"));



// Set up Express to handle parsing data
app.use(bodyParser.urlencoded({
    "extended": false
}));
app.use(bodyParser.json());
app.use(bodyParser.text());

// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions




// Set handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: "main"

}));

app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('index');
});


//Models
let models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app, passport, models);

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync().then(function () {
    console.log('Nice! Database looks fine')
}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!")
});



app.listen(PORT, () => console.log(`App listening on ${PORT}.`));
