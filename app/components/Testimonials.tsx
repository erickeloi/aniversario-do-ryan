'use client'

import { motion } from 'framer-motion'

const quotes = [
    {
      text: "É sexta-feira 13. Hora de festejar como se não houvesse amanhã... porque pode não haver!",
      author: "Sobrevivente Anônimo"
    },
    {
      text: "Eu vim, eu vi, eu gritei... e depois comi bolo!",
      author: "Aventureiro de Aniversário"
    },
    {
      text: "Melhor festa de aniversário de todas! Os sustos foram quase tão bons quanto os presentes.",
      author: "Viciado em Adrenalina"
    }
  ]
  

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Depoimentos Aterrorizantes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <p className="text-lg mb-4 italic">"{quote.text}"</p>
              <p className="text-right text-red-500">- {quote.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

