import express from 'express';
import ProductApi from '../apis/ProductApi';

class ProductRouter{
    public static initialize(){
        const router = express.Router();

        router.get("/", ProductApi.list);
        router.get("/:productId", ProductApi.show);

        return router;
    }   
}

export default ProductRouter;