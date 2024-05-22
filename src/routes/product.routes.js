const { Router } = require( 'express' );    // Importamos el router de Express
const { createProduct, getProducts, updateProductById, deleteProductById } = require('../controllers/product.controller');
const router = Router();                    // Invocamos el router de Express para definir nuestras rutas

/** Definir las rutas para la entidad 'product' */

// -> http://localhost:3000/api/product
// C: Create 
router.post( '/', createProduct );

// R: Read 
router.get( '/', getProducts );

// U: Update -> http://localhost:3000/api/product/<espera-por-ID>
router.put( '/:id', updateProductById );


// U: Update -> http://localhost:3000/api/product/<espera-por-ID>
// router.patch( '/:id', function( request, response ) {
//     response.json({ msg: 'Actualiza un producto por ID' });
// } );

// D: Delete -> http://localhost:3000/api/product/<espera-por-ID>
router.delete( '/:id', deleteProductById );


module.exports = router;        // Exportar todas las rutas definidas, para que queden disponibles en toda la aplicacion