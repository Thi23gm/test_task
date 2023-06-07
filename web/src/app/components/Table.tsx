import Link from "next/link";

export function Table(){
    return (
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
        <tr>
          <td className="py-2 px-4 border-b text-center">Produto 1</td>
          <td className="py-2 px-4 border-b text-center">$10.00</td>
          <td className="py-2 px-4 border-b text-center">5</td>
          <td className="py-2 px-4 border-b text-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 rounded">Adicionar</button>
          </td>
          <td className="py-2 px-4 border-b text-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 rounded">Remover</button>
          </td>
          <td className="py-2 px-4 border-b text-center">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold text-sm py-2 px-4 rounded">Deletar</button>
          </td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b text-center">Produto 2</td>
          <td className="py-2 px-4 border-b text-center">$15.00</td>
          <td className="py-2 px-4 border-b text-center">10</td>
          <td className="py-2 px-4 border-b text-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 rounded">Adicionar</button>
          </td>
          <td className="py-2 px-4 border-b text-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 rounded">Remover</button>
          </td>
          <td className="py-2 px-4 border-b text-center">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold text-sm py-2 px-4 rounded">Deletar</button>
          </td>
        </tr>
      </tbody>
    </table>
    )
}