//  PORT
process.env.PORT = process.env.PORT || 4000; 


// ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// URL_DATABASE
let urlDB;
if( process.env.NODE_ENV === 'dev' ) {
    urlDB = 'mongodb://localhost:27017/pizzas-demo';
} else {
    urlDB = process.env.MONGO_URL_DB;
};

process.env.URL_DB = urlDB;