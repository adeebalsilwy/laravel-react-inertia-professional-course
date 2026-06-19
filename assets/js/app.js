
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Search functionality
    document.querySelectorAll('[data-search]').forEach(input => {
        const target = input.getAttribute('data-search');
        const cards = document.querySelectorAll(target);
        input.addEventListener('input', () => {
            const q = input.value.trim().toLowerCase();
            cards.forEach(card => {
                card.style.display = card.innerText.toLowerCase().includes(q) ? '' : 'none';
            });
        });
    });

    // Week filtering logic (if present)
    document.querySelectorAll('[data-week-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            const week = btn.getAttribute('data-week-filter');
            document.querySelectorAll('[data-week-filter]').forEach(b => b.classList.remove('active', 'bg-indigo-600', 'text-white'));
            btn.classList.add('active', 'bg-indigo-600', 'text-white');
            document.querySelectorAll('[data-week-card]').forEach(card => {
                card.style.display = (week === 'all' || card.getAttribute('data-week') === week) ? '' : 'none';
            });
        });
    });

    // Code copy button logic
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const code = btn.parentElement.querySelector('code');
            if (code) {
                navigator.clipboard.writeText(code.innerText);
                const originalText = btn.textContent;
                btn.textContent = 'تم النسخ!';
                setTimeout(() => btn.textContent = originalText, 2000);
            }
        });
    });

    // Quiz grading logic
    const gradeBtn = document.querySelector('[data-grade-quiz]');
    if (gradeBtn) {
        gradeBtn.addEventListener('click', () => {
            let total = 0;
            let score = 0;
            const questions = document.querySelectorAll('[data-answer]');
            
            questions.forEach(q => {
                total++;
                const correctAnswer = q.getAttribute('data-answer');
                const selected = q.querySelector('input:checked');
                const explanation = q.querySelector('.explain');
                
                // Reset styles
                q.classList.remove('border-emerald-500', 'border-rose-500', 'bg-emerald-50', 'bg-rose-50');
                
                if (selected) {
                    if (selected.value === correctAnswer) {
                        score++;
                        q.classList.add('border-emerald-500', 'bg-emerald-50');
                    } else {
                        q.classList.add('border-rose-500', 'bg-rose-50');
                    }
                } else {
                    q.classList.add('border-rose-300');
                }
                
                if (explanation) {
                    explanation.classList.remove('hidden');
                }
            });

            const resultDiv = document.getElementById('quizResult');
            const feedbackP = document.getElementById('feedback');
            
            if (resultDiv) {
                resultDiv.textContent = `${score} / ${total}`;
            }
            
            if (feedbackP) {
                if (score === total) {
                    feedbackP.textContent = "أحسنت! إجابات مثالية.";
                    feedbackP.className = "text-emerald-600 font-bold";
                } else if (score >= total / 2) {
                    feedbackP.textContent = "جيد جداً، راجع الأخطاء لتعزيز فهمك.";
                    feedbackP.className = "text-amber-600 font-bold";
                } else {
                    feedbackP.textContent = "حاول مرة أخرى، المراجعة هي سر التعلم.";
                    feedbackP.className = "text-rose-600 font-bold";
                }
            }
        });
    }
});
