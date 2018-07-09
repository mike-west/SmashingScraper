<<<<<<< HEAD
const getArticles = require("../js/articles");
=======
const getArticles = require("../articles");
>>>>>>> e628ce4d89b21e7e1c00e6f8f3a69c2ebc592da2

module.exports = function(app) {
    app.get("/api/articles", function(req, res) {
        getArticles().then(results => res.json(results));
    })
}