require('./config/config');
const server = require('./server');

server.listen( process.env.PORT )
    .then( ({url}) => {
        console.log(`Servidor GraphQL corriendo en puerto ${url}`);
    })
    .catch( err => console.log(err) );