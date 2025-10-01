'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailForm from '@/components/EmailForm';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              {/* Logo */}
              <div className="mb-12 animate-fade-in">
                <Image
                  src="/logo_simpius_semfundo_v1.png"
                  alt="Simpius"
                  width={240}
                  height={120}
                  className="mx-auto drop-shadow-lg hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent leading-tight animate-fade-in-up">
                Seu reino intelectual, finalmente em ordem.
              </h1>

              {/* Subtitle */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal text-slate-600 mb-12 leading-relaxed animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
                Simpius é o framework ativo que transforma seu conhecimento em resultados. 
                Uma nova era para o seu segundo cérebro está chegando.
              </h2>

              {/* Email Form */}
              <div className="animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
                <EmailForm />
              </div>

              {/* Trust Text */}
              <p className="text-slate-500 text-sm italic mt-6 animate-fade-in-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
                Junte-se à nossa lista de pioneiros. Sem spam, apenas insights sobre o lançamento.
              </p>
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-slate-900/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-slate-600/5 to-transparent rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto animate-fade-in-up [animation-delay:800ms] opacity-0 [animation-fill-mode:forwards]">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 text-center bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                Cansado do esforço desperdiçado?
              </h2>
              <div className="prose prose-lg sm:prose-xl lg:prose-2xl mx-auto text-center">
                <p className="text-slate-600 leading-relaxed">
                  Horas acumulando conhecimento, projetos iniciados e nunca terminados, a frustração com ferramentas genéricas
                  que exigem mais configuração do que geram resultados. Nós entendemos essa dor. Simpius foi criado para ser o
                  oposto: uma solução de <span className="font-semibold text-slate-900">input rápido</span> que <span className="font-semibold text-slate-900">conecta seus
                  pontos</span> e devolve a você o bem mais precioso: <span className="font-semibold text-slate-900">a paz de espírito de quem está
                  no controle.</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
