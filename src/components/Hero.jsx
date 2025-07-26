import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-brand-light-gray overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-secondary/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-4000"></div>

      <div className="container mx-auto section-padding relative z-10">
        <motion.div
          className="max-w-3xl text-center mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand-text tracking-tighter mb-6"
            variants={itemVariants}
          >
            Construindo o futuro com{' '}
            <span className="gradient-text">responsabilidade</span> e{' '}
            <span className="gradient-text">inovação</span>.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
            variants={itemVariants}
          >
            Excelência em cada detalhe, compromisso em cada projeto. A NTC
            Brasil transforma suas ideias em realidade com soluções de
            construção de ponta.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            variants={itemVariants}
          >
            <a href="#contato" className="btn btn-primary group">
              Transforme sua ideia
              <ArrowRight
                className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1"
                size={20}
              />
            </a>
            <a href="#diferenciais" className="btn btn-secondary">
              Nossos Diferenciais
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
