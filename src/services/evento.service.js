const EventoModel = require ('../models/Evento')

async function insertarEvento ( evento ) {
    return await EventoModel.create(evento)
}

async function obtenerEventos() {
    return await EventoModel.find();
}

async function obtenerUnEventoPorId( idProducto ) {
    return await EventoModel.findOne({ _id: idProducto });
}

async function eliminarUnEventoPorId( _id ) {
    return await EventoModel.findOneAndDelete({ _id });
}

async function actualizarUnEventoCompleto( _id, dataActualizada ) {
    return await EventoModel.findOneAndUpdate(
        { _id },           // Objeto de consulta
        dataActualizada,   // Data que se va a actualizar (Objeto que tiene el tipo 'EventoModel')
        { new: true }
    );
}



module.exports = {
    insertarEvento,
    obtenerEventos,
    obtenerUnEventoPorId,
    eliminarUnEventoPorId,
    actualizarUnEventoCompleto
}