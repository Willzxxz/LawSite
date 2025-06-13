import Button from "@/components/general/Button";
import Link from "next/link";

export default function WorkAreas() {
  const workAreas = [
    {
      title: "Direito Civil",
      description:
        "Contratos, responsabilidade civil, direitos reais e questões patrimoniais com expertise e dedicação.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Direito Trabalhista",
      description:
        "Defesa dos direitos trabalhistas, rescisões, processos e consultoria para empregados e empregadores.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Direito de Família",
      description:
        "Divórcio, guarda, pensão alimentícia, inventário e sucessões com sensibilidade e competência.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      title: "Direito Empresarial",
      description:
        "Constituição de empresas, contratos comerciais, compliance e consultoria jurídica empresarial.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Direito Penal",
      description:
        "Defesa criminal, recursos, habeas corpus e acompanhamento processual com estratégia sólida.",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
    },
    {
      title: "Direito Previdenciário",
      description:
        "Aposentadorias, benefícios, revisões do INSS e planejamento previdenciário personalizado.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="atuacao"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#94754E] to-[#EBCB90]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Nossas Áreas de Atuação
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Oferecemos serviços jurídicos especializados em diversas áreas do
            direito, sempre com excelência e dedicação aos nossos clientes.
          </p>
        </div>

        {/* Work Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="text-white mb-6">
                <div className="group-hover:scale-110 transition-transform duration-300 inline-block">
                  {area.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {area.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-white/90 mb-6">
            Precisa de assessoria jurídica especializada?
          </p>
          <Button className="bg-white hover:bg-black hover:text-white  text-[#94754E] px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform transition-all">
            <Link href="/consulta"> Entre em Contato</Link>
          </Button>
          {/* <button className="bg-white text-[#94754E] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            Entre em Contato
          </button> */}
        </div>
      </div>
    </section>
  );
}
