import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KSC Advogados",
  description:
    "Advocacia de excelência em diversas áreas do direito. Soluções jurídicas inovadoras, equipe experiente e atendimento personalizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-[family-name:var(--font-montserrat)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
