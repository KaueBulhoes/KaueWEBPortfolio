# 🚀 AWS CLF-C02 Flashcards - Certificação Cloud Practitioner

Um site moderno de estudos estilo flashcards para o exame **AWS Certified Cloud Practitioner (CLF-C02)** em português brasileiro.

## ✨ Funcionalidades

### 📚 Sistema de Estudos
- **50 questões** cuidadosamente selecionadas do exame AWS CLF-C02
- **Múltipla escolha** com 4 alternativas por questão
- **Explicações detalhadas** para cada resposta correta
- **Questões embaralhadas** para variação nos estudos

### 🎯 Interação Intuitiva
- **Swipe/Arraste**: 
  - ➡️ Para direita = Acertei
  - ⬅️ Para esquerda = Errei
- **Botões**: Alternativa aos gestos de swipe
- **Teclado**: Atalhos para navegação rápida
  - `Espaço/Enter`: Ver resposta
  - `Seta Direita`: Marcar como correto
  - `Seta Esquerda`: Marcar como incorreto
  - `Ctrl/Cmd + R`: Resetar tudo

### 📊 Acompanhamento de Progresso
- **Contador de acertos** em tempo real
- **Contador de erros** em tempo real
- **Progresso atual** (questão X de Y)
- **Estatísticas finais** ao completar

### 🔄 Sistema de Revisão
- **Modo de revisão**: Refaça apenas as questões erradas
- **Reset completo**: Comece do zero quando quiser
- **Persistência**: Continue de onde parou

## 🎨 Design

### Interface Moderna
- **Design responsivo** para desktop, tablet e mobile
- **Tema AWS** com cores oficiais
- **Animações fluidas** e feedback visual
- **Glassmorphism** e efeitos modernos

### UX Intuitiva
- **Indicadores visuais** de swipe
- **Toast notifications** para feedback
- **Transições suaves** entre questões
- **Loading states** apropriados

## 🏗️ Estrutura do Projeto

```
├── index.html          # Página principal
├── styles.css          # Estilos e animações
├── script.js           # Lógica da aplicação
├── questions.js        # Base de questões AWS CLF-C02
└── README_Flashcards.md # Esta documentação
```

## 🚀 Como Usar

### 1. Abrir o Site
```bash
# Opção 1: Servidor Python
python3 -m http.server 8000

# Opção 2: Servidor Node.js (se instalado)
npx serve .

# Opção 3: Servidor PHP (se instalado)
php -S localhost:8000
```

Acesse: `http://localhost:8000`

### 2. Estudar
1. **Leia a pergunta** e as alternativas
2. **Selecione sua resposta** (opcional)
3. **Clique em "Ver Resposta"** ou pressione `Espaço`
4. **Veja a explicação** detalhada
5. **Marque como correto ou incorreto**:
   - Arraste para direita (✅ Acertei)
   - Arraste para esquerda (❌ Errei)
   - Use os botões se preferir

### 3. Revisar
- Ao final, **revise apenas as questões incorretas**
- Continue até acertar todas
- **Reset** quando quiser começar novamente

## 📱 Compatibilidade

### Dispositivos
- ✅ **Desktop** (Windows, macOS, Linux)
- ✅ **Tablet** (iPad, Android tablets)
- ✅ **Mobile** (iPhone, Android phones)

### Navegadores
- ✅ **Chrome** 80+
- ✅ **Firefox** 75+
- ✅ **Safari** 13+
- ✅ **Edge** 80+

## 🎯 Sobre o Exame AWS CLF-C02

### Tópicos Cobertos
- **Conceitos de Nuvem** (24%)
- **Segurança e Conformidade** (30%)
- **Tecnologia** (34%)
- **Cobrança e Preços** (12%)

### Serviços AWS Incluídos
- ☁️ **Computação**: EC2, Lambda, Auto Scaling
- 💾 **Armazenamento**: S3, EBS, EFS
- 🗄️ **Banco de Dados**: RDS, DynamoDB
- 🌐 **Rede**: VPC, CloudFront, Route 53
- 🔒 **Segurança**: IAM, CloudTrail, Shield
- 📊 **Monitoramento**: CloudWatch, Trusted Advisor
- 🛠️ **Gestão**: CloudFormation, Systems Manager

## 🎓 Dicas de Estudo

### Estratégia Recomendada
1. **Primeira rodada**: Faça todas as questões
2. **Revise erros**: Foque nas questões incorretas
3. **Repita**: Até conseguir 100% de acerto
4. **Reset e refaça**: Para consolidar o conhecimento

### Pontos de Atenção
- 📖 **Leia as explicações** cuidadosamente
- 🔄 **Pratique regularmente** para fixar conceitos
- 💡 **Entenda o "porquê"** de cada resposta
- 📚 **Complemente** com documentação oficial AWS

## 🔧 Personalização

### Adicionar Questões
Edite o arquivo `questions.js`:

```javascript
{
    question: "Sua pergunta aqui?",
    options: [
        "Opção A",
        "Opção B", 
        "Opção C",
        "Opção D"
    ],
    correct: 1, // Índice da resposta correta (0-3)
    explanation: "Explicação detalhada da resposta."
}
```

### Modificar Estilos
Edite `styles.css` para personalizar:
- Cores do tema
- Animações
- Layout responsivo
- Efeitos visuais

## 🐛 Solução de Problemas

### Site não carrega
- Verifique se o servidor está rodando
- Confirme o endereço correto (localhost:8000)
- Tente outro navegador

### Swipe não funciona
- Certifique-se de arrastar horizontalmente
- Use os botões como alternativa
- Verifique se o JavaScript está habilitado

### Perda de progresso
- O progresso não é salvo automaticamente
- Complete uma sessão por vez
- Use o modo de revisão para focar nos erros

## 📈 Estatísticas de Uso

O site tracka localmente:
- Questões respondidas
- Taxa de acerto
- Tempo por questão
- Progresso de revisão

## 🎯 Meta de Certificação

**Objetivo**: Passar no exame AWS CLF-C02 com confiança!

- ✅ Praticar com questões reais
- ✅ Entender conceitos fundamentais
- ✅ Fixar conhecimento através da repetição
- ✅ Identificar e corrigir pontos fracos

---

**Boa sorte com sua certificação AWS! 🚀☁️**

*Desenvolvido com ❤️ para a comunidade AWS em português*