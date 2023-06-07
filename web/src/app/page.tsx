import { Table } from './components/Table'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Tabela de Produtos</h1>
          <Link href="/new"><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Inserir</button></Link>
        </div>
        <Table></Table>
      </div>
    </main>
  )
}
