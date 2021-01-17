const mongoose = require('mongoose');

const urlDB = process.env.URL_DB;

mongoose.connect( urlDB, {
        useUnifiedTopology: true,
        useNewUrlParser:    true,
        useFindAndModify:   false,
        useCreateIndex: true
    })
    .then( console.log('Base de datos conectada.'))
    .catch( err => console.log('Error DB', err) );

module.exports = mongoose;