import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-slate-300 mb-2">
            &copy; 2025 Simpius. Todos os direitos reservados.
          </p>
          <p className="text-slate-400 mb-4 text-sm">
            Dúvidas ou suporte? Entre em contato:{' '}
            <a 
              href="mailto:support@simpius.com" 
              className="text-slate-300 hover:text-white transition-colors underline"
            >
              support@simpius.com
            </a>
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link 
              href="/privacy"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link 
              href="/terms"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}