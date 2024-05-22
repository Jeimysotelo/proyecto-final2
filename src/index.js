const express = require( 'express' );       // Importamos express
const app = express();                      // Invocamos express

/** Definimos las rutas disponibles */
app.use( '/api/products', require( './routes/product.routes' ) );   // -> http://localhost:3000/api/products


/** Lanzamos el servidor web */
app.listen( 3000, function() {
    console.log( 'Servidor corriendo en el puerto 3000' );
});