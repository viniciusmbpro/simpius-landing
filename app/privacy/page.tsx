'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const translations = {
  pt: {
    title: "Política de Privacidade",
    description: "Como coletamos, usamos e protegemos suas informações pessoais",
    backButton: "← Voltar ao Simpius",
    tocTitle: "Índice",
    lastUpdated: "Esta política é efetiva a partir de 1 de outubro de 2025",
    sections: {
      introduction: {
        title: "Introdução",
        content: [
          "A sua privacidade é importante para nós. É política do Simpius respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Simpius, e outros sites que possuímos e operamos.",
          "Esta política de privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você usa nossos serviços."
        ]
      },
      collection: {
        title: "Coleta de Informações",
        content: [
          "Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.",
          "Informações que coletamos:",
          "• Informações de contato: Nome, endereço de e-mail",
          "• Informações técnicas: Endereço IP, tipo de navegador, páginas visitadas",
          "• Informações de uso: Como você interage com nosso site e serviços"
        ]
      },
      usage: {
        title: "Uso das Informações",
        content: [
          "Utilizamos as informações coletadas para:",
          "• Fornecer e melhorar nossos serviços",
          "• Comunicar atualizações e novidades sobre o Simpius",
          "• Responder às suas solicitações e fornecer suporte",
          "• Personalizar sua experiência em nosso site",
          "• Cumprir obrigações legais e regulamentares"
        ]
      },
      protection: {
        title: "Proteção de Dados",
        content: [
          "Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.",
          "Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais."
        ]
      },
      sharing: {
        title: "Compartilhamento de Informações",
        content: [
          "Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando:",
          "• Exigido por lei ou processo legal",
          "• Necessário para proteger nossos direitos ou propriedade",
          "• Com seu consentimento explícito",
          "• Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)"
        ]
      },
      contact: {
        title: "Contato",
        content: [
          "Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através do e-mail: privacy@simpius.com",
          "Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados."
        ]
      }
    }
  },
  en: {
    title: "Privacy Policy",
    description: "How we collect, use and protect your personal information",
    backButton: "← Back to Simpius",
    tocTitle: "Table of Contents",
    lastUpdated: "This policy is effective as of October 1, 2025",
    sections: {
      introduction: {
        title: "Introduction",
        content: [
          "Your privacy is important to us. It is Simpius's policy to respect your privacy regarding any information we may collect from the Simpius website, and other sites we own and operate.",
          "This privacy policy explains how we collect, use, store and protect your personal information when you use our services."
        ]
      },
      collection: {
        title: "Information Collection",
        content: [
          "We only ask for personal information when we truly need it to provide you with a service. We do it by fair and lawful means, with your knowledge and consent.",
          "Information we collect:",
          "• Contact information: Name, email address",
          "• Technical information: IP address, browser type, pages visited",
          "• Usage information: How you interact with our website and services"
        ]
      },
      usage: {
        title: "Use of Information",
        content: [
          "We use the collected information to:",
          "• Provide and improve our services",
          "• Communicate updates and news about Simpius",
          "• Respond to your requests and provide support",
          "• Personalize your experience on our website",
          "• Comply with legal and regulatory obligations"
        ]
      },
      protection: {
        title: "Data Protection",
        content: [
          "We only retain collected information for as long as necessary to provide you with the requested service. When we store data, we protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.",
          "We implement appropriate technical and organizational security measures to protect your personal information."
        ]
      },
      sharing: {
        title: "Information Sharing",
        content: [
          "We don't share personally identifying information publicly or with third-parties, except when:",
          "• Required by law or legal process",
          "• Necessary to protect our rights or property",
          "• With your explicit consent",
          "• With service providers who assist us (under confidentiality agreements)"
        ]
      },
      contact: {
        title: "Contact",
        content: [
          "If you have any questions about how we handle user data and personal information, please contact us at: privacy@simpius.com",
          "You are free to refuse our request for personal information, understanding that we may not be able to provide some of the desired services."
        ]
      }
    }
  },
  es: {
    title: "Política de Privacidad",
    description: "Cómo recopilamos, usamos y protegemos su información personal",
    backButton: "← Volver a Simpius",
    tocTitle: "Índice",
    lastUpdated: "Esta política es efectiva a partir del 1 de octubre de 2025",
    sections: {
      introduction: {
        title: "Introducción",
        content: [
          "Su privacidad es importante para nosotros. Es política de Simpius respetar su privacidad con respecto a cualquier información que podamos recopilar del sitio web Simpius, y otros sitios que poseemos y operamos.",
          "Esta política de privacidad explica cómo recopilamos, usamos, almacenamos y protegemos su información personal cuando utiliza nuestros servicios."
        ]
      },
      collection: {
        title: "Recopilación de Información",
        content: [
          "Solo solicitamos información personal cuando realmente la necesitamos para brindarle un servicio. Lo hacemos por medios justos y legales, con su conocimiento y consentimiento.",
          "Información que recopilamos:",
          "• Información de contacto: Nombre, dirección de correo electrónico",
          "• Información técnica: Dirección IP, tipo de navegador, páginas visitadas",
          "• Información de uso: Cómo interactúa con nuestro sitio web y servicios"
        ]
      },
      usage: {
        title: "Uso de la Información",
        content: [
          "Utilizamos la información recopilada para:",
          "• Proporcionar y mejorar nuestros servicios",
          "• Comunicar actualizaciones y noticias sobre Simpius",
          "• Responder a sus solicitudes y brindar soporte",
          "• Personalizar su experiencia en nuestro sitio web",
          "• Cumplir con las obligaciones legales y regulatorias"
        ]
      },
      protection: {
        title: "Protección de Datos",
        content: [
          "Solo retenemos la información recopilada durante el tiempo necesario para brindarle el servicio solicitado. Cuando almacenamos datos, los protegemos dentro de medios comercialmente aceptables para prevenir pérdidas y robos, así como acceso, divulgación, copia, uso o modificación no autorizados.",
          "Implementamos medidas de seguridad técnicas y organizacionales apropiadas para proteger su información personal."
        ]
      },
      sharing: {
        title: "Compartir Información",
        content: [
          "No compartimos información de identificación personal públicamente o con terceros, excepto cuando:",
          "• Sea requerido por ley o proceso legal",
          "• Sea necesario para proteger nuestros derechos o propiedad",
          "• Con su consentimiento explícito",
          "• Con proveedores de servicios que nos asisten (bajo acuerdos de confidencialidad)"
        ]
      },
      contact: {
        title: "Contacto",
        content: [
          "Si tiene alguna pregunta sobre cómo manejamos los datos del usuario e información personal, póngase en contacto con nosotros en: privacy@simpius.com",
          "Es libre de rechazar nuestra solicitud de información personal, entendiendo que es posible que no podamos proporcionar algunos de los servicios deseados."
        ]
      }
    }
  }
};

export default function PrivacyPolicy() {
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
                className="btn-secondary"
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

          {/* Contact Section */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center mt-12">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {currentLang === 'pt' && 'Dúvidas sobre esta política?'}
              {currentLang === 'en' && 'Questions about this policy?'}
              {currentLang === 'es' && '¿Preguntas sobre esta política?'}
            </h3>
            <p className="text-slate-600 mb-3">
              {currentLang === 'pt' && 'Entre em contato conosco:'}
              {currentLang === 'en' && 'Contact us:'}
              {currentLang === 'es' && 'Contáctanos:'}
            </p>
            <a 
              href="mailto:support@simpius.com" 
              className="inline-flex items-center bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors"
            >
              support@simpius.com
            </a>
          </div>

          {/* Last Updated */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center mt-8">
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