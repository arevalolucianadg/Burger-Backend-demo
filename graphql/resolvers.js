const Pizza = require('../models/Pizza');

const resolvers = {

    Query: {
        hello() {
            return 'GraphQL!'
        },
        async getPizzas() {
            return await Pizza.find({});
        },
        async getPizza(_, { id }) {
            return await Pizza.findById( id );
        }
    },

    Mutation: {
        async newPizza(_, { input }) {

            const newPizza = new Pizza( input );
            return await newPizza.save();

        },
        async updatePizza(_, { input, id }) {
            const pizza = await Pizza.findById(id);
            
            if(!pizza) {
                throw new Error('Pizza no encontrada');
            }

            return await Pizza.findByIdAndUpdate({ _id: id }, input, { new: true });
        },
        async deletePizza(_, { id }) {
            const pizza = await Pizza.findById(id);
            
            if(!pizza) {
                throw new Error('Pizza no encontrada');
            }

            await Pizza.findByIdAndDelete(id);
            return 'Pizza eliminada';
        }
    }

};

module.exports = resolvers;