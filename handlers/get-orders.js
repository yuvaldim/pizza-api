var bunyan = require('bunyan');
var log = bunyan.createLogger({ name: 'getOrders' });




function getOrders() {
    log.info("In getOrders -------------------------- ");
    return {
        orders: [{ orderid: 1, pizzaid: 3, address: "arkham st." },
        { orderid: 2, pizzaid: 2, address: "stamstam st." }, {
            orderid: 3, pizzaid: 1, address: "sumsum st."
        }]
    };
}
module.exports = getOrders;