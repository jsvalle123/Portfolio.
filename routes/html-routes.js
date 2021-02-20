var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/aboutMe.handlebars"));
  });

  // cms route loads cms.html
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/contact.handlebars"));
  });

  // blog route loads blog.html
  app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/portfolio.handlebars"));
  });



};
