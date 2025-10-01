# Simpius - Next.js Project

Versão profissional do site Simpius convertida para Next.js com React, TypeScript e Tailwind CSS.

## 🚀 Características

- **Next.js 15** com App Router
- **TypeScript** para type safety
- **Tailwind CSS** para styling responsivo
- **Componentes React** reutilizáveis
- **Roteamento profissional** com páginas dedicadas
- **Suporte multilíngue** (PT/EN/ES)
- **Design responsivo** com glassmorphism
- **SEO otimizado** com metadados completos

## 📁 Estrutura do Projeto

```
nextjs-simpius/
├── app/                    # App Router (Next.js 13+)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── globals.css        # Estilos globais
│   ├── privacy/           # Página de Privacidade
│   │   └── page.tsx
│   └── terms/             # Página de Termos
│       └── page.tsx
├── components/            # Componentes React
│   ├── Header.tsx        # Cabeçalho com navegação
│   ├── Footer.tsx        # Rodapé
│   └── EmailForm.tsx     # Formulário de email
├── public/               # Assets estáticos
│   ├── *.png            # Logos e ícones
│   ├── *.svg            # Vetores
│   └── favicon.ico      # Favicon
└── package.json         # Dependências
```

## 🛠️ Comandos

### Desenvolvimento
```bash
npm run dev
```
Inicia o servidor de desenvolvimento em http://localhost:3000

### Build
```bash
npm run build
```
Cria uma build otimizada para produção

### Lint
```bash
npm run lint
```
Executa o linter para verificar problemas no código

## 📄 Páginas

### Página Principal (/)
- Hero section com logo e call-to-action
- Manifesto da empresa
- Formulário de captura de email
- Design responsivo com animações

### Página de Privacidade (/privacy)
- Política de privacidade completa
- Suporte a 3 idiomas (PT/EN/ES)
- Navegação por seções
- Interface profissional

### Página de Termos (/terms)
- Termos de uso detalhados
- Suporte multilíngue
- Índice navegável
- Design consistente

## 🎨 Design System

### Cores
- **Primary**: Slate (900, 700, 600)
- **Background**: White/Transparent com backdrop-blur
- **Accent**: Emerald para elementos de destaque

### Tipografia
- **Font**: Inter (Google Fonts)
- **Hierarquia**: text-4xl → text-6xl para títulos
- **Peso**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Componentes
- **Glassmorphism**: bg-white/80 + backdrop-blur-xl
- **Botões**: Rounded-full com hover effects
- **Cards**: border-white/20 + shadow-xl
- **Animações**: fadeInUp, hover transforms

## 🌐 Internacionalização

O projeto suporta 3 idiomas:
- **PT**: Português (padrão)
- **EN**: English
- **ES**: Español

Implementado através de objetos de tradução em cada página, com seletor de idioma integrado.

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Menu Mobile**: Hamburguer menu para navegação
- **Grid Responsive**: Layout adaptativo com CSS Grid/Flexbox

## 🔧 Tecnologias

- **Framework**: Next.js 15.5.4
- **React**: 19.0.0
- **TypeScript**: 5.x
- **Tailwind CSS**: 3.4.1
- **Ferramentas**: ESLint, PostCSS, Turbopack

## 📈 SEO & Performance

- **Metadados**: Título, descrição, Open Graph, Twitter Cards
- **Favicon**: Múltiplos tamanhos e formatos
- **Sitemap**: Geração automática
- **Core Web Vitals**: Otimizado para performance
- **Lazy Loading**: Imagens carregadas sob demanda

## 🚀 Deploy

O projeto está pronto para deploy em:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS**
- **Qualquer provedor que suporte Node.js**

### Deploy na Vercel
```bash
npx vercel
```

## 🤝 Contribuição

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Inicie o desenvolvimento: `npm run dev`
4. Faça suas modificações
5. Teste com: `npm run build`
6. Commit e push

## 📞 Contato

**Simpius** - Simplificando a complexidade, conectando o mundo.

---

*Convertido de HTML estático para Next.js profissional com React, TypeScript e design system completo.*
