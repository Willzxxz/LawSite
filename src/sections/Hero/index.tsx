import Link from "next/link";
import Image from "next/image";
import Button from "@/components/general/Button";

export default function Hero() {
  return (
    <section className="relative pt-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient overlay for center content - ALL SCREENS */}
      <div className="absolute inset-0 z-0">
        <div className="max-w-7xl mx-auto h-full bg-gradient-to-r from-[#94754E] via-[#B8935A] to-[#EBCB90]"></div>
        {/* Right side solid color - DESKTOP ONLY */}
        <div
          className="absolute top-0 right-0 h-full bg-[#EBCB90] hidden lg:block"
          style={{ width: "calc((100vw - min(1280px, 100vw)) / 2)" }}
        ></div>
      </div>

      {/* SVG Vector Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          {/* Mobile SVG */}
          <div className="relative w-full h-full transform translate-x-55 translate-y-0 scale-425 lg:hidden">
            <Image
              src="/Vectorhero.svg"
              alt="Hero Vector Background"
              fill
              className="object-contain opacity-100"
              priority
            />
          </div>
          {/* Desktop SVG */}
          <div className="relative w-full h-full transform translate-x-10 translate-y-5 scale-210 hidden lg:block">
            <Image
              src="/Vectorhero.svg"
              alt="Hero Vector Background"
              fill
              className="object-contain opacity-100"
              priority
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Main Headline - 65px */}
            <h1 className="text-[45px] lg:text-[65px] font-bold text-white leading-tight">
              Advocacia de
              <br />
              <span className="text-[#94754E] lg:text-[#94754E]">
                Excelência
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-[18px] lg:text-[20px] text-white/90 leading-relaxed font-light">
              Defendemos seus direitos com competência, experiência e dedicação
              total.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-10">
              <Button className="bg-white hover:bg-black hover:text-white text-[#94754E] px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transform transition-all">
                <Link href="/consulta">Agendar Consulta</Link>
              </Button>
              <Button className="bg-[#94754E] hover:bg-black text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold hover:text-white transition-colors shadow-lg hover:shadow-xl transform duration-200">
                <Link href="/sobre">Conheça Nosso Trabalho</Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              <Image
                src="/business-men.png"
                alt="Advogados Profissionais"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
