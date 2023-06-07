import { PrismaClient } from "@prisma/client";

// function para fazer log de todas as querys que rodar no back-end
export const prisma = new PrismaClient({
    log: ['query'],
});