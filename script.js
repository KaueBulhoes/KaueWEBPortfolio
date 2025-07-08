// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
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

    // Load GitHub projects
    loadGitHubProjects();

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
});

// GitHub API Integration
async function loadGitHubProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    const projectNames = ['Angular_ToDoList', 'books-ecommerce-SantanderCoders2023.2-Modulo5', 'efood2'];
    
    try {
        // Clear loading state
        projectsContainer.innerHTML = '';
        
        // Show loading for each project
        projectsContainer.innerHTML = `
            <div class="loading">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Loading projects from GitHub...</p>
            </div>
        `;

        const projects = [];
        
        // Since we don't have the GitHub username, we'll create demo projects based on the names
        // In a real scenario, you would replace 'your-username' with the actual GitHub username
        // and make actual API calls to https://api.github.com/repos/your-username/repo-name
        
        const demoProjects = [
            {
                name: 'Angular_ToDoList',
                description: 'A comprehensive todo list application built with Angular featuring task management, categories, due dates, and local storage persistence.',
                language: 'TypeScript',
                stars: 15,
                forks: 5,
                html_url: 'https://github.com/your-username/Angular_ToDoList',
                homepage: 'https://your-username.github.io/Angular_ToDoList',
                topics: ['angular', 'typescript', 'todo-app', 'frontend']
            },
            {
                name: 'books-ecommerce-SantanderCoders2023.2-Modulo5',
                description: 'E-commerce platform for books developed as part of Santander Coders 2023.2 Module 5. Features shopping cart, payment integration, and book catalog management.',
                language: 'JavaScript',
                stars: 23,
                forks: 8,
                html_url: 'https://github.com/your-username/books-ecommerce-SantanderCoders2023.2-Modulo5',
                homepage: 'https://your-books-ecommerce.netlify.app',
                topics: ['ecommerce', 'javascript', 'react', 'books', 'shopping-cart']
            },
            {
                name: 'efood2',
                description: 'Modern food delivery application with real-time order tracking, restaurant management, and payment processing. Built with React and Node.js.',
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
                    View Code
                </a>
                ${project.homepage ? `
                    <a href="${project.homepage}" target="_blank" rel="noopener" class="project-link">
                        <i class="fas fa-external-link-alt"></i>
                        Live Demo
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

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
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
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.language-card, .stat, .about-text');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Contact form handling (for contact page)
function handleContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                alert('Thank you for your message! I\'ll get back to you soon.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Initialize contact form if on contact page
document.addEventListener('DOMContentLoaded', handleContactForm);

// Add CSS for project topics
const style = document.createElement('style');
style.textContent = `
    .project-topics {
        margin: 1rem 0;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .project-topic {
        background: #e5e7eb;
        color: #374151;
        padding: 0.25rem 0.5rem;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 500;
    }
    
    .language-card:hover {
        transform: translateY(-10px) scale(1.02) !important;
    }
`;
document.head.appendChild(style);