
const { insertarEvento, obtenerEventos, obtenerUnEventoPorId, eliminarUnEventoPorId, actualizarUnEventoCompleto } = require("../services/evento.service");

const getEventos = async ( req, res ) => {

    try {
        const data = await obtenerEventos();  

        res.json({
            ok: true,
            data
        });
    } 
    catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error no puede obtener todos los eventos'
        })
    }


}


const getEventoById = async ( req, res ) => {
    const id = req.params.id;

    try {
        const data = await obtenerUnEventoPorId( id );

        res.json({
            ok: true,
            data
        });
    } 
    catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al obtener un evento por ID'
        });
    }

}

const createEvento = async ( req, res ) => {
    const newEvento = req.body;
    
    try {
        const data = await insertarEvento( newEvento );

        res.json({
            ok: true,
            data
        });
    } catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al crear un evento'
        });
    }

    
}


const updateEventoById = async ( req, res ) => {
    const id = req.params.id;
    const updatedData = req.body;

    try {

        const data = await actualizarUnEventoCompleto( id, updatedData );
        
        res.json({
            ok: true,
            data
        });
    } catch (error) {
        console.error( error );
        res.json({
            ok: false,

            msg: 'No pudo actualizar el evento por ID'
        })

    }
    
}


const removeEventoById = async ( req, res ) => {

    const id = req.params.id;
    const updateData = req.body;

    try {

        const data = await eliminarUnEventoPorId( id );

        res.json({
            ok: true,
            data
        })
        
    } catch (error) {

        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al eliminar el evento por ID'
        });
    }
}

module.exports = {

    getEventos,
    getEventoById,
    createEvento,
    updateEventoById,
    removeEventoById

};