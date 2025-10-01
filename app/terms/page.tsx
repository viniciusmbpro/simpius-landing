'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const translations = {
  pt: {
    title: "Termos de Uso",
    description: "Termos e condições para uso do Simpius",
    backButton: "← Voltar ao Simpius",
    tocTitle: "Índice",
    lastUpdated: "Estes termos são efetivos a partir de 1 de outubro de 2025",
    sections: {
      terms: {
        title: "1. Termos",
        content: [
          "Ao acessar o site Simpius, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.",
          "Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis."
        ]
      },
      license: {
        title: "2. Uso de Licença",
        content: [
          "É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Simpius, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:",
          "• Modificar ou copiar os materiais",
          "• Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial)",
          "• Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Simpius",
          "• Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais",
          "• Transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor",
          "Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Simpius a qualquer momento."
        ]
      },
      disclaimer: {
        title: "3. Isenção de Responsabilidade",
        content: [
          "Os materiais no site da Simpius são fornecidos 'como estão'. Simpius não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.",
          "Além disso, o Simpius não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site."
        ]
      },
      limitations: {
        title: "4. Limitações",
        content: [
          "Em nenhum caso o Simpius ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Simpius, mesmo que Simpius ou um representante autorizado da Simpius tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.",
          "Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos consequentes ou incidentais, essas limitações podem não se aplicar a você."
        ]
      },
      accuracy: {
        title: "5. Precisão dos Materiais",
        content: [
          "Os materiais exibidos no site da Simpius podem incluir erros técnicos, tipográficos ou fotográficos. Simpius não garante que qualquer material em seu site seja preciso, completo ou atual.",
          "Simpius pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Simpius não se compromete a atualizar os materiais."
        ]
      },
      links: {
        title: "6. Links",
        content: [
          "O Simpius não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Simpius do site.",
          "O uso de qualquer site vinculado é por conta e risco do usuário."
        ]
      },
      modifications: {
        title: "7. Modificações",
        content: [
          "O Simpius pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço."
        ]
      },
      law: {
        title: "8. Lei Aplicável",
        content: [
          "Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais brasileiros."
        ]
      }
    }
  },
  en: {
    title: "Terms of Use",
    description: "Terms and conditions for using Simpius",
    backButton: "← Back to Simpius",
    tocTitle: "Table of Contents",
    lastUpdated: "These terms are effective as of October 1, 2025",
    sections: {
      terms: {
        title: "1. Terms",
        content: [
          "By accessing the Simpius website, you agree to comply with these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.",
          "If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law."
        ]
      },
      license: {
        title: "2. Use License",
        content: [
          "Permission is granted to temporarily download one copy of the materials (information or software) on Simpius's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
          "• Modify or copy the materials",
          "• Use the materials for any commercial purpose or for any public display (commercial or non-commercial)",
          "• Attempt to decompile or reverse engineer any software contained on Simpius's website",
          "• Remove any copyright or other proprietary notations from the materials",
          "• Transfer the materials to another person or 'mirror' the materials on any other server",
          "This license shall automatically terminate if you violate any of these restrictions and may be terminated by Simpius at any time."
        ]
      },
      disclaimer: {
        title: "3. Disclaimer",
        content: [
          "The materials on Simpius's website are provided on an 'as is' basis. Simpius makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
          "Further, Simpius does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site."
        ]
      },
      limitations: {
        title: "4. Limitations",
        content: [
          "In no event shall Simpius or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Simpius's website, even if Simpius or a Simpius authorized representative has been notified orally or in writing of the possibility of such damage.",
          "Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you."
        ]
      },
      accuracy: {
        title: "5. Accuracy of Materials",
        content: [
          "The materials appearing on Simpius's website could include technical, typographical, or photographic errors. Simpius does not warrant that any of the materials on its website are accurate, complete, or current.",
          "Simpius may make changes to the materials contained on its website at any time without notice. However Simpius does not make any commitment to update the materials."
        ]
      },
      links: {
        title: "6. Links",
        content: [
          "Simpius has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Simpius of the site.",
          "Use of any such linked website is at the user's own risk."
        ]
      },
      modifications: {
        title: "7. Modifications",
        content: [
          "Simpius may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service."
        ]
      },
      law: {
        title: "8. Governing Law",
        content: [
          "These terms and conditions are governed by and construed in accordance with the laws of Brazil and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location."
        ]
      }
    }
  },
  es: {
    title: "Términos de Uso",
    description: "Términos y condiciones para usar Simpius",
    backButton: "← Volver a Simpius",
    tocTitle: "Índice",
    lastUpdated: "Estos términos son efectivos a partir del 1 de octubre de 2025",
    sections: {
      terms: {
        title: "1. Términos",
        content: [
          "Al acceder al sitio web de Simpius, usted acepta cumplir con estos términos de servicio, todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de cualquier ley local aplicable.",
          "Si no está de acuerdo con alguno de estos términos, tiene prohibido usar o acceder a este sitio. Los materiales contenidos en este sitio web están protegidos por las leyes de derechos de autor y marcas comerciales aplicables."
        ]
      },
      license: {
        title: "2. Licencia de Uso",
        content: [
          "Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de Simpius para visualización transitoria personal y no comercial únicamente. Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia usted no puede:",
          "• Modificar o copiar los materiales",
          "• Usar los materiales para cualquier propósito comercial o para cualquier exhibición pública (comercial o no comercial)",
          "• Intentar descompilar o hacer ingeniería inversa de cualquier software contenido en el sitio web de Simpius",
          "• Eliminar cualquier derecho de autor u otras notaciones de propiedad de los materiales",
          "• Transferir los materiales a otra persona o 'reflejar' los materiales en cualquier otro servidor",
          "Esta licencia terminará automáticamente si viola alguna de estas restricciones y puede ser terminada por Simpius en cualquier momento."
        ]
      },
      disclaimer: {
        title: "3. Descargo de Responsabilidad",
        content: [
          "Los materiales en el sitio web de Simpius se proporcionan 'tal como están'. Simpius no ofrece garantías, expresas o implícitas, y por este medio renuncia y niega todas las demás garantías, incluyendo sin limitación, garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular, o no infracción de propiedad intelectual u otra violación de derechos.",
          "Además, Simpius no garantiza ni hace ninguna representación con respecto a la precisión, los resultados probables, o la confiabilidad del uso de los materiales en su sitio web o de otra manera relacionado con dichos materiales o en cualquier sitio vinculado a este sitio."
        ]
      },
      limitations: {
        title: "4. Limitaciones",
        content: [
          "En ningún caso Simpius o sus proveedores serán responsables de cualquier daño (incluyendo, sin limitación, daños por pérdida de datos o beneficios, o debido a interrupción del negocio) que surja del uso o la incapacidad de usar los materiales en el sitio web de Simpius, incluso si Simpius o un representante autorizado de Simpius ha sido notificado oralmente o por escrito de la posibilidad de tal daño.",
          "Debido a que algunas jurisdicciones no permiten limitaciones en garantías implícitas, o limitaciones de responsabilidad por daños consecuentes o incidentales, estas limitaciones pueden no aplicarse a usted."
        ]
      },
      accuracy: {
        title: "5. Precisión de los Materiales",
        content: [
          "Los materiales que aparecen en el sitio web de Simpius podrían incluir errores técnicos, tipográficos o fotográficos. Simpius no garantiza que cualquiera de los materiales en su sitio web sean precisos, completos o actuales.",
          "Simpius puede hacer cambios a los materiales contenidos en su sitio web en cualquier momento sin previo aviso. Sin embargo, Simpius no se compromete a actualizar los materiales."
        ]
      },
      links: {
        title: "6. Enlaces",
        content: [
          "Simpius no ha revisado todos los sitios vinculados a nuestro sitio web y no es responsable del contenido de ningún sitio vinculado. La inclusión de cualquier enlace no implica respaldo por parte de Simpius del sitio.",
          "El uso de cualquier sitio web vinculado es bajo el propio riesgo del usuario."
        ]
      },
      modifications: {
        title: "7. Modificaciones",
        content: [
          "Simpius puede revisar estos términos de servicio para su sitio web en cualquier momento sin previo aviso. Al usar este sitio web, usted acepta estar sujeto a la versión actual de estos términos de servicio."
        ]
      },
      law: {
        title: "8. Ley Aplicable",
        content: [
          "Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de Brasil y usted se somete irrevocablemente a la jurisdicción exclusiva de los tribunales en ese estado o ubicación."
        ]
      }
    }
  }
};

