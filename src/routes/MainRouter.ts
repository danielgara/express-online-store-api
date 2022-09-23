import express from 'express';
import ProductRouter from './ProductRouter';
import cors from 'cors';

class MainRouter{
    public static initialize(){
        const router = express.Router();

        router.use(cors());
        router.use("/products", ProductRouter.initialize());

        return router;
    }   
}

export default MainRouter;