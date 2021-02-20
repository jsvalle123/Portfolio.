'use strict';

module.exports = (app) => {
  app.get(`/`, (req, res) => {
    if (req.user) {
      res.redirect(`/aboutMe`);
    }

    app.get(`/aboutMe`, (req, res) => {
      res.render(`aboutMe`);
    });

    // add is authenticated back at some point
    app.get(`/contact`, (req, res) => {
      res.render(`contact`);
    });
    // re-add isAuthenticated once working
    app.get(`/portfolio`, (req, res) => {
      res.render(`portfolio`);
    });
  });
};
