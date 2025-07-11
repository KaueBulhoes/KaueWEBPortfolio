// Questões do exame AWS CLF-C02 - AWS Certified Cloud Practitioner
// Português Brasileiro

const questions = [
    {
        question: "Qual é o principal benefício da computação em nuvem em relação à infraestrutura tradicional no local?",
        options: [
            "Maior controle físico sobre o hardware",
            "Custos iniciais mais baixos e escalabilidade sob demanda",
            "Maior velocidade de processamento garantida",
            "Eliminação completa de riscos de segurança"
        ],
        correct: 1,
        explanation: "A computação em nuvem oferece custos iniciais mais baixos (modelo pay-as-you-go) e escalabilidade sob demanda, permitindo que as empresas ajustem recursos conforme necessário sem investimentos iniciais massivos em hardware."
    },
    {
        question: "Qual serviço AWS é usado principalmente para armazenamento de objetos?",
        options: [
            "Amazon EBS",
            "Amazon EFS",
            "Amazon S3",
            "Amazon RDS"
        ],
        correct: 2,
        explanation: "O Amazon S3 (Simple Storage Service) é o serviço de armazenamento de objetos da AWS, usado para armazenar e recuperar qualquer quantidade de dados de qualquer lugar na web."
    },
    {
        question: "Qual é a responsabilidade do cliente no modelo de responsabilidade compartilhada da AWS para instâncias EC2?",
        options: [
            "Manutenção física do hardware",
            "Segurança dos dados em trânsito e em repouso",
            "Configuração de rede do data center",
            "Atualização do hipervisor"
        ],
        correct: 1,
        explanation: "No modelo de responsabilidade compartilhada, o cliente é responsável pela segurança 'NA' nuvem, incluindo dados em trânsito e em repouso, configurações de segurança do SO, aplicações e identity management."
    },
    {
        question: "Qual serviço AWS oferece um banco de dados relacional totalmente gerenciado?",
        options: [
            "Amazon DynamoDB",
            "Amazon RDS",
            "Amazon Redshift",
            "Amazon ElastiCache"
        ],
        correct: 1,
        explanation: "O Amazon RDS (Relational Database Service) é um serviço de banco de dados relacional totalmente gerenciado que suporta vários engines como MySQL, PostgreSQL, Oracle, SQL Server e MariaDB."
    },
    {
        question: "Qual é o benefício principal da Disponibilidade Multi-AZ no Amazon RDS?",
        options: [
            "Melhor performance de leitura",
            "Custos reduzidos",
            "Alta disponibilidade e recuperação automática de falhas",
            "Maior capacidade de armazenamento"
        ],
        correct: 2,
        explanation: "Multi-AZ fornece alta disponibilidade e failover automático. A AWS mantém uma réplica síncrona dos dados em uma AZ diferente e automaticamente faz failover em caso de falhas."
    },
    {
        question: "Qual serviço AWS é usado para distribuição de conteúdo e redução de latência?",
        options: [
            "Amazon Route 53",
            "Amazon CloudFront",
            "AWS Direct Connect",
            "Amazon API Gateway"
        ],
        correct: 1,
        explanation: "O Amazon CloudFront é um serviço de rede de entrega de conteúdo (CDN) que distribui conteúdo globalmente através de edge locations, reduzindo latência e melhorando a experiência do usuário."
    },
    {
        question: "Qual dos seguintes é um benefício do AWS Auto Scaling?",
        options: [
            "Redução manual da capacidade durante baixa demanda",
            "Aumento automático da capacidade conforme a demanda",
            "Monitoramento manual de métricas de aplicação",
            "Configuração única de recursos"
        ],
        correct: 1,
        explanation: "O AWS Auto Scaling automaticamente ajusta a capacidade para manter performance estável e previsível ao menor custo possível, aumentando ou diminuindo recursos conforme a demanda."
    },
    {
        question: "Qual serviço AWS permite monitoramento e observabilidade de recursos e aplicações?",
        options: [
            "AWS CloudTrail",
            "AWS Config",
            "Amazon CloudWatch",
            "AWS Systems Manager"
        ],
        correct: 2,
        explanation: "O Amazon CloudWatch é um serviço de monitoramento e observabilidade que coleta dados de monitoramento e insights operacionais para recursos AWS e aplicações."
    },
    {
        question: "Qual é a finalidade principal do AWS Identity and Access Management (IAM)?",
        options: [
            "Monitorar logs de acesso",
            "Gerenciar identidades e controlar acesso aos recursos AWS",
            "Criptografar dados em repouso",
            "Fazer backup de dados"
        ],
        correct: 1,
        explanation: "O AWS IAM permite gerenciar de forma segura o acesso aos serviços e recursos AWS, controlando quem pode acessar quais recursos e sob quais condições."
    },
    {
        question: "Qual modelo de precificação é usado pelo Amazon S3?",
        options: [
            "Custo fixo mensal",
            "Pay-per-use baseado na quantidade de dados armazenados e transferidos",
            "Custo baseado apenas no número de requisições",
            "Custo único de configuração"
        ],
        correct: 1,
        explanation: "O Amazon S3 usa um modelo pay-per-use, onde você paga pela quantidade de dados armazenados, número de requisições, e transferência de dados."
    },
    {
        question: "Qual serviço AWS é usado para envio de notificações push, SMS e email?",
        options: [
            "Amazon SQS",
            "Amazon SNS",
            "Amazon SES",
            "AWS Lambda"
        ],
        correct: 1,
        explanation: "O Amazon SNS (Simple Notification Service) é um serviço de mensageria totalmente gerenciado que coordena a entrega de mensagens para endpoints e clientes subscribados."
    },
    {
        question: "Qual é o principal benefício dos Reserved Instances do Amazon EC2?",
        options: [
            "Maior performance garantida",
            "Desconto significativo em comparação com On-Demand pricing",
            "Acesso prioritário a novas funcionalidades",
            "Suporte técnico premium incluído"
        ],
        correct: 1,
        explanation: "Reserved Instances oferecem desconto significativo (até 75%) comparado ao pricing On-Demand, em troca de um compromisso de 1 ou 3 anos de uso."
    },
    {
        question: "Qual serviço AWS permite executar código sem provisionar ou gerenciar servidores?",
        options: [
            "Amazon EC2",
            "AWS Lambda",
            "Amazon ECS",
            "AWS Batch"
        ],
        correct: 1,
        explanation: "O AWS Lambda é um serviço de computação serverless que executa código em resposta a eventos sem a necessidade de provisionar ou gerenciar servidores."
    },
    {
        question: "Qual é a diferença principal entre uma VPC e uma sub-rede?",
        options: [
            "VPC é regional, sub-rede é específica de uma AZ",
            "VPC é menor que uma sub-rede",
            "VPC é pública, sub-rede é privada",
            "Não há diferença, são termos sinônimos"
        ],
        correct: 0,
        explanation: "Uma VPC (Virtual Private Cloud) é uma rede virtual regional, enquanto uma sub-rede é um segmento da VPC que reside em uma única Zona de Disponibilidade."
    },
    {
        question: "Qual ferramenta AWS ajuda a estimar custos antes de implementar recursos?",
        options: [
            "AWS Cost Explorer",
            "AWS Pricing Calculator",
            "AWS Budgets",
            "AWS Billing Dashboard"
        ],
        correct: 1,
        explanation: "O AWS Pricing Calculator permite estimar custos de serviços AWS antes da implementação, ajudando no planejamento financeiro e orçamentário."
    },
    {
        question: "Qual é o principal benefício de usar múltiplas Zonas de Disponibilidade (AZs)?",
        options: [
            "Redução de custos",
            "Melhor performance",
            "Alta disponibilidade e tolerância a falhas",
            "Maior capacidade de armazenamento"
        ],
        correct: 2,
        explanation: "Usar múltiplas AZs proporciona alta disponibilidade e tolerância a falhas, protegendo aplicações contra falhas de infraestrutura em uma única localização."
    },
    {
        question: "Qual serviço AWS é usado para criar e gerenciar APIs REST?",
        options: [
            "AWS Lambda",
            "Amazon API Gateway",
            "Amazon Route 53",
            "AWS Direct Connect"
        ],
        correct: 1,
        explanation: "O Amazon API Gateway é um serviço totalmente gerenciado que facilita a criação, publicação, manutenção, monitoramento e proteção de APIs REST e WebSocket."
    },
    {
        question: "Qual é a capacidade mínima de armazenamento que pode ser provisionada para um volume Amazon EBS gp3?",
        options: [
            "1 GB",
            "10 GB",
            "100 GB",
            "1 TB"
        ],
        correct: 0,
        explanation: "Volumes Amazon EBS gp3 podem ser provisionados com um mínimo de 1 GB de armazenamento, oferecendo flexibilidade para aplicações com diversos requisitos de armazenamento."
    },
    {
        question: "Qual serviço AWS oferece um data warehouse totalmente gerenciado?",
        options: [
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon Redshift",
            "Amazon Aurora"
        ],
        correct: 2,
        explanation: "O Amazon Redshift é um serviço de data warehouse totalmente gerenciado, otimizado para análise de dados usando SQL e ferramentas de business intelligence existentes."
    },
    {
        question: "Qual é a principal vantagem do Amazon CloudFormation?",
        options: [
            "Monitoramento de aplicações",
            "Infraestrutura como código (IaC)",
            "Distribuição de conteúdo",
            "Gerenciamento de identidade"
        ],
        correct: 1,
        explanation: "O CloudFormation permite infraestrutura como código, possibilitando provisionar e gerenciar recursos AWS de forma programática e versionada usando templates."
    },
    {
        question: "Qual serviço AWS é usado para transferência de dados em larga escala para a nuvem?",
        options: [
            "AWS DataSync",
            "AWS Snowball",
            "AWS Direct Connect",
            "Amazon S3 Transfer Acceleration"
        ],
        correct: 1,
        explanation: "O AWS Snowball é um dispositivo de transferência de dados que permite mover grandes quantidades de dados para dentro e fora da AWS de forma segura."
    },
    {
        question: "Qual é o conceito de 'elasticidade' na computação em nuvem?",
        options: [
            "Capacidade de manter dados seguros",
            "Habilidade de escalar recursos para cima e para baixo automaticamente",
            "Velocidade de processamento constante",
            "Localização geográfica dos data centers"
        ],
        correct: 1,
        explanation: "Elasticidade é a capacidade de escalar recursos automaticamente para cima ou para baixo baseado na demanda, otimizando custos e performance."
    },
    {
        question: "Qual serviço AWS fornece um sistema de arquivos totalmente gerenciado para Amazon EC2?",
        options: [
            "Amazon S3",
            "Amazon EBS",
            "Amazon EFS",
            "Amazon FSx"
        ],
        correct: 2,
        explanation: "O Amazon EFS (Elastic File System) fornece um sistema de arquivos NFS totalmente gerenciado que pode ser montado simultaneamente em múltiplas instâncias EC2."
    },
    {
        question: "Qual é o principal benefício do AWS Support Business plan?",
        options: [
            "Acesso 24/7 a Cloud Support Engineers",
            "Resposta em 1 hora para questões de produção",
            "Technical Account Manager dedicado",
            "Suporte apenas por email"
        ],
        correct: 0,
        explanation: "O AWS Support Business plan oferece acesso 24/7 a Cloud Support Engineers via telefone, chat e email, além de resposta em 1 hora para sistemas de produção inoperantes."
    },
    {
        question: "Qual serviço AWS é usado para análise de logs e monitoramento de aplicações?",
        options: [
            "Amazon CloudWatch Logs",
            "AWS CloudTrail",
            "AWS Config",
            "Amazon Inspector"
        ],
        correct: 0,
        explanation: "O Amazon CloudWatch Logs permite monitorar, armazenar e acessar arquivos de log de instâncias EC2, AWS CloudTrail, Route 53 e outras fontes."
    },
    {
        question: "Qual é a diferença entre Auto Scaling vertical e horizontal?",
        options: [
            "Vertical adiciona mais instâncias, horizontal aumenta recursos da instância",
            "Horizontal adiciona mais instâncias, vertical aumenta recursos da instância",
            "Não há diferença entre os dois",
            "Ambos funcionam apenas com containers"
        ],
        correct: 1,
        explanation: "Scaling horizontal adiciona mais instâncias para distribuir a carga, enquanto scaling vertical aumenta os recursos (CPU, RAM) de uma instância existente."
    },
    {
        question: "Qual serviço AWS oferece armazenamento de chave-valor NoSQL totalmente gerenciado?",
        options: [
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon ElastiCache",
            "Amazon Redshift"
        ],
        correct: 1,
        explanation: "O Amazon DynamoDB é um banco de dados NoSQL de chave-valor e documento totalmente gerenciado que oferece performance de single-digit millisecond em qualquer escala."
    },
    {
        question: "Qual é o propósito principal do AWS Well-Architected Framework?",
        options: [
            "Monitorar custos AWS",
            "Fornecer melhores práticas para arquiteturas na nuvem",
            "Gerenciar permissões de usuários",
            "Automatizar deployments"
        ],
        correct: 1,
        explanation: "O AWS Well-Architected Framework fornece melhores práticas e princípios para projetar e operar sistemas confiáveis, seguros, eficientes e econômicos na nuvem."
    },
    {
        question: "Qual serviço AWS permite cache distribuído em memória?",
        options: [
            "Amazon RDS",
            "Amazon ElastiCache",
            "Amazon DynamoDB",
            "Amazon S3"
        ],
        correct: 1,
        explanation: "O Amazon ElastiCache é um serviço de cache distribuído em memória que suporta Redis e Memcached, melhorando a performance de aplicações web."
    },
    {
        question: "Qual é a principal característica de uma instância EC2 Spot?",
        options: [
            "Garantia de execução contínua",
            "Preço reduzido mas pode ser interrompida pela AWS",
            "Performance superior garantida",
            "Suporte dedicado incluído"
        ],
        correct: 1,
        explanation: "Instâncias Spot oferecem desconto significativo (até 90%) mas podem ser interrompidas pela AWS quando há maior demanda por capacidade na AZ."
    },
    {
        question: "Qual serviço AWS é usado para orquestração de containers?",
        options: [
            "AWS Lambda",
            "Amazon ECS",
            "Amazon EC2",
            "AWS Batch"
        ],
        correct: 1,
        explanation: "O Amazon ECS (Elastic Container Service) é um serviço de orquestração de containers altamente escalável e de alta performance que suporta containers Docker."
    },
    {
        question: "Qual é o principal benefício do AWS Trusted Advisor?",
        options: [
            "Backup automático de dados",
            "Recomendações para otimização de custos, performance, segurança e tolerância a falhas",
            "Monitoramento de logs em tempo real",
            "Gerenciamento de identidade"
        ],
        correct: 1,
        explanation: "O AWS Trusted Advisor fornece recomendações personalizadas seguindo as melhores práticas AWS para ajudar a otimizar custos, aumentar performance e melhorar segurança."
    },
    {
        question: "Qual serviço AWS permite execução de funções serverless?",
        options: [
            "Amazon EC2",
            "AWS Lambda",
            "Amazon ECS",
            "AWS Fargate"
        ],
        correct: 1,
        explanation: "O AWS Lambda permite executar código sem provisionar ou gerenciar servidores, pagando apenas pelo tempo de computação consumido."
    },
    {
        question: "Qual é a durabilidade padrão dos objetos armazenados no Amazon S3 Standard?",
        options: [
            "99.9%",
            "99.99%",
            "99.999999999% (11 nines)",
            "99.9999% (6 nines)"
        ],
        correct: 2,
        explanation: "O Amazon S3 Standard oferece 99.999999999% (11 nines) de durabilidade, projetado para sustentar a perda simultânea de dados em duas instalações."
    },
    {
        question: "Qual serviço AWS oferece um sistema de filas de mensagens totalmente gerenciado?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon Kinesis",
            "AWS Step Functions"
        ],
        correct: 1,
        explanation: "O Amazon SQS (Simple Queue Service) é um serviço de filas de mensagens totalmente gerenciado que permite desacoplamento e escalonamento de microservices."
    },
    {
        question: "Qual é o principal benefício de usar AWS Edge Locations?",
        options: [
            "Reduzir latência para usuários finais",
            "Aumentar capacidade de armazenamento",
            "Melhorar segurança de dados",
            "Reduzir custos de computação"
        ],
        correct: 0,
        explanation: "Edge Locations são usadas pelo CloudFront para cache de conteúdo próximo aos usuários finais, reduzindo latência e melhorando a experiência do usuário."
    },
    {
        question: "Qual serviço AWS é usado para DNS e domain registration?",
        options: [
            "Amazon CloudFront",
            "Amazon Route 53",
            "AWS Direct Connect",
            "Amazon VPC"
        ],
        correct: 1,
        explanation: "O Amazon Route 53 é um serviço DNS escalável e altamente disponível que também oferece registro de domínio e health checking."
    },
    {
        question: "Qual é o conceito de 'pay-as-you-go' na AWS?",
        options: [
            "Pagamento antecipado por recursos",
            "Cobrança apenas pelos recursos utilizados",
            "Taxa fixa mensal independente do uso",
            "Pagamento apenas no final do ano"
        ],
        correct: 1,
        explanation: "Pay-as-you-go significa que você paga apenas pelos recursos que usa, sem taxas antecipadas ou compromissos de longo prazo, permitindo flexibilidade financeira."
    },
    {
        question: "Qual serviço AWS oferece processamento de dados em streaming em tempo real?",
        options: [
            "Amazon S3",
            "Amazon Kinesis",
            "Amazon RDS",
            "AWS Batch"
        ],
        correct: 1,
        explanation: "O Amazon Kinesis permite coletar, processar e analisar dados de streaming em tempo real, possibilitando insights e respostas rápidas a informações recebidas."
    },
    {
        question: "Qual é a principal vantagem do AWS Organizations?",
        options: [
            "Monitoramento de performance",
            "Gerenciamento centralizado de múltiplas contas AWS",
            "Backup automático de dados",
            "Distribuição de conteúdo"
        ],
        correct: 1,
        explanation: "O AWS Organizations permite gerenciamento centralizado de múltiplas contas AWS, facilitando a governança, segurança e billing consolidado."
    },
    {
        question: "Qual serviço AWS é usado para auditoria e compliance?",
        options: [
            "Amazon CloudWatch",
            "AWS CloudTrail",
            "AWS Config",
            "Amazon Inspector"
        ],
        correct: 1,
        explanation: "O AWS CloudTrail registra chamadas de API AWS para sua conta, fornecendo logs de eventos para auditoria, compliance e análise de segurança."
    },
    {
        question: "Qual tipo de volume EBS oferece o maior IOPS para aplicações críticas?",
        options: [
            "General Purpose SSD (gp2)",
            "Provisioned IOPS SSD (io1/io2)",
            "Throughput Optimized HDD (st1)",
            "Cold HDD (sc1)"
        ],
        correct: 1,
        explanation: "Volumes Provisioned IOPS SSD (io1/io2) oferecem o maior IOPS (até 64,000 IOPS para io2) para aplicações que requerem alta performance de I/O."
    },
    {
        question: "Qual é o principal benefício do Amazon VPC?",
        options: [
            "Redução de custos",
            "Isolamento de rede e controle de segurança",
            "Maior velocidade de processamento",
            "Backup automático"
        ],
        correct: 1,
        explanation: "O Amazon VPC fornece uma seção isolada logicamente da AWS Cloud onde você pode lançar recursos AWS em uma rede virtual que você define."
    },
    {
        question: "Qual serviço AWS oferece machine learning sem necessidade de conhecimento em ML?",
        options: [
            "Amazon SageMaker",
            "Amazon Rekognition",
            "AWS Deep Learning AMIs",
            "Amazon Comprehend"
        ],
        correct: 1,
        explanation: "O Amazon Rekognition oferece análise de imagem e vídeo pré-treinada, permitindo adicionar capacidades de ML a aplicações sem necessidade de expertise em machine learning."
    },
    {
        question: "Qual é a principal diferença entre Amazon S3 Standard e S3 Glacier?",
        options: [
            "S3 Glacier é mais caro",
            "S3 Glacier tem acesso mais lento mas custos menores",
            "S3 Glacier não oferece durabilidade",
            "Não há diferença significativa"
        ],
        correct: 1,
        explanation: "S3 Glacier é uma classe de armazenamento de baixo custo para arquivamento e backup de longo prazo, com tempos de recuperação de minutos a horas."
    },
    {
        question: "Qual serviço AWS permite automação de tarefas de administração de sistemas?",
        options: [
            "AWS Lambda",
            "AWS Systems Manager",
            "Amazon CloudWatch",
            "AWS Config"
        ],
        correct: 1,
        explanation: "O AWS Systems Manager oferece uma interface unificada para visualizar dados operacionais de múltiplos serviços AWS e automatizar tarefas operacionais."
    },
    {
        question: "Qual é o principal propósito do AWS Shield?",
        options: [
            "Backup de dados",
            "Proteção contra ataques DDoS",
            "Monitoramento de performance",
            "Gerenciamento de identidade"
        ],
        correct: 1,
        explanation: "O AWS Shield é um serviço de proteção contra DDoS que protege aplicações executadas na AWS contra ataques de negação de serviço distribuído."
    },
    {
        question: "Qual serviço AWS oferece tradução de texto automática?",
        options: [
            "Amazon Polly",
            "Amazon Translate",
            "Amazon Comprehend",
            "Amazon Transcribe"
        ],
        correct: 1,
        explanation: "O Amazon Translate é um serviço de tradução automática neural que oferece tradução de idiomas rápida, de alta qualidade e acessível."
    },
    {
        question: "Qual é a principal característica do AWS Fargate?",
        options: [
            "Gerenciamento manual de servidores",
            "Execução de containers serverless",
            "Apenas para aplicações web",
            "Suporte limitado a linguagens"
        ],
        correct: 1,
        explanation: "O AWS Fargate é uma tecnologia serverless para containers que permite executar containers sem gerenciar servidores ou clusters de instâncias EC2."
    }
];

// Embaralhar questões para randomizar a ordem
function shuffleQuestions(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}