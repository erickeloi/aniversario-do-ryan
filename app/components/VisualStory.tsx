'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function VisualStory() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section ref={ref} className="py-16 bg-gray-900 relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('/camp-crystal-lake.jpg')] bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Uma Noite a ser Lembrada</h2>
          <p className="text-lg mb-8">
          Entre no mundo sombrio de Crystal Lake (Casa Grande, Muaná/Pará), onde sombras espreitam e mistérios abundam. 
          Nossa festa de aniversário de Sexta-feira 13 promete uma noite emocionante repleta de comidas de arrepiar, 
          contos fantasmagóricos e memórias inesquecíveis. 
          Você é corajoso o suficiente para se juntar a nós?
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Saiba Mais
          </button>
        </motion.div>
      </div>
    </section>
  )
}

