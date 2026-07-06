const orders = [
    {
        "id": 1,
        "productName": "Laptop",
        "quantity": 2,
        "totalPrice": 2400,
        "status": "Pending"
    },
    {
        "id": 2,
        "productName": "Wireless Mouse",
        "quantity": 1,
        "status": "Completed"
    },
    {
        "id": 3,
        "productName": "Keyboard",
        "totalPrice": 80
    },
    {
        "id": 4,
        "productName": "Monitor"
    },
    {
        "id": 5,
        "productName": "USB-C Cable",
        "quantity": 3,
        "totalPrice": 45,
        "status": "Shipped"
    },
    {
        "id": 6,
        "productName": "Headphones",
        "status": "Cancelled"
    },
    {
        "id": 7,
        "productName": "External SSD",
        "quantity": 1,
        "totalPrice": 120
    },
    {
        "id": 8,
        "productName": "Webcam",
        "quantity": 2
    },
    {
        "id": 9,
        "productName": "Microphone",
        "status": "Processing"
    },
    {
        "id": 10,
        "productName": "Gaming Chair",
        "quantity": 1,
        "totalPrice": 350,
        "status": "Delivered"
    }
]

const pagination = (req, res) => {
    const { page = 1, take = 3 } = req.query
    take > 3 ? take = 3 : take
    res.json(orders.slice((page - 1) * take, take * page))
}

const getById = (req, res) => {
    const { id } = req.params
    const order = orders.find(el => el.id === Number(id))
    if (!order) {
        return res.status(404).json({ error: "Order not found" })
    }
    res.json(order)
}

const createOrder = (req, res) => {
    const { productName, quantity, totalPrice, status } = req.body
    if (quantity > 10 || totalPrice > 500 || !productName) return res.status(400).json({ error: "Invalid order data" })
    const newId = orders[orders.length - 1]?.id || 0
    const newObj = {
        id: newId + 1,
        productName,
        quantity,
        totalPrice,
        status
    }
    const newOrder = orders.push(newObj)
    res.json({ message: "Order created successfully", order: newObj })
}

const deleteOrder = (req, res) => {
    const { id } = req.params
    const index = orders.findIndex(el => el.id === Number(id))
    if (index === -1) return res.json({ message: "Order not found" })
    const deletedOrder = orders.splice(index, 1)
    res.json({ message: "Order deleted successfully", order: deletedOrder })
}

const updateOrder = (req, res) => {
    const { id } = req.params
    const { productName, quantity, totalPrice, status } = req.body
    const index = orders.findIndex(el => el.id === Number(id))
    if (index === -1) return res.json({ message: "invalid Id" })
    if (quantity > 10 || totalPrice > 500) return res.status(400).json({ error: "Invalid order data" })
    orders[index] = {
        ...orders[index],
        productName: productName || orders[index].productName,
        quantity: quantity || orders[index].quantity,
        totalPrice: totalPrice || orders[index].totalPrice,
        status: status || orders[index].status
    }
    res.json({ message: "order updated" })
}

const updateStatus = (req, res) => {
    const { id } = req.params
    const { status } = req.body
    const index = orders.findIndex(el => el.id === Number(id))
    if (index === -1) return res.json({ message: "invalid Id" })
    orders[index].status = status || orders[index].status
    res.json({ message: "order status updated" })
}

const secretRoute = (req, res) => {
    res.json({ message: "This is a secret route" })
}

module.exports = { pagination, getById, createOrder, updateOrder, deleteOrder, secretRoute, updateStatus}
