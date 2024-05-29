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


module.exports = {
    getAllCategories,
    getOneCategoryById,
    createOneCategory,
    removeOneCategoryById
};