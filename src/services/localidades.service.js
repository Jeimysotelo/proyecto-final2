const LocalidadesModel = require("../models/localidades");


const obtenerTodaslaslocalidades = async () => {
    return await LocalidadesModel.find();
}

const obtenerunalocalidadporid = async ( id ) => {
    return await LocalidadesModel.findOne({ _id: id });
}

const crearunalocalidad = async ( nuevalocalidad ) => {
    return await LocalidadesModel.create( nuevalocalidad );
}

const eliminarunalocalidad = async ( id ) => {
    return await LocalidadesModel.findOneAndDelete({ _id: id });
}

async function actualizarUnalocalidadCompleta(_id, dataActualizada ) {
    return await LocalidadesModel.findOneAndUpdate(
        { _id},
        dataActualizada,
        {new: true}

    );
}


module.exports = {
    obtenerTodaslaslocalidades,
    obtenerunalocalidadporid,
    crearunalocalidad,
    eliminarunalocalidad,
    actualizarUnalocalidadCompleta
    
};