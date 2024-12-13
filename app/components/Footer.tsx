import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Festa de Aniversário de Sexta-feira 13</h3>
            <p className="text-gray-400">Não perca a Janta de Matar do ano!</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-red-500 transition duration-300">
              <Facebook />
            </a>
            <a href="#" className="text-white hover:text-red-500 transition duration-300">
              <Twitter />
            </a>
            <a href="#" className="text-white hover:text-red-500 transition duration-300">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Participe !
          </button>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 - Janta de Aniversário de Sexta-Feira 13.</p>
          <p>Site feito por Erick Eloi, em seu tempo livre.</p>
        </div>
      </div>
    </footer>
  )
}

