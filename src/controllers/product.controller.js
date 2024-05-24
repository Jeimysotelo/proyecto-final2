const {insertarProducto} = require ('../services/product.service')

async function crearProducto ( req, res ) {
    const producto = req.body;
    
    const nuevoProducto = await insertarProducto(producto)

    res.json({
        ok:true,
        data:nuevoProducto
    })
}

module.exports = {
    crearProducto 
}