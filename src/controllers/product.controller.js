const {insertarProducto} = require ('../services/product.service')

async function crearProducto ( req, res ) {
    const producto = req.body;
    
    try {
        const nuevoProducto = await insertarProducto(producto)

        res.json({
            ok:true,
            data:nuevoProducto
        })    
    } catch (error) {
        console.error(error)
        res.json({
            ok:false,
            msg:"No se pudo insertar producto"
        }) 

    }
    
}

module.exports = {
    crearProducto 
}