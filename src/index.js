const express = require( 'express' );       // Importamos express
const app = express();                      // Invocamos express

const { dbConnection } = require( './config/mongo.config' );  // Importamos la configuracion de Mongoose para MongoDB

/** Definimos las rutas disponibles */
app.use( '/api/products', require( './routes/product.routes' ) );   // -> http://localhost:3000/api/products


// Invoca la configuracion de la base de datos para establecer la conexion
dbConnection();     

/** Lanzamos el servidor web */
app.listen( 3000, function() {
    console.log( 'Servidor corriendo en el puerto 3000' );
});