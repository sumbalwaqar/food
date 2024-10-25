const Menu = require('../models/menu');

// routes/home.js
function home() {
  return {
    async index(req, res, next) {
      try {
        const menuItems = await Menu.find();
        console.log("Menu items fetched:", menuItems);
        return res.render('index', { menuItems: menuItems });
      } catch (error) {
        console.error("Error fetching menu items:", error);
        return res.status(500).send("Internal Server Error");
      }
   }
   
  };
}

module.exports = home; // Exporting the function
