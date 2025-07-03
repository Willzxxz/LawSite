"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    legalArea: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#94754E] to-[#EBCB90]"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-white/90 max-w-5xl mx-auto">
            Precisa de assessoria jurídica? Estamos aqui para ajudar. Entre em
            contato conosco e responderemos o mais breve possível.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-colors bg-white/10 backdrop-blur-sm text-white placeholder-white/70"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-colors bg-white/10 backdrop-blur-sm text-white placeholder-white/70"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-colors bg-white/10 backdrop-blur-sm text-white placeholder-white/70"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label
                  htmlFor="legalArea"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Área Jurídica
                </label>
                <select
                  id="legalArea"
                  name="legalArea"
                  value={formData.legalArea}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border cursor-pointer border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-colors bg-white/10 backdrop-blur-sm text-white"
                >
                  <option value="" className="text-gray-900">
                    Selecione uma área
                  </option>
                  <option value="civil" className="text-gray-900">
                    Direito Civil
                  </option>
                  <option value="trabalhista" className="text-gray-900">
                    Direito Trabalhista
                  </option>
                  <option value="familia" className="text-gray-900">
                    Direito de Família
                  </option>
                  <option value="empresarial" className="text-gray-900">
                    Direito Empresarial
                  </option>
                  <option value="penal" className="text-gray-900">
                    Direito Penal
                  </option>
                  <option value="previdenciario" className="text-gray-900">
                    Direito Previdenciário
                  </option>
                  <option value="outro" className="text-gray-900">
                    Outro
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-colors resize-none bg-white/10 backdrop-blur-sm text-white placeholder-white/70"
                  placeholder="Conte-nos sobre sua situação jurídica..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-[#94754E] px-8 py-4 rounded-4xl text-lg font-semibold hover:bg-black hover:text-white cursor-pointer transition-colors shadow-lg hover:shadow-xl transform duration-200"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Vamos Conversar
              </h3>
              <p className="text-white/90 mb-8 leading-relaxed">
                Estamos aqui para ajudar e responder qualquer dúvida que você
                possa ter. Aguardamos seu contato.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">
                      Endereço do Escritório
                    </h4>
                    <p className="text-white/80">
                      Rua das Flores, 123
                      <br />
                      Sala 456
                      <br />
                      Tijucas, SC - 88210-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">
                      Telefone
                    </h4>
                    <p className="text-white/80">(48) 3334-5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-white/80">
                      contato@cargninadvocacia.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">
                      Horário de Atendimento
                    </h4>
                    <p className="text-white/80">
                      Segunda - Sexta: 08:00 - 18:00
                      <br />
                      Sábado: 08:00 - 12:00
                      <br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-white mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-white">
                    Normalmente respondemos em até 24 horas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
