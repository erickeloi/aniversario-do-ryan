'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Skull } from 'lucide-react'

const eventDate = new Date('2024-12-13T18:30:00')

export default function EventHighlights() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  function getTimeLeft() {
    const difference = +eventDate - +new Date()
    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60)
    }
  }

  const highlights = [
    { icon: Calendar, text: 'Sexta Feira, 13 de Dezembro, 2024' },
    { icon: Clock, text: '18:30 PM' },
    { icon: MapPin, text: 'Crystal Lake (Casa Grande)' },
    { icon: Skull, text: 'Jantar de Aniversário!' }
  ]

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Destaques do Evento</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <item.icon className="w-12 h-12 mb-4 text-red-500" />
              <p className="text-lg text-center">{item.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4 text-center">Contagem Regressiva para o Terror</h3>
          <div className="flex justify-center space-x-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="text-4xl font-bold">{value}</div>
                <div className="text-sm uppercase">{unit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

