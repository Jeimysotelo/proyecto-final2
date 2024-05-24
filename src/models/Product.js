const { 
    Schema,     // Definir la estructura de los documentos que van a guardarse en una coleccion
    model       // Asociar la estructura al nombre de una colecion
} = require( 'mongoose' );

// Instanciamos el Schema de Mongoose para definir la estructa de datos (Modelo)
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        default:'non-category'
    },
    urlImage: {
        type: String
    },
    description: String,    // Forma abreviada definir un campo con una sola regla (ver urlImage)
    userId: {
        type: String,
        required: false  // TODO: Volverlo obligatorio cuando el sistema de autenticacion este listo
    }
},{
    timestamps: true
});

// Asocia el modelo definido a un nombre para la coleccion en la base de datos
const ProductModel = model(
    'Product',       // Nombre de la Entidad (Collection en la base de datos)
    ProductSchema
);

module.exports = ProductModel;      // Exponemos el Modelo de datos