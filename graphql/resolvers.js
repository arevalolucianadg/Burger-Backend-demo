const Pizza = require('../models/Pizza');

const resolvers = {

    Query: {
        hello() {
            return 'GraphQL!'
        }
    },

    Mutation: {
        async newPizza(_, { input }) {

            try {
                const nuevaPizza = new Pizza( input );
                const pizza = await nuevaPizza.save();

                return pizza;

            } catch (error) {
                throw new Error( error );
            }

        }
    }

};

module.exports = resolvers;