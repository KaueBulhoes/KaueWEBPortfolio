// Estado da aplicação
let currentQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = [];
let incorrectAnswers = [];
let isReviewMode = false;
let touchStartX = 0;
let touchStartY = 0;
let isDragging = false;

// Elementos DOM
const flashcard = document.getElementById('flashcard');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const optionsSection = document.getElementById('optionsSection');
const answerSection = document.getElementById('answerSection');
const correctAnswerElement = document.getElementById('correctAnswer');
const explanationElement = document.getElementById('explanation');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const swipeActions = document.getElementById('swipeActions');
const correctBtn = document.getElementById('correctBtn');
const incorrectBtn = document.getElementById('incorrectBtn');
const currentCardElement = document.getElementById('currentCard');
const totalCardsElement = document.getElementById('totalCards');
const correctCountElement = document.getElementById('correctCount');
const incorrectCountElement = document.getElementById('incorrectCount');
const completionScreen = document.getElementById('completionScreen');
const finalCorrectElement = document.getElementById('finalCorrect');
const finalIncorrectElement = document.getElementById('finalIncorrect');
const reviewIncorrectBtn = document.getElementById('reviewIncorrectBtn');
const restartBtn = document.getElementById('restartBtn');
const resetBtn = document.getElementById('resetBtn');
const reviewBtn = document.getElementById('reviewBtn');
const swipeIndicators = document.querySelectorAll('.swipe-indicator');

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    currentQuestions = shuffleQuestions(questions);
    currentQuestionIndex = 0;
    correctAnswers = [];
    incorrectAnswers = [];
    isReviewMode = false;
    
    updateStats();
    loadCurrentQuestion();
    showMainContent();
}

function setupEventListeners() {
    // Botões principais
    showAnswerBtn.addEventListener('click', showAnswer);
    correctBtn.addEventListener('click', () => handleAnswer(true));
    incorrectBtn.addEventListener('click', () => handleAnswer(false));
    resetBtn.addEventListener('click', resetAll);
    reviewBtn.addEventListener('click', startReviewMode);
    reviewIncorrectBtn.addEventListener('click', startReviewMode);
    restartBtn.addEventListener('click', resetAll);

    // Touch/Mouse events para swipe
    flashcard.addEventListener('touchstart', handleTouchStart, { passive: true });
    flashcard.addEventListener('touchmove', handleTouchMove, { passive: false });
    flashcard.addEventListener('touchend', handleTouchEnd, { passive: true });
    flashcard.addEventListener('mousedown', handleMouseStart);
    flashcard.addEventListener('mousemove', handleMouseMove);
    flashcard.addEventListener('mouseup', handleMouseEnd);
    flashcard.addEventListener('mouseleave', handleMouseEnd);

    // Opções clicáveis
    optionsElement.addEventListener('click', handleOptionClick);

    // Prevenção de drag padrão
    flashcard.addEventListener('dragstart', e => e.preventDefault());
}

function loadCurrentQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showCompletionScreen();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    
    // Reset do estado visual
    resetCardVisuals();
    
    // Carregar pergunta
    questionElement.textContent = question.question;
    
    // Carregar opções
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
        optionElement.dataset.index = index;
        optionsElement.appendChild(optionElement);
    });

    // Preparar resposta
    const correctOption = question.options[question.correct];
    correctAnswerElement.textContent = `${String.fromCharCode(65 + question.correct)}) ${correctOption}`;
    explanationElement.innerHTML = `<h4>Explicação:</h4><p>${question.explanation}</p>`;

    updateStats();
}

function handleOptionClick(e) {
    if (e.target.classList.contains('option')) {
        // Remove seleção anterior
        optionsElement.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Adiciona seleção atual
        e.target.classList.add('selected');
    }
}

function showAnswer() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Mostrar resposta correta nas opções
    optionsElement.querySelectorAll('.option').forEach((opt, index) => {
        if (index === question.correct) {
            opt.classList.add('correct');
        } else if (opt.classList.contains('selected')) {
            opt.classList.add('incorrect');
        }
    });

    // Mostrar seção de resposta
    answerSection.style.display = 'block';
    showAnswerBtn.style.display = 'none';
    swipeActions.style.display = 'flex';
}

function handleAnswer(isCorrect) {
    const question = currentQuestions[currentQuestionIndex];
    
    if (isCorrect) {
        correctAnswers.push(question);
        showToast('Correto! 👍', 'correct');
        animateSwipe('right');
    } else {
        incorrectAnswers.push(question);
        showToast('Marcado para revisão 📝', 'incorrect');
        animateSwipe('left');
    }

    setTimeout(() => {
        nextQuestion();
    }, 300);
}

function nextQuestion() {
    currentQuestionIndex++;
    loadCurrentQuestion();
}

function animateSwipe(direction) {
    flashcard.classList.add(`swipe-${direction}`);
    
    // Mostrar indicador
    const indicator = document.querySelector(`.swipe-indicator.${direction}`);
    if (indicator) {
        indicator.classList.add('show');
        setTimeout(() => {
            indicator.classList.remove('show');
        }, 300);
    }
    
    setTimeout(() => {
        flashcard.classList.remove(`swipe-${direction}`);
    }, 300);
}

function resetCardVisuals() {
    answerSection.style.display = 'none';
    showAnswerBtn.style.display = 'block';
    swipeActions.style.display = 'none';
    
    // Reset opções
    optionsElement.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Reset transformações
    flashcard.style.transform = '';
    flashcard.classList.remove('dragging');
}

