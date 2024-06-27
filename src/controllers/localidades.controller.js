const { obtenerTodaslaslocalidades, obtenerunalocalidadporid, crearunalocalidad, eliminarunalocalidad, actualizarUnalocalidadCompleta } = require("../services/localidades.service");

const obtenerlocalidades = async ( req, res ) => {


    try {
        const data = await obtenerTodaslaslocalidades();    

        res.json({
            ok: true,
            data
        });
    } 
    catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error no puede obtener todas las las localidades'
        })
    }


}

const obtenerlocalidadporid = async ( req, res ) => {
    const id = req.params.id;

    try {
        const data = await obtenerunalocalidadporid( id );

        res.json({
            ok: true,
            data
        });
    } 
    catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al obtener una localidad por ID'
        });
    }

}

const crearlocalidad = async ( req, res ) => {
    const newCategory = req.body;


    try {
        const data = await crearunalocalidad( newCategory );

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


const eliminarlocalidad = async ( req, res ) => {
    const id = req.params.id;

    try {
        const data = await eliminarunalocalidad( id );

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


const actualizarlocalidad = async (req, res) => {
    const id = req.params.id;
    const updateData = req.body;

    try {
        const data = await actualizarUnalocalidadCompleta( id, updateData);

        res.json({
            ok: true,
            data
        })
        
    } catch (error) {

        console.error( error );
        res.json({
            ok: false,
            msg: 'No se pudo actualizar la localidad por ID'
        })
        
    }
}

module.exports = {
    obtenerlocalidades,
    obtenerlocalidadporid,
    crearlocalidad,
    eliminarlocalidad,
    actualizarlocalidad
};