// ========== THEME TOGGLE (Modo Escuro/Claro) ==========
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

// Verifica se existe uma preferência salva no localStorage
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

// Event listener para alternar tema
themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
});


// ========== SMOOTH SCROLL ==========
// Adiciona scroll suave para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ========== SCROLL ANIMATIONS ==========
// Configurações do Intersection Observer para animações ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Callback do observer
const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
};

// Cria o observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Aplica animações iniciais e observa elementos
document.querySelectorAll('section, .project-card, .skill-category').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});


// ========== SWIPER CONFIGURATION (se você usar sliders) ==========
// Inicializa Swiper para carrossel de imagens dos projetos
document.addEventListener('DOMContentLoaded', () => {
    const swipers = document.querySelectorAll('.swiper');
    
    swipers.forEach((swiperElement) => {
        new Swiper(swiperElement, {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    });
});


// ========== NAVBAR SCROLL EFFECT ==========
// Adiciona efeito de transparência no header ao rolar a página
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 30px var(--shadow)';
    } else {
        header.style.boxShadow = '0 2px 20px var(--shadow)';
    }
    
    lastScroll = currentScroll;
});


// ========== MOBILE MENU (adicione se necessário) ==========
// Se você adicionar um menu hamburguer no futuro, descomente e ajuste:
/*
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav ul');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}
*/


// ========== FORMULÁRIO DE CONTATO (adicione se implementar) ==========
// Exemplo de validação de formulário:
/*
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validações básicas
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        if (!validateEmail(email)) {
            alert('Por favor, insira um email válido!');
            return;
        }
        
        // Aqui você enviaria os dados para o servidor
        console.log('Formulário enviado:', { name, email, message });
        alert('Mensagem enviada com sucesso!');
        contactForm.reset();
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
*/


// ========== CONSOLE MESSAGE ==========
// Mensagem personalizada no console
console.log(
    '%c👨‍💻 Portfólio de Elivelton Moura',
    'color: #6366f1; font-size: 20px; font-weight: bold;'
);
console.log(
    '%c💼 Desenvolvedor Full Stack',
    'color: #8b5cf6; font-size: 14px;'
);
console.log(
    '%c🔗 GitHub: https://github.com/Eliveltonmoura',
    'color: #ec4899; font-size: 12px;'
);