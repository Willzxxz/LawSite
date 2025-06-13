export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r to-[#012f40] from-[#011d2e]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Sobre Nosso Escritório
            </h2>
            <p className="text-lg text-white mb-6 leading-relaxed">
              Somos um escritório de advocacia comprometido em oferecer soluções
              jurídicas inovadoras e eficazes. Com anos de experiência e paixão
              pela excelência, ajudamos nossos clientes a alcançar seus
              objetivos com segurança jurídica.
            </p>
            <p className="text-lg text-white mb-8 leading-relaxed">
              Nossa missão é prestar serviços jurídicos de alta qualidade,
              mantendo os mais altos padrões de profissionalismo e satisfação do
              cliente. Acreditamos na construção de relacionamentos duradouros
              baseados na confiança e sucesso mútuo.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-sm text-white/80">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">1000+</div>
                <div className="text-sm text-white/80">Casos Resolvidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-sm text-white/80">Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="lg:order-first">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-96 flex items-center justify-center border border-white/20">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/30">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Excelência Jurídica
                  </h3>
                  <p className="text-white/80">
                    Defendendo seus direitos com competência e dedicação
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/30 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
