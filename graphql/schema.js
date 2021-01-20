const { gql } = require('apollo-server');


const typeDefs = gql`

    # TYPE
    type Pizza {
        id: ID
        nombre: String
        descripcion: String
        tamano: String
        precio: Float 
        codigo: String
        stock: Boolean
    }

    # INPUT
    input PizzaInput {
        nombre: String!
        descripcion: String!
        tamano: String!
        precio: Float!
        codigo: String!
        stock: Boolean 
    }

    # QUERY  
    type Query {
        hello: String
        getPizzas: [Pizza]
        getPizza(id: ID!): Pizza 
    }

    # MUTATION 
    type Mutation {
        newPizza( input: PizzaInput! ): Pizza,
        updatePizza( id: ID!, input: PizzaInput! ): Pizza
        deletePizza( id: ID! ): String
    }

`;

module.exports = typeDefs;