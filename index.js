const server = require('./server');

server.listen()
    .then( ({url}) => {
        console.log(`Servidor GraphQL corriendo en puerto ${url}`);
    })
    .catch( err => console.log(err) );