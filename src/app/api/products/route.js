import { prisma } from "../../../lib/prisma"

export async function GET() {

    const products = await prisma.product.findMany();

    return Response.json(products);
}

export async function POST(request) {

    const body = await request.json();

    const product = await prisma.product.create({
        data: {
            title_ru: body.title_ru,
            title_en: body.title_en,
            title_uz: body.title_uz,

            description_ru: body.description_ru,
            description_en: body.description_en,
            description_uz: body.description_uz,

            image: body.image,
        },
    });

    return Response.json(product)
}