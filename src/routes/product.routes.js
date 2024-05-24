const { Router } = require( 'express' );    // Importamos el router de Express
const { crearProducto } = require('../controllers/product.controller');
const router = Router();                    // Invocamos el router de Express para definir nuestras rutas

/** Definir las rutas para la entidad 'product' */

router.post ('/',crearProducto)

module.exports = router;        // Exportar todas las rutas definidas, para que queden disponibles en toda la aplicacion