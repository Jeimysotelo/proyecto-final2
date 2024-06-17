const { getAllproductos, getOneproductosById, createOneproductos, updateOneproductosById, removeOneproductosById } = require( '../services/producto.service' )

const getproductos = async ( req, res ) => {

    try {
        const data = await getAllproductos();    

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

const getproductosById = async ( req, res ) => {
    const id = req.params.id;

    try {
        const data = await getOneproductosById( id );

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

const createproductos = async (req, res ) => {
    const inputData = req.body;
    try{
        const data = await createOneproductos( inputData );

        res.json({
            ok: true,
            data
        });
    }
    catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al crear un producto'
        });
    }
}

const updateproductosById = async (req, res ) => {
    const id = req.params.id;
    const inputData = req.body;

    try{
        const data = await updateOneproductosById( id, inputData );

        res.json({
            ok: true,
            data
        });
    }
    catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al crear un producto'
        });
    }

}

const removeproductosById = async (req, res ) => {
    const id = req.params.id;
    try{
        const data = await removeOneproductosById( id );

        res.json({
            ok: true,
            data
        });
    }
    catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al crear un producto'
        });
    }
}


module.exports = {
    getproductos,
    getproductosById,
    createproductos,
    updateproductosById,
    removeproductosById
};