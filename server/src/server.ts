import fastify from 'fastify';
import cors from "@fastify/cors";
import { productsRoutes } from './routes/products';

const app = fastify();

// Registro do plugin Fastify CORS para permitir requisições de origens diferentes
app.register(cors, {
    origin: true,
})

// Registro das rotas relacionadas aos produtos
app.register(productsRoutes)

// Inicialização do servidor HTTP
app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP server running on http://localhost:3333");
});
