import { Schema, model } from 'mongoose';

const reviewSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  author: String,
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
  createdAt: { type: Date, default: Date.now }
});

export default model('Review', reviewSchema);
