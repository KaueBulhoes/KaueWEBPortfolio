// Translations
const translations = {
    en: {
        title: "Portfolio - Web Developer",
        nav: {
            about: "About",
            skills: "Skills", 
            projects: "Projects",
            contact: "Contact"
        },
        theme: {
            dark: "Dark",
            light: "Light"
        },
        hero: {
            greeting: "Hi, I'm a",
            title: "Web Developer",
            description: "Creating innovative and efficient web solutions with modern technologies",
            viewWork: "View My Work",
            getInTouch: "Get In Touch"
        },
        about: {
            title: "About Me",
            description1: "I'm a passionate web developer with expertise in both frontend and backend technologies. I love creating user-friendly applications that solve real-world problems and provide exceptional user experiences.",
            description2: "With a strong foundation in modern web technologies, I continuously learn and adapt to new tools and frameworks to deliver cutting-edge solutions. My approach combines technical expertise with creative problem-solving to build applications that are both functional and beautiful.",
            experience: "Years Experience",
            projects: "Projects Completed",
            technologies: "Technologies Mastered"
        },
        skills: {
            title: "Technologies & Skills",
            frontend: "Frontend Framework",
            library: "JavaScript Library",
            framework: "React Framework",
            backend: "Backend Runtime",
            programming: "Programming Language",
            database: "Database ORM",
            databaseLang: "Database Language"
        },
        projects: {
            title: "Featured Projects",
            loading: "Loading projects...",
            viewCode: "View Code",
            liveDemo: "Live Demo",
            todoDescription: "A comprehensive todo list application built with Angular featuring task management, categories, due dates, and local storage persistence.",
            ecommerceDescription: "E-commerce platform for books developed as part of Santander Coders 2023.2 Module 5. Features shopping cart, payment integration, and book catalog management.",
            efoodDescription: "Modern food delivery application with real-time order tracking, restaurant management, and payment processing. Built with React and Node.js."
        },
        contact: {
            title: "Get In Touch",
            description: "I'm always interested in new opportunities and exciting projects. Whether you have a question about my work or want to discuss a potential collaboration, feel free to reach out.",
            email: "Email Me",
            whatsapp: "WhatsApp"
        },
        footer: {
            tagline: "Creating innovative web solutions",
            quickLinks: "Quick Links",
            connect: "Connect",
            rights: "All rights reserved."
        }
    },
    pt: {
        title: "Portfólio - Desenvolvedor Web",
        nav: {
            about: "Sobre",
            skills: "Habilidades",
            projects: "Projetos", 
            contact: "Contato"
        },
        theme: {
            dark: "Escuro",
            light: "Claro"
        },
        hero: {
            greeting: "Olá, eu sou um",
            title: "Desenvolvedor Web",
            description: "Criando soluções web inovadoras e eficientes com tecnologias modernas",
            viewWork: "Ver Meu Trabalho",
            getInTouch: "Entre em Contato"
        },
        about: {
            title: "Sobre Mim",
            description1: "Sou um desenvolvedor web apaixonado com expertise em tecnologias frontend e backend. Adoro criar aplicações user-friendly que resolvem problemas do mundo real e proporcionam experiências excepcionais ao usuário.",
            description2: "Com uma base sólida em tecnologias web modernas, aprendo continuamente e me adapto a novas ferramentas e frameworks para entregar soluções de ponta. Minha abordagem combina expertise técnica com resolução criativa de problemas para construir aplicações funcionais e bonitas.",
            experience: "Anos de Experiência",
            projects: "Projetos Concluídos",
            technologies: "Tecnologias Dominadas"
        },
        skills: {
            title: "Tecnologias e Habilidades",
            frontend: "Framework Frontend",
            library: "Biblioteca JavaScript",
            framework: "Framework React",
            backend: "Runtime Backend",
            programming: "Linguagem de Programação",
            database: "ORM de Banco de Dados",
            databaseLang: "Linguagem de Banco"
        },
        projects: {
            title: "Projetos em Destaque",
            loading: "Carregando projetos...",
            viewCode: "Ver Código",
            liveDemo: "Demo ao Vivo",
            todoDescription: "Uma aplicação abrangente de lista de tarefas construída com Angular, com gerenciamento de tarefas, categorias, datas de vencimento e persistência de armazenamento local.",
            ecommerceDescription: "Plataforma de e-commerce para livros desenvolvida como parte do Santander Coders 2023.2 Módulo 5. Possui carrinho de compras, integração de pagamento e gerenciamento de catálogo de livros.",
            efoodDescription: "Aplicação moderna de entrega de comida com rastreamento de pedidos em tempo real, gerenciamento de restaurantes e processamento de pagamentos. Construída com React e Node.js."
        },
        contact: {
            title: "Entre em Contato",
            description: "Estou sempre interessado em novas oportunidades e projetos empolgantes. Se você tem uma pergunta sobre meu trabalho ou quer discutir uma colaboração potencial, sinta-se à vontade para entrar em contato.",
            email: "Me Envie um Email",
            whatsapp: "WhatsApp"
        },
        footer: {
            tagline: "Criando soluções web inovadoras",
            quickLinks: "Links Rápidos",
            connect: "Conectar",
            rights: "Todos os direitos reservados."
        }
    }
};

// Current language and theme
let currentLang = localStorage.getItem('portfolio-lang') || 'en';
let currentTheme = localStorage.getItem('portfolio-theme') || 'light';

// Initialize theme and language
document.addEventListener('DOMContentLoaded', function() {
    // Set theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
    
    // Set language
    updateLanguage();
    updateLanguageDisplay();
    
    // Initialize other functionality
    initializeNavigation();
    loadGitHubProjects();
    initializeAnimations();
});

