import PrismaConnector from '../../prisma/PrismaConnector';

export default class ProductApi {
    public static async list(req: any, res: any) {
        const products = await PrismaConnector.prisma.product.findMany();

        res.json(products);
    }

    public static async show(req: any, res: any) {
        const { productId } = req.params;
        const product = await PrismaConnector.prisma.product.findUnique({
            where: { 
                id: parseInt(productId),
            }, 
        });
        
        res.json(product);
    }
}