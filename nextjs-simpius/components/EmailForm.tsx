'use client';

import { useState } from 'react';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !isValidEmail(email)) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envio (aqui você integraria com seu backend)
      console.log('Email capturado:', email);
      
      // Mostrar mensagem de sucesso
      setShowSuccess(true);
      setEmail('');
      
      // Esconder a mensagem após 5 segundos
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Erro ao enviar email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-xl border border-slate-200 flex gap-2 transition-all duration-300 hover:shadow-2xl focus-within:ring-4 focus-within:ring-slate-900/10">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu-melhor@email.com"
            required
            disabled={isSubmitting}
            className="flex-1 bg-transparent border-none outline-none px-6 py-4 text-slate-700 placeholder-slate-400 text-lg disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isSubmitting || !email || !isValidEmail(email)}
            className="bg-gradient-to-r from-slate-900 to-slate-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:from-slate-800 hover:to-slate-600 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-slate-900/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none whitespace-nowrap"
          >
            {isSubmitting ? 'Enviando...' : 'Quero Acesso Antecipado'}
          </button>
        </div>
      </form>

      {showSuccess && (
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4 rounded-2xl shadow-lg animate-fade-in-up">
          <p className="font-medium text-center">
            ✨ Perfeito! Você está na nossa lista de pioneiros. Em breve você receberá novidades exclusivas.
          </p>
        </div>
      )}
    </div>
  );
}