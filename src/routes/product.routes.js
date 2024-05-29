const { Router } = require( 'express' );    // Importamos el router de Express
const { crearProducto, obtenerTodosProductos, obtenerProductoPorId, eliminarProductoPorId, actualizarProductoCompleto } = require('../controllers/product.controller');
const router = Router();                    // Invocamos el router de Express para definir nuestras rutas

/** Definir las rutas para la entidad 'product' */

router.post( '/',crearProducto );           // Crea Producto
router.get( '/', obtenerTodosProductos );   // Obtenemos todos Productos
router.get( '/:id', obtenerProductoPorId ); // Obtenemos producto por Id
router.delete( '/:id', eliminarProductoPorId );  //  
router.put( '/:id', actualizarProductoCompleto );


module.exports = router;        // Exportar todas las rutas definidas, para que queden disponibles en toda la aplicacion