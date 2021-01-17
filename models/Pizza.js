const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let pizzaSchema = new Schema({
    codigo: {
        type: String,
        required: [true, 'El código es requerido.'],
        trim: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido.'],
        trim: true,
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es requerida.'],
        trim: true,
    },
    precio: {
        type: Number,
        required: [true, 'El precio es requerido.'],
        trim: true,
    },
    stock: {
        type: Boolean,
        default: true,
    }
});

module.exports = mongoose.model('Pizza', pizzaSchema);