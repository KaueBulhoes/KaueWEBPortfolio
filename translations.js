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
            greeting: "Hi, I'm Kauê a",
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
            greeting: "Olá, eu sou Kauê um",
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

// Helper function to get nested translations
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}