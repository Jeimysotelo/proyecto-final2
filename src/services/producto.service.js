const productosModel = require( '../models/productos' );

const getAllproductos = async () => {
    return await productosModel.find();
}

const getOneproductosById = async ( id ) => {
    return await productosModel.findOne({ _id: id });
}

const createOneproductos = async ( newproductos ) => {
    return await productosModel.create( newproductos );
}

const removeOneproductosById = async ( id ) => {
    return await productosModel.findOneAndDelete({ _id: id });
}

const updateOneproductosById = async ( id, updatedproductos ) => {
    return await productosModel.findOneAndUpdate(
        { _id: id  },       // Objeto de consulta
        updatedproductos,    // Objeto con la data actualizada
        { new: true }       // Habilita el retorno de los datos registrados
    );
}


module.exports = {
    getAllproductos,
    getOneproductosById,
    createOneproductos,
    removeOneproductosById,
    updateOneproductosById
};