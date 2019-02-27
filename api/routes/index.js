const mainCtrl = require('../controllers/main.controller');

module.exports = (app, express) => {
  let main = express.Router();
  main.route('/').post(mainCtrl.main);
  app.use(`${process.env.ROUTE}`, main);
};
