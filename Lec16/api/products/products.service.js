const products = [
    {
        "id": 1,
        "name": "Milk",
        "price": 3.5,
        "category": "Dairy",
        "isExpire": true
    },
    {
        "id": 2,
        "name": "Bread",
        "price": 2.2,
        "category": "Bakery",
        "isExpire": true
    },
    {
        "id": 3,
        "name": "Laptop",
        "price": 1299.99,
        "category": "Electronics",
        "isExpire": false
    },
    {
        "id": 4,
        "name": "Orange Juice",
        "price": 4.8,
        "category": "Beverages",
        "isExpire": true
    },
    {
        "id": 5,
        "name": "Shampoo",
        "price": 9.99,
        "category": "Personal Care",
        "isExpire": false
    },
    {
        "id": 6,
        "name": "Chocolate",
        "price": 1.75,
        "category": "Snacks",
        "isExpire": true
    },
    {
        "id": 7,
        "name": "Desk Lamp",
        "price": 24.99,
        "category": "Home",
        "isExpire": false
    },
    {
        "id": 8,
        "name": "Rice",
        "price": 5.6,
        "category": "Groceries",
        "isExpire": true
    },
    {
        "id": 9,
        "name": "Notebook",
        "price": 3.25,
        "category": "Stationery",
        "isExpire": false
    },
    {
        "id": 10,
        "name": "Cheese",
        "price": 6.4,
        "category": "Dairy",
        "isExpire": true
    }
]

const pagination = (req, res) => {
    const { page = 1, take = 3 } = req.query
    take > 3 ? take = 3 : take
    res.json(products.slice((page - 1) * take, take * page))
}

const getById = (req, res) => {
    const { id } = req.params
    const product = products.find(el => el.id === Number(id))
    if (!product) return res.json({ message: "invalid ID" })
    res.json(product)
}

const createProduct = (req, res) => {
    const { name, price, category, isExpire } = req.body

    if (!name || !price || !category || isExpire) return res.json({ message: "name, price, category and isExpire are required fields" })
    if (price > 200) return res.json({ message: "Price cannot be greater than 200" })

    const newId = products[products.length - 1]?.id || 0
    const newObj = {
        id: newId + 1,
        name: name,
        price: price,
        category: category,
        isExpire: isExpire
    }
    const newProduct = products.push(newObj)
    res.json({ message: "Product created successfully", product: newObj })
}

const deleteProduct = (req, res) => {
    const { id } = req.params
    const index = products.findIndex(el => el.id === Number(id))
    if (index === -1) return res.json({ message: "invalid Id" })
    const deletedProduct = products.splice(index, 1)
    res.json({ message: "product deleted", product: deletedProduct })
}

const updateProduct = (req, res) => {
    const { id } = req.params
    const { name, price, category, isExpire } = req.body
    const index = products.findIndex(el => el.id === Number(id))
    if (index === -1) return res.json({ message: "invalid Id" })
    products[index] = {
        ...products[index],
        name: name || products[index].name,
        price: price || products[index].price,
        category: category || products[index].category,
        isExpire: isExpire || products[index].isExpire
    }
    res.json({message: "product updated"})
}

const secretRoute = (req, res) => {
    res.json({ message: "This is a secret route" })
}

module.exports = { pagination, getById, createProduct, updateProduct, deleteProduct, secretRoute }
