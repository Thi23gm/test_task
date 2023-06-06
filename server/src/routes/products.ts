import { FastifyInstance } from "fastify";
import {prisma} from "../lib/prisma";
import { z } from "zod";

const numberOrFloat = z.number().refine((value) => {
    return Number.isInteger(value) || typeof value === "number";
}, "Must be a number or float");

export async function productsRoutes(app: FastifyInstance){

    // LISTAR
    app.get('/products', async () => {
        const products = await prisma.prduct.findMany({
            orderBy: {
                createAt: "asc"
            }
        });
        return products;
    });


    // DELETE
    app.delete('/products/:id', async (request) => {
        const parseSchema = z.object({
            id: z.string().uuid(),
        })

        const { id } = parseSchema.parse(request.params)

        await prisma.prduct.delete({
            where:{
                id,
            }
        })
    });


    // UPDATE
    app.put('/products/:id', async (request) => {

        const parseSchema = z.object({
            id: z.string().uuid(),
        })

        const { id } = parseSchema.parse(request.params)

        const bodySchema = z.object({
            quantity: z.number().int(),
            name: z.string(),
            value: numberOrFloat,
        })

        const {quantity, name, value} = bodySchema.parse(request.body);

        const product = await prisma.prduct.update({
            where: {
                id,
            },
            data:{
                quantity,
                name,
                value,
            }
        })

        return product;
        
    });


    // CREATE
    app.post('/products', async (request) => {
        const bodySchema = z.object({
            quantity: z.number().int(),
            name: z.string(),
            value: numberOrFloat,
        })

        const {quantity, name, value} = bodySchema.parse(request.body);

        const poduct = await prisma.prduct.create({
            data: {
                quantity, 
                name,
                value,
            }
        })

        return poduct;
    });
}

/*
* GET -> Listar
* POST -> Criar
* PUT -> Atualizar
* PATCH -> Atualizar variavel especifica
* DELETE -> Deletar
*/