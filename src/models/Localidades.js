const { Schema, model } = require( 'mongoose' );

const LocalidadesSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    urlImagen: {
        type: String
    }
},{
    timestamps: true
});

const LocalidadesModel = model( 'localidades', LocalidadesSchema );

module.exports = LocalidadesModel;