import express from 'express';
import Review from '../models/Review';

const router = express.Router();

router.post('/', async (req, res) => {
  const review = await Review.create(req.body);
  res.status(201).json(review);
});

export default router;
