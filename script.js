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