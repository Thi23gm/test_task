'use client'
import Link from 'next/link'
import { api } from '../lib/api'
import { useRouter } from 'next/navigation'

interface Product {
  id: string
  name: string
  value: number
  quantity: number
  createAt: string
  modifiedAt: string
}

export default function Table({ products }: { products: Product[] }) {
  const router = useRouter()

  const handleDeleteProduct = async (productId: string) => {
    try {
      await api.delete(`/products/${productId}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        router.push('/')
        router.refresh()
        alert('Produto deletado com sucesso!')
      })
    } catch (error) {
      console.error('Erro ao excluir o produto:', error)
    }
  }

const handleAddProduct = async (productId: string, quantity: number, name: string, value: number) => {
  quantity = quantity+1

  try {
    await api.put(`/products/${productId}`, {
      quantity,
      name,
      value,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'productId': productId,
      },
    }).then(() => {
      router.push('/')
      router.refresh()
    })
  } catch (error) {
    console.error('Erro ao atualizar o produto:', error)
  }
}


const handleRemoveProduct = async (productId: string, quantity: number, name: string, value: number) => {
  quantity = quantity-1

  try {
    await api.put(`/products/${productId}`, {
      quantity,
      name,
      value,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'productId': productId,
      },
    }).then(() => {
      router.push('/')
      router.refresh()
    })
  } catch (error) {
    console.error('Erro ao atualizar o produto:', error)
  }
}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Tabela de Produtos</h1>
          <Link href="/new">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Inserir
            </button>
          </Link>
        </div>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">NOME</th>
              <th className="py-2 px-4 border-b">VALOR</th>
              <th className="py-2 px-4 border-b">QUANTIDADE</th>
              <th className="py-2 px-4 border-b">ADICIONAR</th>
              <th className="py-2 px-4 border-b">REMOVER</th>
              <th className="py-2 px-4 border-b">DELETAR</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b text-center">{product.name}</td>
                <td className="py-2 px-4 border-b text-center">${product.value}</td>
                <td className="py-2 px-4 border-b text-center">{product.quantity}</td>
                <td className="py-2 px-4 border-b text-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 rounded"
                  onClick={() => handleAddProduct(product.id, product.quantity, product.name, product.value)}
                  >
                    Adicionar
                  </button>
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 rounded"
                  onClick={() => handleRemoveProduct(product.id, product.quantity, product.name, product.value)}
                  >
                    Remover
                  </button>
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold text-sm py-2 px-4 rounded"
                  onClick={() => handleDeleteProduct(product.id)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  const response = await api.get('/products')
  const products: Product[] = response.data

  return {
    props: {
      products
    }
  }
}
