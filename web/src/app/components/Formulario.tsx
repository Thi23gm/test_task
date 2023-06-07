'use client'
import { api } from '../lib/api'
import { useRouter } from 'next/navigation'

export function Formulario(){
  const router = useRouter()

  async function handleCreateProduct(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    const formData = new FormData(event.currentTarget);
  
    const name = formData.get('name') as string;
    const value = parseFloat(formData.get('value') as string);
    const quantity = parseInt(formData.get('quantity') as string, 10);
  
    console.log(name, value, quantity);
  
    await api.post('/products', {
      name,
      value,
      quantity,
    }).then(() => {
      alert('Produto criado com sucesso');
    }).catch((error) => {
      console.error('Erro ao criar produto:', error);
    });

    router.push('/')
    router.refresh()
  }

    return(
      <form onSubmit={handleCreateProduct}>
          <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-center">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="text-center border mt-1 block w-64 mx-auto h-7 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="value" className="block text-sm font-medium text-gray-700 text-center">
                Valor
              </label>
              <input
                type="number"
                step="0.01"
                id="value"
                name="value"
                required
                className="text-center border mt-1 block w-40 mx-auto h-7 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 text-center">
                Quantidade
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                required
                className="text-center border mt-1 block w-40 mx-auto h-7 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            
            <div className="flex justify-center">
              <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Enviar
              </button>
            </div>
      </form>
    )
}