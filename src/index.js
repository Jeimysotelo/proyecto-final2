const express = require( 'express' );       // Importamos express
const app = express();                      // Invocamos express

/** Definimos las rutas disponibles */
app.get( '/', function( request, response ) {
    const data = {
        message: 'Bienvenido a mi web'
    };
    response.json( data );
});
app.get( '/api/users', function( request, response ) {
    response.json([
        {nombre:'Maria Alejandra', genero: 'Femenino'},
        {nombre:'Nidia', genero: 'Femenino'},
        {nombre:'Laura', genero: 'Femenino'},
        {nombre:'Natalia', genero: 'Femenino'}
    ]);
} );


/** Lanzamos el servidor web */
app.listen( 3000, function() {
    console.log( 'Servidor corriendo en el puerto 3000' );
});