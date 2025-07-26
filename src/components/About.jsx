import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Target, ShieldCheck, Users } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay },
    },
  });

  const features = [
    {
      icon: <Target size={32} className="text-brand-accent" />,
      title: 'Nossa Missão',
      description:
        'Entregar projetos de construção que superem as expectativas, combinando inovação, qualidade e sustentabilidade para criar valor duradouro para nossos clientes e para a sociedade.',
    },
    {
      icon: <ShieldCheck size={32} className="text-brand-accent" />,
      title: 'Nossa Visão',
      description:
        'Ser a empresa de construção referência no Brasil, reconhecida pela excelência operacional, pelo compromisso com a segurança e pela capacidade de transformar desafios em oportunidades.',
    },
    {
      icon: <Users size={32} className="text-brand-accent" />,
      title: 'Nossos Valores',
      description:
        'Integridade, compromisso com o cliente, inovação contínua e responsabilidade socioambiental são os pilares que guiam todas as nossas ações e decisões.',
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-brand-primary">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text">
            Compromisso com a <span className="gradient-text">Excelência</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Desde nossa fundação, a NTC Brasil é movida por um propósito claro:
            edificar o futuro com bases sólidas de qualidade e confiança.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col text-center items-center p-8 bg-brand-light-gray rounded-xl shadow-subtle hover:shadow-medium transition-shadow duration-300 transform hover:-translate-y-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants(index * 0.1)}
            >
              <div className="mb-5 bg-brand-secondary/20 p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
