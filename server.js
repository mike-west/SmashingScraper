const express = require("express");
const bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

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

// Static directory
app.use(express.static("public"));

// routes
require("./routes/server-routes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});