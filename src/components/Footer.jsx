import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753483216803_0.png';

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Contato', href: '#contato' },
  ];

  const socialLinks = [
    { icon: <Linkedin size={24} />, href: '#', name: 'LinkedIn' },
    { icon: <Instagram size={24} />, href: '#', name: 'Instagram' },
    { icon: <Facebook size={24} />, href: '#', name: 'Facebook' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.footer
      className="bg-brand-accent text-brand-primary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 text-center md:text-left">
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <a href="#inicio" className="mb-6">
              <img
                src={logoUrl}
                alt="NTC Brasil Logo"
                className="h-14 w-auto bg-white p-2 rounded-md"
              />
            </a>
            <p className="max-w-sm text-brand-primary/80 leading-relaxed">
              Construindo o futuro com responsabilidade e inovação. Excelência
              em cada detalhe, compromisso em cada projeto.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6">
              Navegação
            </h4>
            <ul className="space-y-4">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-primary/80 hover:text-brand-primary hover:underline transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6">
              Siga-nos
            </h4>
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-brand-primary/80 hover:text-brand-primary hover:scale-110 transform transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/20 mt-12">
        <div className="container mx-auto px-6 py-6 text-center text-sm text-brand-primary/70">
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
