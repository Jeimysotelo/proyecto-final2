const { Router } = require( 'express' );
const { getproductos, createproductos, getproductosById, removeproductosById, updateproductosById } = require( '../controllers/productos.controller' );
const router = Router();

/** Definir las rutas para la entidad 'Categoria' */
// http://localhost:4000/api/categories
router.get( '/', getproductos );
router.get( '/:id', getproductosById );
router.post( '/', createproductos );
router.patch( '/:id', updateproductosById );
router.delete( '/:id', removeproductosById );


module.exports = router;        // Exportar todas las rutas definidas, para que queden disponibles en toda la aplicacion