export default function TermsOfUse() {
  const [currentLang, setCurrentLang] = useState<'pt' | 'en' | 'es'>('pt');
  const t = translations[currentLang];

  const switchLanguage = (lang: 'pt' | 'en' | 'es') => {
    setCurrentLang(lang);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-between items-center mb-8">
              <Link 
                href="/"
                className="bg-white/80 backdrop-blur-sm text-slate-900 px-6 py-3 rounded-full font-medium border border-slate-200 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-slate-900/10"
              >
                {t.backButton}
              </Link>
              
              <div className="flex gap-2 bg-white/80 backdrop-blur-sm rounded-full p-1 border border-slate-200">
                <button
                  onClick={() => switchLanguage('pt')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    currentLang === 'pt' 
                      ? 'bg-slate-900 text-white' 
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  PT
                </button>
                <button
                  onClick={() => switchLanguage('en')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    currentLang === 'en' 
                      ? 'bg-slate-900 text-white' 
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => switchLanguage('es')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    currentLang === 'es' 
                      ? 'bg-slate-900 text-white' 
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  ES
                </button>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t.description}
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">{t.tocTitle}</h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(t.sections).map(([key, section]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="block p-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {Object.entries(t.sections).map(([key, section]) => (
              <section
                key={key}
                id={key}
                className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl p-8"
              >
                <h2 className="text-2xl font-semibold mb-6 text-slate-900 border-b border-slate-200 pb-4">
                  {section.title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  {section.content.map((paragraph, index) => (
                    <p key={index} className="text-slate-600 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Last Updated */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center mt-12">
            <p className="text-emerald-700 font-medium">
              {t.lastUpdated}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}