const ProductModel = require ('../models/Product.js')

async function insertarProducto ( product ) {
    return await ProductModel.create(product)
}

module.exports = {
    insertarProducto
}