function updateStats() {
    currentCardElement.textContent = currentQuestionIndex + 1;
    totalCardsElement.textContent = currentQuestions.length;
    correctCountElement.textContent = correctAnswers.length;
    incorrectCountElement.textContent = incorrectAnswers.length;
    
    // Mostrar botão de revisão se houver incorretas
    if (incorrectAnswers.length > 0 && !isReviewMode) {
        reviewBtn.style.display = 'block';
    } else {
        reviewBtn.style.display = 'none';
    }
}

function showCompletionScreen() {
    document.querySelector('.flashcard-container').style.display = 'none';
    completionScreen.style.display = 'block';
    
    finalCorrectElement.textContent = correctAnswers.length;
    finalIncorrectElement.textContent = incorrectAnswers.length;
    
    // Mostrar botão de revisão apenas se houver incorretas
    if (incorrectAnswers.length > 0) {
        reviewIncorrectBtn.style.display = 'inline-flex';
    } else {
        reviewIncorrectBtn.style.display = 'none';
    }
}

function showMainContent() {
    document.querySelector('.flashcard-container').style.display = 'block';
    completionScreen.style.display = 'none';
}

function startReviewMode() {
    if (incorrectAnswers.length === 0) {
        showToast('Não há questões para revisar! 🎉');
        return;
    }

    isReviewMode = true;
    currentQuestions = [...incorrectAnswers];
    currentQuestionIndex = 0;
    incorrectAnswers = []; // Reset para nova rodada
    
    updateStats();
    loadCurrentQuestion();
    showMainContent();
    
    showToast(`Revisando ${currentQuestions.length} questões incorretas`, 'info');
}

function resetAll() {
    if (confirm('Tem certeza que deseja resetar todos os cards e começar novamente?')) {
        initializeApp();
        showToast('Cards resetados! Boa sorte! 🍀');
    }
}

// Funcionalidade de touch/swipe
function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isDragging = true;
    flashcard.classList.add('dragging');
}

function handleTouchMove(e) {
    if (!isDragging) return;
    
    e.preventDefault();
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;
    const deltaX = touchX - touchStartX;
    const deltaY = touchY - touchStartY;
    
    // Só processa se o movimento horizontal for maior que o vertical
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 20) {
        updateCardPosition(deltaX);
        showSwipeIndicators(deltaX);
    }
}

function handleTouchEnd(e) {
    if (!isDragging) return;
    
    isDragging = false;
    flashcard.classList.remove('dragging');
    
    const touchX = e.changedTouches[0].clientX;
    const deltaX = touchX - touchStartX;
    
    handleSwipeEnd(deltaX);
}

function handleMouseStart(e) {
    if (e.button !== 0) return; // Só botão esquerdo
    
    touchStartX = e.clientX;
    touchStartY = e.clientY;
    isDragging = true;
    flashcard.classList.add('dragging');
    
    e.preventDefault();
}

function handleMouseMove(e) {
    if (!isDragging) return;
    
    const deltaX = e.clientX - touchStartX;
    const deltaY = e.clientY - touchStartY;
    
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 20) {
        updateCardPosition(deltaX);
        showSwipeIndicators(deltaX);
    }
}

function handleMouseEnd(e) {
    if (!isDragging) return;
    
    isDragging = false;
    flashcard.classList.remove('dragging');
    
    const deltaX = e.clientX - touchStartX;
    handleSwipeEnd(deltaX);
}

function updateCardPosition(deltaX) {
    const rotation = deltaX * 0.1;
    const opacity = Math.max(0.7, 1 - Math.abs(deltaX) / 300);
    
    flashcard.style.transform = `translateX(${deltaX}px) rotate(${rotation}deg)`;
    flashcard.style.opacity = opacity;
}

function showSwipeIndicators(deltaX) {
    const threshold = 80;
    
    swipeIndicators.forEach(indicator => {
        indicator.classList.remove('show');
    });
    
    if (Math.abs(deltaX) > threshold) {
        const direction = deltaX > 0 ? 'right' : 'left';
        const indicator = document.querySelector(`.swipe-indicator.${direction}`);
        if (indicator) {
            indicator.classList.add('show');
        }
    }
}

function handleSwipeEnd(deltaX) {
    const threshold = 120;
    
    // Reset indicadores
    swipeIndicators.forEach(indicator => {
        indicator.classList.remove('show');
    });
    
    if (Math.abs(deltaX) > threshold) {
        // Swipe válido
        if (swipeActions.style.display === 'flex') {
            // Se a resposta já foi mostrada, processa o swipe
            const isCorrect = deltaX > 0;
            handleAnswer(isCorrect);
        } else {
            // Se a resposta não foi mostrada, mostra primeiro
            showAnswer();
            resetCardPosition();
        }
    } else {
        // Swipe inválido, volta à posição original
        resetCardPosition();
    }
}

function resetCardPosition() {
    flashcard.style.transform = '';
    flashcard.style.opacity = '';
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Atalhos de teclado
document.addEventListener('keydown', function(e) {
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (showAnswerBtn.style.display !== 'none') {
            showAnswer();
        }
    } else if (e.key === 'ArrowRight' && swipeActions.style.display === 'flex') {
        handleAnswer(true);
    } else if (e.key === 'ArrowLeft' && swipeActions.style.display === 'flex') {
        handleAnswer(false);
    } else if (e.key === 'r' || e.key === 'R') {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            resetAll();
        }
    }
});

// Adicionar dicas visuais
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar tooltip de ajuda
    setTimeout(() => {
        if (currentQuestionIndex === 0) {
            showToast('💡 Dica: Arraste para direita (acertei) ou esquerda (errei), ou use os botões!', 'info');
        }
    }, 2000);
});