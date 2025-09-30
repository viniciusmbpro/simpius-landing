// Funcionalidades avançadas para o Simpius Landing Page

class SImpiusLanding {
    constructor() {
        this.init();
    }

    init() {
        this.setupFormValidation();
        this.setupAnimations();
        this.setupAnalytics();
        this.setupAccessibility();
    }

    setupFormValidation() {
        const form = document.getElementById('emailForm');
        const emailInput = document.getElementById('emailInput');
        const submitBtn = form.querySelector('.submit-btn');
        const successMessage = document.getElementById('successMessage');
        
        // Criar mensagem de erro se não existir
        let errorMessage = document.getElementById('errorMessage');
        if (!errorMessage) {
            errorMessage = document.createElement('div');
            errorMessage.id = 'errorMessage';
            errorMessage.className = 'error-message';
            successMessage.parentNode.insertBefore(errorMessage, successMessage.nextSibling);
        }

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            
            // Reset states
            this.hideMessage(errorMessage);
            this.hideMessage(successMessage);
            form.classList.remove('error');
            
            // Validações
            if (!email) {
                this.showError('Por favor, insira seu email.', errorMessage, form);
                return;
            }
            
            if (!this.isValidEmail(email)) {
                this.showError('Por favor, insira um email válido.', errorMessage, form);
                return;
            }
            
            // Estado de loading
            this.setLoadingState(submitBtn, true);
            
            try {
                // Simular requisição (substitua pela sua integração real)
                await this.submitEmail(email);
                
                // Sucesso
                this.showSuccess('✨ Perfeito! Você está na nossa lista de pioneiros. Em breve você receberá novidades exclusivas.', successMessage);
                emailInput.value = '';
                
                // Analytics
                this.trackEvent('email_signup', { email: email });
                
            } catch (error) {
                console.error('Erro ao enviar email:', error);
                this.showError('Ops! Algo deu errado. Tente novamente em alguns instantes.', errorMessage, form);
            } finally {
                this.setLoadingState(submitBtn, false);
            }
        });

        // Validação em tempo real
        emailInput.addEventListener('input', () => {
            if (form.classList.contains('error')) {
                form.classList.remove('error');
                this.hideMessage(errorMessage);
            }
        });
    }

    async submitEmail(email) {
        // Aqui você pode integrar com diferentes serviços:
        
        // Opção 1: Seu próprio backend
        // return fetch('/api/subscribe', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email })
        // });
        
        // Opção 2: Mailchimp
        // return this.submitToMailchimp(email);
        
        // Opção 3: ConvertKit
        // return this.submitToConvertKit(email);
        
        // Opção 4: Google Sheets (via Google Apps Script)
        // return this.submitToGoogleSheets(email);
        
        // Para demo, simular delay
        return new Promise((resolve) => {
            setTimeout(resolve, 1500);
        });
    }

    // Exemplo de integração com Mailchimp
    async submitToMailchimp(email) {
        const MAILCHIMP_URL = 'YOUR_MAILCHIMP_ENDPOINT_HERE';
        
        return fetch(MAILCHIMP_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email_address: email,
                status: 'subscribed',
                tags: ['simpius-landing', 'early-access']
            })
        });
    }

    // Exemplo de integração com Google Sheets
    async submitToGoogleSheets(email) {
        const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
        
        return fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                timestamp: new Date().toISOString(),
                source: 'landing-page'
            })
        });
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showError(message, errorElement, formElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
        formElement.classList.add('error');
        
        // Focar no input para acessibilidade
        const emailInput = document.getElementById('emailInput');
        emailInput.focus();
    }

    showSuccess(message, successElement) {
        successElement.textContent = message;
        successElement.classList.add('show');
        
        // Auto-hide após 8 segundos
        setTimeout(() => {
            this.hideMessage(successElement);
        }, 8000);
    }

    hideMessage(element) {
        element.classList.remove('show');
    }

    setLoadingState(button, isLoading) {
        if (isLoading) {
            button.classList.add('loading');
            button.disabled = true;
            button.textContent = 'Cadastrando...';
        } else {
            button.classList.remove('loading');
            button.disabled = false;
            button.textContent = 'Quero Acesso Antecipado';
        }
    }

    setupAnimations() {
        // Intersection Observer para animações on-scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observar elementos que devem animar
        const animatedElements = document.querySelectorAll('.manifesto');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    setupAnalytics() {
        // Google Analytics 4 (substitua pelo seu Measurement ID)
        // gtag('config', 'GA_MEASUREMENT_ID');
        
        // Eventos personalizados
        this.trackEvent('page_view', {
            page_title: 'Simpius Landing Page',
            page_location: window.location.href
        });
    }

    trackEvent(eventName, parameters = {}) {
        // Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, parameters);
        }
        
        // Facebook Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', eventName, parameters);
        }
        
        // Console para debug
        console.log('Event tracked:', eventName, parameters);
    }

    setupAccessibility() {
        // Melhorar navegação por teclado
        const focusableElements = document.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );

        // Adicionar indicadores visuais de foco
        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.style.outline = '2px solid #0B1F3A';
                element.style.outlineOffset = '2px';
            });

            element.addEventListener('blur', () => {
                element.style.outline = '';
                element.style.outlineOffset = '';
            });
        });

        // Suporte a temas de sistema
        this.setupThemeSupport();
    }

    setupThemeSupport() {
        // Detectar preferência de tema do sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Aplicar tema inicial
        this.applyTheme(prefersDark.matches ? 'dark' : 'light');
        
        // Escutar mudanças
        prefersDark.addEventListener('change', (e) => {
            this.applyTheme(e.matches ? 'dark' : 'light');
        });
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        // Salvar preferência
        localStorage.setItem('simpius-theme', theme);
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new SImpiusLanding();
});

// Funcionalidades extras
window.addEventListener('load', () => {
    // Preload de recursos críticos
    const logo = document.querySelector('.logo');
    if (logo && logo.src) {
        const img = new Image();
        img.src = logo.src;
    }
    
    // Lazy loading para imagens (se houver mais)
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});

// Service Worker para cache (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js');
    });
}