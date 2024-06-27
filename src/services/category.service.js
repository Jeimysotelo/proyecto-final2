const CategoryModel = require( '../models/Category' );

const getAllCategories = async () => {
    return await CategoryModel.find();
}

const getOneCategoryById = async ( id ) => {
    return await CategoryModel.findOne({ _id: id });
}

const createOneCategory = async ( newCategory ) => {
    return await CategoryModel.create( newCategory );
}

const removeOneCategoryById = async ( id ) => {
    return await CategoryModel.findOneAndDelete({ _id: id });
}

const updateOneCategoryById = async ( id, updatedCategory ) => {
    return await CategoryModel.findOneAndUpdate(
        { _id: id  },       // Objeto de consulta
        updatedCategory,    // Objeto con la data actualizada
        { new: true }       // Habilita el retorno de los datos registrados
    );
}


module.exports = {
    getAllCategories,
    getOneCategoryById,
    createOneCategory,
    removeOneCategoryById,
    updateOneCategoryById
};