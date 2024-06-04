const { getAllCategories, getOneCategoryById, createOneCategory, removeOneCategoryById, updateOneCategoryById } = require("../services/category.service");

const getCategories = async ( req, res ) => {

    try {
        const data = await getAllCategories();    

        res.json({
            ok: true,
            data
        });
    } 
    catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error no puede obtener todas las categorias'
        })
    }


}

const getCategoryById = async ( req, res ) => {
    const id = req.params.id;

    try {
        const data = await getOneCategoryById( id );

        res.json({
            ok: true,
            data
        });
    } 
    catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al obtener una categoria por ID'
        });
    }

}

const createCategory = async ( req, res ) => {
    const newCategory = req.body;
    
    try {
        const data = await createOneCategory( newCategory );

        res.json({
            ok: true,
            data
        });
    } catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al crear una categoria'
        });
    }

    
}

const updateCategoryById = async ( req, res ) => {
    const id = req.params.id;
    const updatedData = req.body;

    try {
        const data = await updateOneCategoryById( id, updatedData );
        
        res.json({
            ok: true,
            data
        });
    } catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'No pudo actualizar la categoria por ID'
        })
    }
}

const removeCategoryById = async ( req, res ) => {
    const id = req.params.id;

    try {
        const data = await removeOneCategoryById( id );

        res.json({
            ok: true,
            data
        });
    } catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al eliminar categoria por ID'
        });
    }
    
}

module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategoryById,
    removeCategoryById
};