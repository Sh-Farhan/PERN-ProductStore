import express from "express";
import { getProducts, createProduct, deleteProduct, getProduct, updateProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.put("/:id", deleteProduct)

export default router;
