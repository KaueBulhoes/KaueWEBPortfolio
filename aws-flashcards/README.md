# Flashcards AWS Cloud Practitioner (CLF-C02)

Este site foi gerado para auxiliar nos estudos para o exame **AWS Certified Cloud Practitioner – Portuguese-Brazilian (CLF-C02)** utilizando o método de flashcards.

## Funcionalidades

1. **Swipe Right / Left**  
   • Deslize para **direita** (ou arraste com o mouse) se você acertou a resposta.  
   • Deslize para **esquerda** se errou.
2. **Repetição direcionada**  
   Ao final de cada rodada, somente os cards que você errou serão apresentados novamente, até que todos sejam respondidos corretamente.
3. **Reset**  
   Há um botão para reiniciar todos os cards a qualquer momento.
4. **Clique para revelar**  
   Clique no card para alternar entre pergunta e resposta.

## Como rodar localmente

```bash
# Clonar repositório ou copiar diretório
cd aws-flashcards

# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev
```

A aplicação será iniciada em <http://localhost:5173> (ou outra porta, ver saída do terminal).

## Estrutura do projeto

```
aws-flashcards/
├─ src/
│  ├─ data/aws_flashcards_ptbr.json  # Perguntas e respostas
│  ├─ components/                    # Componentes React
│  ├─ App.jsx                        # Componente principal
│  └─ App.css                        # Estilos
├─ index.html                        # Entrada Vite
└─ package.json                      # Configurações e dependências
```

---

Bons estudos e boa prova! 🎓