// Theme toggle functionality
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('portfolio-theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.querySelector('.theme-toggle span');
    
    if (currentTheme === 'dark') {
        themeIcon.className = 'fas fa-sun';
        themeText.textContent = translations[currentLang].theme.light;
    } else {
        themeIcon.className = 'fas fa-moon';
        themeText.textContent = translations[currentLang].theme.dark;
    }
}

// Language toggle functionality
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'pt' : 'en';
    localStorage.setItem('portfolio-lang', currentLang);
    updateLanguage();
    updateLanguageDisplay();
    updateThemeIcon(); // Update theme text in new language
    
    // Reload projects with new language
    loadGitHubProjects();
}

function updateLanguageDisplay() {
    document.getElementById('current-lang').textContent = currentLang.toUpperCase();
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[currentLang], key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update document title
    document.title = translations[currentLang].title;
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for anchor links
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

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = currentTheme === 'dark' 
                ? 'rgba(17, 24, 39, 0.98)' 
                : 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = currentTheme === 'dark' 
                ? 'rgba(17, 24, 39, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Projects functionality
async function loadGitHubProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    
    try {
        // Clear loading state
        projectsContainer.innerHTML = '';
        
        // Show loading
        projectsContainer.innerHTML = `
            <div class="loading">
                <i class="fas fa-spinner fa-spin"></i>
                <p data-i18n="projects.loading">${translations[currentLang].projects.loading}</p>
            </div>
        `;

        const demoProjects = [
            {
                name: 'Angular_ToDoList',
                description: translations[currentLang].projects.todoDescription,
                language: 'TypeScript',
                stars: 15,
                forks: 5,
                html_url: 'https://github.com/your-username/Angular_ToDoList',
                homepage: 'https://your-username.github.io/Angular_ToDoList',
                topics: ['angular', 'typescript', 'todo-app', 'frontend']
            },
            {
                name: 'books-ecommerce-SantanderCoders2023.2-Modulo5',
                description: translations[currentLang].projects.ecommerceDescription,
                language: 'JavaScript',
                stars: 23,
                forks: 8,
                html_url: 'https://github.com/your-username/books-ecommerce-SantanderCoders2023.2-Modulo5',
                homepage: 'https://your-books-ecommerce.netlify.app',
                topics: ['ecommerce', 'javascript', 'react', 'books', 'shopping-cart']
            },
            {
                name: 'efood2',
                description: translations[currentLang].projects.efoodDescription,
                language: 'JavaScript',
                stars: 31,
                forks: 12,
                html_url: 'https://github.com/your-username/efood2',
                homepage: 'https://efood2-app.vercel.app',
                topics: ['food-delivery', 'react', 'nodejs', 'realtime', 'payment']
            }
        ];

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        projectsContainer.innerHTML = '';
        
        demoProjects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsContainer.appendChild(projectCard);
        });

        // Add animation to project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });

    } catch (error) {
        console.error('Error loading projects:', error);
        projectsContainer.innerHTML = `
            <div class="loading">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Error loading projects. Please try again later.</p>
            </div>
        `;
    }
}

function createProjectCard(project) {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    const languageColor = getLanguageColor(project.language);
    const topics = project.topics ? project.topics.slice(0, 3) : [];
    
    projectCard.innerHTML = `
        <div class="project-header">
            <h3 class="project-title">${project.name.replace(/-/g, ' ').replace(/_/g, ' ')}</h3>
            <p class="project-description">${project.description || 'No description available.'}</p>
        </div>
        <div class="project-body">
            <div class="project-language" style="background-color: ${languageColor};">
                ${project.language || 'Unknown'}
            </div>
            <div class="project-stats">
                <div class="project-stat">
                    <i class="fas fa-star"></i>
                    <span>${project.stars || 0}</span>
                </div>
                <div class="project-stat">
                    <i class="fas fa-code-branch"></i>
                    <span>${project.forks || 0}</span>
                </div>
                <div class="project-stat">
                    <i class="fas fa-code"></i>
                    <span>${project.language || 'Unknown'}</span>
                </div>
            </div>
            ${topics.length > 0 ? `
                <div class="project-topics">
                    ${topics.map(topic => `<span class="project-topic">#${topic}</span>`).join('')}
                </div>
            ` : ''}
            <div class="project-links">
                <a href="${project.html_url}" target="_blank" rel="noopener" class="project-link">
                    <i class="fab fa-github"></i>
                    ${translations[currentLang].projects.viewCode}
                </a>
                ${project.homepage ? `
                    <a href="${project.homepage}" target="_blank" rel="noopener" class="project-link">
                        <i class="fas fa-external-link-alt"></i>
                        ${translations[currentLang].projects.liveDemo}
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    return projectCard;
}

function getLanguageColor(language) {
    const colors = {
        'JavaScript': '#f7df1e',
        'TypeScript': '#3178c6',
        'Python': '#3776ab',
        'Java': '#007396',
        'React': '#61dafb',
        'Angular': '#dd0031',
        'Vue': '#4fc08d',
        'CSS': '#1572b6',
        'HTML': '#e34f26',
        'Node.js': '#339933'
    };
    return colors[language] || '#6366f1';
}

// Animation functionality
function initializeAnimations() {
    // Language card animations
    const languageCards = document.querySelectorAll('.language-card');
    languageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Intersection Observer for animations
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

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.language-card, .stat, .about-text');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Initialize contact form if on contact page
document.addEventListener('DOMContentLoaded', handleContactForm);