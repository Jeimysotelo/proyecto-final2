const { Router } = require( 'express' );    // Importamos el router de Express
const router = Router();                    // Invocamos el router de Express para definir nuestras rutas

/** Definir las rutas para la entidad 'product' */

// -> http://localhost:3000/api/product
// C: Create 
router.post( '/', function( request, response ) {
    response.json({ msg: 'Crea un producto nuevo' });
} );

// R: Read 
router.get( '/', function( request, response ) {
    response.json({ msg: 'Obtiene todos los productos' });
} );

// U: Update -> http://localhost:3000/api/product/<espera-por-ID>
router.put( '/:id', function( request, response ) {
    response.json({ msg: 'Actualiza un producto por ID' });
} );
// U: Update -> http://localhost:3000/api/product/<espera-por-ID>
router.patch( '/:id', function( request, response ) {
    response.json({ msg: 'Actualiza un producto por ID' });
} );

// D: Delete -> http://localhost:3000/api/product/<espera-por-ID>
router.delete( '/:id', function( request, response ) {
    response.json({ msg: 'Eliminar un producto por ID' });
} );


module.exports = router;        // Exportar todas las rutas definidas, para que queden disponibles en toda la aplicacion