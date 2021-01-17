const { gql } = require('apollo-server');


const typeDefs = gql`

    # TYPE
    type Pizza {
        id: ID
        nombre: String
        descripcion: String
        precio: Float 
        codigo: String
        stock: Boolean
    }

    # INPUT
    input PizzaInput {
        nombre: String!
        descripcion: String!
        precio: Float!
        codigo: String!
        stock: Boolean 
    }

    # QUERY  
    type Query {
        hello: String
    }

    # MUTATION 
    type Mutation {
        newPizza( input: PizzaInput ): Pizza,
    }

`;

module.exports = typeDefs;