function deleteOrder(orderid) {
    if (!orderid)
        throw new Error('YD: To delete an order, provide order id')
    return { msg: `deleting is request for ${orderid}` }
}
module.exports = deleteOrder