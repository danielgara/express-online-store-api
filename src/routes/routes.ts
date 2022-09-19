import express from "express";
import ProductApi from '../apis/ProductApi';

const router = express.Router();

router.get("/products", ProductApi.list);
router.get("/products/create", ProductApi.create);
router.get("/products/:productId", ProductApi.show);

export default router;