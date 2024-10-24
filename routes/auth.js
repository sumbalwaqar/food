function auth() {
     return {
      login(req, res, next) {
        res.render('auth/login');
      },
      register(req, res, next) {
        res.render('auth/register');
      }
     }    
}
  
  module.exports = auth;