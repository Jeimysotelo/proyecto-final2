const express = require( 'express' );       // Importamos express
const app = express();                      // Invocamos express

/** Definimos las rutas disponibles */
app.get( '/', function( request, response ) {
    const homePage = `<h1>Home Page</h1>
        <p>Esta es la pagina de inicio de la tienda virtual</p>
    `;
    response.send( homePage );
});
app.get( '/contactenos', function( request, response ) {
    response.send( `<h1>Contact Page</h1>
        <form>
            <label>Nombre</label>
            <input />
            <button>send</button>
        </form>` 
    );
} );


/** Lanzamos el servidor web */
app.listen( 3000, function() {
    console.log( 'Servidor corriendo en el puerto 3000' );
});