import Link from 'next/link';
import { Formulario } from '../components/Formulario';

export default function New() {

    const handleSubmit = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      // Lógica para enviar os dados do formulário
    };
  
    return (
      <main className="flex min-h-screen justify-center p-24">
        <div className="container">
        <div className="flex justify-start mb-4">
            <Link href='/' className="text-black-500 hover:text-black-700 text-4xl">🔙</Link>
        </div>
          <h1 className="text-2xl font-bold text-center mb-4">Formulário de Criação de Produto</h1>
       <Formulario></Formulario>
       </div>
      </main>
    );
  }
  