"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      name: "Carlos Eduardo Silva",
      company: "Empresa de Tecnologia",
      role: "CEO",
      content:
        "Excelente trabalho! Resolveram nossa questão trabalhista de forma rápida e eficiente. A equipe foi profissional, responsiva e realmente entendeu nossas necessidades.",
      avatar: "CS",
    },
    {
      name: "Maria Fernanda Costa",
      company: "Comércio Local",
      role: "Proprietária",
      content:
        "A qualidade do atendimento e atenção aos detalhes é excepcional. Conseguimos resolver nosso processo de divórcio de forma amigável e justa para ambas as partes.",
      avatar: "MC",
    },
    {
      name: "João Roberto Santos",
      company: "Indústria Metalúrgica",
      role: "Diretor",
      content:
        "Do início ao fim, todo o processo foi transparente e eficiente. Nos ajudaram a constituir nossa empresa e resolver questões contratuais complexas.",
      avatar: "JS",
    },
    {
      name: "Ana Paula Oliveira",
      company: "Consultoria Médica",
      role: "Sócia",
      content:
        "A expertise técnica e abordagem inovadora nos ajudaram a resolver desafios complexos. O resultado foi robusto, justo e exatamente o que esperávamos.",
      avatar: "AO",
    },
    {
      name: "Ricardo Mendes",
      company: "Construtora",
      role: "Proprietário",
      content:
        "Resolveram nosso problema de regularização fundiária com total competência. Processo que durava anos foi finalizado em poucos meses. Recomendo fortemente.",
      avatar: "RM",
    },
    {
      name: "Patrícia Lima",
      company: "Restaurante Familiar",
      role: "Gerente",
      content:
        "Nos auxiliaram com questões trabalhistas e contratuais. O atendimento foi excepcional e conseguimos resolver tudo sem maiores complicações.",
      avatar: "PL",
    },
    {
      name: "Fernando Rocha",
      company: "Clínica Odontológica",
      role: "Dentista",
      content:
        "Precisava de assessoria para abrir minha clínica e cuidar das questões previdenciárias. Serviço impecável e orientação clara em todos os processos.",
      avatar: "FR",
    },
    {
      name: "Luciana Alves",
      company: "Boutique de Moda",
      role: "Empresária",
      content:
        "Excelente suporte jurídico para questões comerciais e tributárias. Equipe sempre disponível e soluções práticas para nossos desafios empresariais.",
      avatar: "LA",
    },
  ];

  // Group testimonials into pairs for slides
  const slides = [
    [testimonials[0], testimonials[1]], // Carlos & Maria
    [testimonials[2], testimonials[3]], // João & Ana
    [testimonials[4], testimonials[5]], // Ricardo & Patrícia
    [testimonials[6], testimonials[7]], // Fernando & Luciana
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, slides.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#011223]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-300 max-w-5xl mx-auto">
            Não acredite apenas em nossa palavra. Veja o que nossos clientes
            satisfeitos têm a dizer sobre trabalhar conosco.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative max-w-6xl mx-auto mb-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-[#022a3d] border border-[#011a29] rounded-xl p-8 shadow-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {slides[currentIndex].map((testimonial, index) => (
                  <div key={index} className="bg-[#033651] rounded-lg p-6">
                    {/* Content */}
                    <blockquote className="text-gray-300 mb-6 leading-relaxed text-base">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#94754E] rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-[#EBCB90]">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-[#94754E] hover:bg-[#EBCB90] hover:text-[#011223] text-white transition-colors"
                aria-label="Depoimento anterior"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-[#EBCB90]" : "bg-gray-500"
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-[#94754E] hover:bg-[#EBCB90] hover:text-[#011223] text-white transition-colors"
                aria-label="Próximo depoimento"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
