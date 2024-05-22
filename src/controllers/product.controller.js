function createProduct( request, response ) {
    response.json({ msg: 'Crea un producto nuevo' });
}

function getProducts( request, response ) {
    response.json({ msg: 'Obtiene todos los productos' });
}

function getProductById() {}

function updateProductById( request, response ) {
    response.json({ msg: 'Actualiza un producto por ID' });
}

function deleteProductById( request, response ) {
    response.json({ msg: 'Eliminar un producto por ID' });
}


module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById
};