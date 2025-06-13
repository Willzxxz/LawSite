export default function Team() {
  const teamMembers = [
    {
      name: "Dr. João Cargnin",
      role: "Sócio Fundador",
      description:
        "Advogado especialista em Direito Civil e Empresarial com mais de 20 anos de experiência.",
      image: "/api/placeholder/300/400", // Placeholder for team member photo
      social: {
        linkedin: "#",
        oab: "#",
      },
    },
    {
      name: "Dra. Maria Silva",
      role: "Advogada Trabalhista",
      description:
        "Especialista em Direito do Trabalho com foco em defesa dos direitos dos trabalhadores.",
      image: "/api/placeholder/300/400",
      social: {
        linkedin: "#",
        oab: "#",
      },
    },
    {
      name: "Dr. Carlos Santos",
      role: "Advogado Criminalista",
      description:
        "Especialista em Direito Penal com vasta experiência em defesa criminal e recursos.",
      image: "/api/placeholder/300/400",
      social: {
        linkedin: "#",
        oab: "#",
      },
    },
    {
      name: "Dra. Ana Costa",
      role: "Advogada de Família",
      description:
        "Especialista em Direito de Família e Sucessões, atuando com sensibilidade e competência.",
      image: "/api/placeholder/300/400",
      social: {
        linkedin: "#",
        oab: "#",
      },
    },
  ];

  return (
    <section id="equipe" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#013849]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Conheça Nossa Equipe
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nossa equipe de advogados especializados está dedicada a oferecer
            soluções jurídicas excepcionais e defender seus direitos com
            excelência.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group text-center">
              {/* Photo */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <div className="bg-[#024a5c] border border-[#02354a] h-80 flex items-center justify-center">
                  {/* Placeholder avatar */}
                  <div className="w-32 h-32 bg-[#02354a] rounded-full flex items-center justify-center border border-[#026580]">
                    <svg
                      className="w-16 h-16 text-[#94754E]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Overlay for social links */}
                <div className="absolute inset-0 bg-[#013849] bg-opacity-95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-white hover:text-[#EBCB90] transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                    {member.social.oab && (
                      <a
                        href={member.social.oab}
                        className="text-white hover:text-[#EBCB90] transition-colors"
                        aria-label="OAB"
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
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-[#EBCB90] font-medium mb-3">{member.role}</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
