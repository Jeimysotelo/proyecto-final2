const { Schema, model } = require( 'mongoose' );
const LocalidadSchema = new Schema({
    name:{
        type:String,
        required: true,
    }
});





    const LocalidadModel = model( 'Localidad',LocalidadSchema )
    module.exports = LocalidadModel