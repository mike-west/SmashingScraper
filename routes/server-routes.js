const getArticles = require("../articles");

module.exports = function(app) {
    app.get("/api/articles", function(req, res) {
        getArticles().then(results => res.json(results));
    })
}