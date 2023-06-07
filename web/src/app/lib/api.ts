import axios from 'axios';

// Criação de uma instância do axios com a configuração da base URL
export const api = axios.create({
  baseURL: 'http://localhost:3333',
});
