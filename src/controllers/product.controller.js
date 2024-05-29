const { insertarProducto, obtenerProductos, obtenerUnProductoPorId, eliminarUnProductoPorId, actualizarUnProductoCompleto } = require ('../services/product.service')

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

async function obtenerTodosProductos( req, res ) {
    try {
        const data = await obtenerProductos();

        res.json({
            ok: true,
            data
        });
    } 
    catch( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al obtener todos los productos'
        });
    }
}

async function obtenerProductoPorId( req, res ) {
    const id = req.params.id;   // Capturando el ID del producto que viene con la URL

    try {
        const data = await obtenerUnProductoPorId( id );

        res.json({ 
            ok: true,
            data
        });

    } 
    catch ( error) {
        console.error( error );
        res.json({
            ok: false,
            msg:'Error al obtener un producto por su ID'
        });
    }
    
}

async function eliminarProductoPorId( req, res ) {
    const id = req.params.id;

    try {
        const data = await eliminarUnProductoPorId( id );

        res.json({
            ok: true,
            data
        })
    } 
    catch (error) {
        console.log( error );
        res.json({
            ok: false,
            msg: 'Error al eliminar un producto por ID'
        })
    }
}

async function actualizarProductoCompleto( req, res ) {
    const id = req.params.id;   // Capturo el ID de la URL
    const data = req.body;      // Capturo datos para actualizar

    try {
        const productoActualizado = await actualizarUnProductoCompleto( id, data );
    
        res.json({
            ok: true,
            data: productoActualizado
        });
    } 
    catch ( error ) {
        console.log( error );
        res.json({
            ok: false,
            msg: 'El producto no pudo actualizar todos sus valores'
        });
    }
}

module.exports = {
    crearProducto,
    obtenerTodosProductos,
    obtenerProductoPorId,
    eliminarProductoPorId,
    actualizarProductoCompleto
}