import { api } from './lib/api'
import Table from './components/Table'

interface Product{
  id: string
  name: string
  value: number
  quantity: number
  createAt: string
  modifiedAt: string
}

export default async function Home() {

  const response = await api.get('/products')
  const products: Product[] = response.data

  return (
    <Table products={products}></Table>
  )
}
