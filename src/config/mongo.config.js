const mongoose = require( 'mongoose' );

async function dbConnection() {
    try {
        await mongoose.connect( 'mongodb://localhost:27017', {} );
        console.log( 'Base de datos inicializada exitosamente' );
    } 
    catch (error) {
        console.log( error );
        throw new Error( 'Error al inicializar la base de datos' );
    }
}

module.exports = {
    dbConnection
};