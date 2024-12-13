'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        <source src="/friday13th-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 text-red-600 drop-shadow-lg"
        >
          Participe de um Jantar de Matar (A Fome)!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl mb-8"
        >
          Edição Sexta Feira 13
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Participe !
        </motion.button>
      </div>
    </section>
  )
}

