const { Schema, model } = require( 'mongoose' );

const productosSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
    }
},{
    timestamps: true
});

const productosModel = model( 'productos', productosSchema );

module.exports = productosModel;