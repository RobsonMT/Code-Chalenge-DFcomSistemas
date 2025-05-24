import express from "express";
import Product from "../models/Product";
import Review from "../models/Review";

const router = express.Router();

router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
});

router.get("/", async (_, res) => {
  const products = await Product.find();
  res.json(products);
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Produto não encontrado" });
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: "ID inválido" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    await Review.deleteMany({ productId: req.params.id });

    res.json({ message: "Produto e avaliações deletados com sucesso" });
  } catch (err) {
    res.status(400).json({ message: "Erro ao deletar produto" });
  }
});

router.get("/:id/reviews", async (req, res) => {
  const reviews = await Review.find({ productId: req.params.id });
  res.json(reviews);
});

router.get("/:id/average-rating", async (req, res) => {
  const reviews = await Review.find({ productId: req.params.id });
  const avg =
    reviews.reduce((sum, r) => sum + (r.rating ?? 0), 0) /
    (reviews.length || 1);

  res.json({ averageRating: avg.toFixed(1) });
});

export default router;
