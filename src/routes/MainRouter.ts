import ProductRouter from './ProductRouter';
import cors from 'cors';

class MainRouter{
    public static initialize(router:any){
        router.use(cors());

        router.use("/products", ProductRouter.initialize(router));

        return router;
    }   
}

export default MainRouter;