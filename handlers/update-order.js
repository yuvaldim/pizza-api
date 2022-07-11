function updateOrder(orderid, order) {
    if (!orderid || !order || !order.pizzaId || !order.address)
        throw new Error('woooffff To update an existing pizza order please provide pizza type and address where pizza should be delivered')
    return { msg: `update request for order id: ${orderid}`, order: order };
}
module.exports = updateOrder