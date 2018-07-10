const getArticles = require("../js/articles");
const db = require("../models");

module.exports = function(app) {
    app.get("/api/articles", function(req, res) {
        getArticles().then(results => res.json(results));
    });

    app.get("/api/user/:user/:password", function(req, res) {
        console.log(req.params);
        db.User.findOne({"user" : req.params.user})
            .then(function(dbUser) {
                if (dbUser.password === req.params.password) {
                    res.json(dbUser);
                } else {
                    throw new Error("password-mismatch");
                }
            }).catch(function(err) {
                res.json(err);
            })
    });
}