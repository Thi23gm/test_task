import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const app = fastify();
const prisma = new PrismaClient();

app.listen({
    port: 3333,
    }).then(() => {
        console.log("HTTP server running on http://localhost:3333");
}); 

app.get('/products', async () => {
    const products = await prisma.prduct.findMany();
    return products;
});


/*
* GET -> Listar
* POST -> Criar
* PUT -> Atualizar
* PATCH -> Atualizar variavel especifica
* DELETE -> Deletar
*/