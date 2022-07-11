function createOrder(order) {
    if (!order || !order.pizzaId || !order.address)
        throw new Error('To order pizza please provide pizza type and address where pizza should be delivered')
    return { msg: "Your order is in the oven. order number 666" }
}
module.exports = createOrder