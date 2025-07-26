import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Leaf, Gem, Shield } from 'lucide-react';

export default function Services() {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const services = [
    {
      icon: <Zap className="h-10 w-10 text-brand-primary" />,
      title: 'Inovação Tecnológica',
      description:
        'Utilizamos as mais recentes tecnologias e metodologias construtivas para garantir eficiência, precisão e otimização de recursos em todos os projetos.',
    },
    {
      icon: <Leaf className="h-10 w-10 text-brand-primary" />,
      title: 'Construção Sustentável',
      description:
        'Nosso compromisso com o meio ambiente se reflete em práticas sustentáveis, desde a escolha de materiais até a gestão de resíduos e eficiência energética.',
    },
    {
      icon: <Gem className="h-10 w-10 text-brand-primary" />,
      title: 'Qualidade Superior',
      description:
        'Mantemos um rigoroso controle de qualidade em todas as etapas, assegurando que cada detalhe do projeto atenda aos mais altos padrões de excelência e durabilidade.',
    },
    {
      icon: <Shield className="h-10 w-10 text-brand-primary" />,
      title: 'Segurança em Primeiro Lugar',
      description:
        'A segurança de nossa equipe, clientes e da comunidade é nossa prioridade máxima. Implementamos protocolos rígidos para garantir um ambiente de trabalho seguro.',
    },
  ];

  return (
    <section id="diferenciais" className="section-padding bg-brand-light-gray">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text">
            Nossos <span className="gradient-text">Diferenciais</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            O que nos torna únicos no mercado da construção.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col p-8 bg-brand-accent rounded-2xl shadow-medium text-brand-primary"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-6 bg-white/20 p-4 rounded-xl self-start">
                {service.icon}
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-brand-primary/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
