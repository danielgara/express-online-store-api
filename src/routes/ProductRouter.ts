import ProductApi from '../apis/ProductApi';

class ProductRouter{
    public static initialize(router:any){
        router.get("/", ProductApi.list);
        router.get("/show/:productId", ProductApi.show);

        return router;
    }   
}

export default ProductRouter;