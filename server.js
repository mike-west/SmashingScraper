const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");             

//handlebars
const exphbs = require("express-handlebars");

app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('views', __dirname + '/views');
app.set('view engine', '.hbs');

// Requiring our models for syncing
// const db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(logger("dev"));

// Static directory
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/SmashingScraper");

db.User.create({user: "billgates", password: "msoft"})
    .then(function(dbUser) {
        console.log(dbUser);
    }).catch(function(err) {
        console.log(err.message);
    });

db.Article.create({
    title: "Better Research, Better Design, Better Results",
    link: "http://www.smashingmagazine.com/2018/07/better-research-design-results/"
}).then(function(dbArticle) {
    console.log(dbArticle);
}).catch(function(err) {
    console.log(err.message);
})

// routes
require("./routes/server-routes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});