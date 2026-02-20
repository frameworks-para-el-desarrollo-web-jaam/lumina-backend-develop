const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: String, // ID único para cada producto, puede ser generado automáticamente por MongoDB o asignado manualmente
  name: { type: String, required: true },
  brand: String,
  category: String, // maquillaje, perfume etc...
  productType: String, // labial, sombra, etc...
  gender: String, // masculino, femenino, unisex
  price: Number,
  description: String,
  likes: { type: Number, default: 0 },
  photo: String, // URL de la foto del producto
  discount: Number, // Porcentaje de descuento, por ejemplo 20 para un 20% de descuento
});

module.exports = mongoose.model('Product', productSchema);
