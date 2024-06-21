const { Router } = require( 'express' );
const { obtenerlocalidades, obtenerlocalidadporid, crearlocalidad, eliminarlocalidad } = require('../controllers/localidades.controller');

const router = Router();

/** Definir las rutas para la entidad 'Categoria' */
// http://localhost:4000/api/categories
router.get( '/', obtenerlocalidades );
router.get( '/:id', obtenerlocalidadporid );
router.post( '/',  crearlocalidad);
router.delete( '/:id',eliminarlocalidad  );


module.exports = router;        // Exportar todas las rutas definidas, para que queden disponibles en toda la aplicacion