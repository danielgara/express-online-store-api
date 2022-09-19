import { Prisma, PrismaClient } from '@prisma/client';

export default class PrismaConnector {
    public static prisma = new PrismaClient();
}