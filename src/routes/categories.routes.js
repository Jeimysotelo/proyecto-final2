const { Router } = require( 'express' );
const { getCategories, getCategoryById, createCategory, updateCategoryById, removeCategoryById } = require('../controllers/category.controller');
const router = Router();

/** Definir las rutas para la entidad 'Categoria' */
// http://localhost:4000/api/categories
router.get( '/', getCategories );
router.get( '/:id', getCategoryById );
router.post( '/', createCategory );
router.patch( '/:id', updateCategoryById );
router.delete( '/:id', removeCategoryById );


module.exports = router;        // Exportar todas las rutas definidas, para que queden disponibles en toda la aplicacion