const { Router } = require( 'express' );
const { getEventos, getEventoById, createEvento, updateEventoById, removeEventoById } = require('../controllers/evento.controller');
const router = Router();

/** Definir las rutas para la entidad 'Categoria' */
// http://localhost:4000/api/categories
router.get( '/', getEventos );
router.get( '/:id', getEventoById );
router.post( '/', createEvento );
router.patch( '/:id', updateEventoById );
router.delete( '/:id', removeEventoById );


module.exports = router;        // Exportar todas las rutas definidas, para que queden disponibles en toda la aplicacion