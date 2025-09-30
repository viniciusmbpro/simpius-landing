# Simpius Landing Page

Uma landing page moderna e elegante para o Simpius - framework ativo que transforma conhecimento em resultados.

## 🚀 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **Formulário Inteligente**: Validação em tempo real e estados de loading
- **Acessibilidade**: Otimizada para leitores de tela e navegação por teclado
- **Performance**: Carregamento rápido e otimizado
- **Dark Mode**: Suporte automático ao tema do sistema
- **Analytics Ready**: Preparado para Google Analytics e Facebook Pixel

## 📁 Estrutura dos Arquivos

```
simpius-landing/
├── index.html          # Página principal
├── styles.css          # Estilos adicionais
├── script.js           # Funcionalidades JavaScript
├── logo_simpius_v1.svg # Logo principal
├── icon_simpius_v1.svg # Ícone alternativo
├── logo_simpius_v1.png # Logo em PNG
└── README.md           # Este arquivo
```

## 🎨 Personalização

### Cores Principais
- **Azul Profundo**: `#0B1F3A` (cor principal da marca)
- **Azul Secundário**: `#1a3a5c`
- **Texto Principal**: `#111111`
- **Texto Secundário**: `#4a5568`

### Tipografia
- **Fonte Principal**: Inter (importada do Google Fonts)
- **Fallbacks**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto

### Modificando o Conteúdo

1. **Título Principal**: Edite o `<h1>` no arquivo `index.html`
2. **Subtítulo**: Modifique o `<h2>` na seção hero
3. **Manifesto**: Altere o conteúdo da seção `.manifesto`
4. **Logo**: Substitua os arquivos de logo mantendo os mesmos nomes

## 🔧 Integrações de Email

O formulário está preparado para diferentes serviços de email marketing:

### Mailchimp
```javascript
async submitToMailchimp(email) {
    const MAILCHIMP_URL = 'SEU_ENDPOINT_MAILCHIMP_AQUI';
    // ... implementação
}
```

### ConvertKit
```javascript
async submitToConvertKit(email) {
    const CONVERTKIT_URL = 'SEU_ENDPOINT_CONVERTKIT_AQUI';
    // ... implementação
}
```

### Google Sheets
```javascript
async submitToGoogleSheets(email) {
    const GOOGLE_SCRIPT_URL = 'SEU_SCRIPT_GOOGLE_AQUI';
    // ... implementação
}
```

## 📊 Analytics

### Google Analytics 4
1. Adicione seu Measurement ID no script
2. Descomente as linhas de gtag no `script.js`

### Facebook Pixel
1. Adicione o código do pixel no `<head>`
2. Descomente as linhas de fbq no `script.js`

## 🎯 SEO e Meta Tags

A página inclui:
- Meta description otimizada
- Viewport para responsividade
- Preconnect para Google Fonts
- Estrutura semântica HTML5

### Melhorias Recomendadas
- Adicionar Open Graph tags
- Implementar Schema.org structured data
- Configurar arquivo sitemap.xml
- Adicionar arquivo robots.txt

## 🚀 Deploy

### Hospedagem Estática (Recomendado)
- **Vercel**: `vercel --prod`
- **Netlify**: Arrastar pasta para dashboard
- **GitHub Pages**: Configurar no repositório
- **Surge.sh**: `surge .`

### Hospedagem Tradicional
- Upload via FTP dos arquivos para pasta public_html
- Certificar que index.html está na raiz

## 🔒 Segurança e Privacidade

- Validação client-side e server-side
- Sanitização de inputs
- HTTPS obrigatório em produção
- Conformidade com LGPD/GDPR

## 📱 Testes

### Checklist de Teste
- [ ] Formulário funciona em todos os navegadores
- [ ] Design responsivo em diferentes telas
- [ ] Animações funcionam suavemente
- [ ] Integração de email está configurada
- [ ] Analytics estão funcionando
- [ ] Acessibilidade testada com leitor de tela

### Ferramentas Recomendadas
- Chrome DevTools
- Lighthouse (Performance/Acessibilidade)
- Wave Web Accessibility Evaluator
- GTMetrix (Performance)

## 🐛 Troubleshooting

### Problema: Formulário não envia
- Verificar se a integração de email está configurada
- Checar console do navegador para erros
- Testar com email válido

### Problema: Animações não funcionam
- Verificar se CSS está carregando corretamente
- Testar em navegador moderno
- Verificar se JavaScript está habilitado

### Problema: Logo não aparece
- Verificar se arquivos SVG estão na pasta correta
- Testar caminho relativo das imagens
- Verificar permissões dos arquivos

## 📞 Suporte

Para dúvidas sobre implementação ou customização, consulte:
- Documentação dos serviços de email marketing escolhidos
- Guias de hospedagem da plataforma selecionada
- Documentação do Google Analytics/Facebook Pixel

## 📈 Próximos Passos

1. **Configurar Integração de Email**: Escolher e configurar serviço de email marketing
2. **Implementar Analytics**: Adicionar códigos de tracking
3. **Otimizar SEO**: Adicionar meta tags avançadas
4. **Testes A/B**: Testar diferentes versões do copy
5. **Heatmap**: Implementar ferramentas como Hotjar
6. **Chat**: Adicionar widget de chat se necessário

---

**Simpius** - Seu reino intelectual, finalmente em ordem.