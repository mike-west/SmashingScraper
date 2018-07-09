const cheerio = require("cheerio");
const request = require("request");
const urlBase = "http://www.smashingmagazine.com";

var getArticles = function (url) {
    let articles = [];
    const location = url || urlBase;
    return new Promise(resolve => {
        request(location, function (err, resp, html) {
            if (err) {
                return err;
            }

            let $ = cheerio.load(html);

            $("a", ".featured-article__title").each(function (i, element) {
                var text = $(element).text();
                // console.log(text);
                // Meow! divs intersperse the real data we want;
                if (!text.match("Meow")) {
                    let title = element.children[0].data;
                    let href = location + element.children[0].parent.attribs.href;
                    let article = `{title: ${title}, href: ${href}`;
                    articles.push(article);
                }
            });
            // console.log(articles);
            resolve(articles);
        })
    });
}

// getArticles().then(results => console.log(results));

// var callGetArticles = async function () {
//     var result = await getArticles();
//     console.log(result);
// }

// callGetArticles();

module.exports = getArticles;