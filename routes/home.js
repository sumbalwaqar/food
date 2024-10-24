const Menu = require('../models/menu');

// routes/home.js
function home() {
  return {
    async index(req, res, next) {
      const menuItems = await Menu.find()
      res.render('index',{menuItems: menuItems})
    }
  };
}

module.exports = home; // Exporting the function
