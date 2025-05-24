import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  createdAt: { type: Date, default: Date.now }
});

export default model('Product', productSchema);
