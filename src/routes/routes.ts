import express from "express";
import ProductApi from '../apis/ProductApi';
import cors from 'cors';

const router = express.Router();


router.use(cors());

router.get("/products", ProductApi.list);
router.get("/products/create", ProductApi.create);
router.get("/products/:productId", ProductApi.show);

export default router;