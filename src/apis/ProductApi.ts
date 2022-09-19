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

    public static async create(req: any, res: any) {
        /*const product = await PrismaConnector.prisma.product.create({
            data: {
              name: 'Glasses',
              description: 'Best Glasses',
              image: 'game.png',
              price: 100
            },
        });*/
        res.json("Create");
    }
}