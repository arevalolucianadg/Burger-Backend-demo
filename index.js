const server = require('./server');

require('./config/config');
require('./config/database');


// Server
server.listen( process.env.PORT )
    .then( ({url}) => {
        console.log(`Servidor GraphQL corriendo en puerto ${url}`);
    })
    .catch( err => console.log(err) );