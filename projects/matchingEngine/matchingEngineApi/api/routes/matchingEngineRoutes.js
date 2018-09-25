'use strict';
module.exports = function(app) {
  var matchingEngine = require('../controllers/matchingEngineController');

  // matchingEngine Routes
  app.route('/book')
    .get(matchingEngine.list_all_orders) //view all orders

  app.route('/buy')
    .post(matchingEngine.buy_order) //placing a buy order

  app.route('/sell')
    .post(matchingEngine.sell_order) //placing a sell order

  app.route('/book/:orderId')
    .get(matchingEngine.find_an_order) //finding a specific order
    .put(matchingEngine.update_an_order) // updating a specific order
    .delete(matchingEngine.delete_an_order); //deleting a specific order
};
