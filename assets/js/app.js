(function() {
    'use strict';

    // ========================
    // 1. MOBILE MENU TOGGLE
    // ========================
    window.toggleMenu = function() {
        const menu = document.getElementById('mobileMenu');
        if (menu) menu.classList.toggle('hidden');
    };

    document.addEventListener('DOMContentLoaded', function() {

        // ========================
        // 2. SEARCH FUNCTIONALITY
        // ========================
        document.querySelectorAll('[data-search]').forEach(function(input) {
            var target = input.getAttribute('data-search');
            var items = document.querySelectorAll(target);
            input.addEventListener('input', function() {
                var q = input.value.trim().toLowerCase();
                items.forEach(function(item) {
                    var text = item.innerText.toLowerCase();
                    item.style.display = text.includes(q) ? '' : 'none';
                });
            });
        });

        // ========================
        // 3. WEEK FILTER
        // ========================
        document.querySelectorAll('[data-week-filter]').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var week = btn.getAttribute('data-week-filter');
                document.querySelectorAll('[data-week-filter]').forEach(function(b) {
                    b.classList.remove('active', 'bg-indigo-600', 'text-white');
                });
                btn.classList.add('active', 'bg-indigo-600', 'text-white');
                document.querySelectorAll('[data-week-card]').forEach(function(card) {
                    var match = week === 'all' || card.getAttribute('data-week') === week;
                    card.style.display = match ? '' : 'none';
                });
            });
        });

        // ========================
        // 4. CODE COPY BUTTON
        // ========================
        document.querySelectorAll('.copy-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var pre = btn.closest('.code-block') || btn.parentElement;
                var code = pre.querySelector('code');
                if (code) {
                    var text = code.innerText;
                    navigator.clipboard.writeText(text).then(function() {
                        var original = btn.textContent;
                        btn.textContent = 'تم النسخ!';
                        setTimeout(function() { btn.textContent = original; }, 2000);
                    });
                }
            });
        });

        // ========================
        // 5. QUIZ GRADING ENGINE
        // ========================
        var gradeBtn = document.querySelector('[data-grade-quiz]');
        if (gradeBtn) {
            gradeBtn.addEventListener('click', function() {
                var total = 0;
                var score = 0;
                var questions = document.querySelectorAll('[data-answer]');

                questions.forEach(function(q) {
                    total++;
                    var correct = q.getAttribute('data-answer');
                    var selected = q.querySelector('input:checked');
                    var explanation = q.querySelector('.explain');

                    q.classList.remove('border-emerald-500', 'border-rose-500', 'bg-emerald-50', 'bg-rose-50', 'border-rose-300');

                    if (selected) {
                        if (selected.value === correct) {
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

                var resultDiv = document.getElementById('quizResult');
                var feedbackP = document.getElementById('feedback');

                if (resultDiv) {
                    resultDiv.textContent = score + ' / ' + total;
                }

                if (feedbackP) {
                    if (score === total) {
                        feedbackP.textContent = 'أحسنت! إجابات مثالية. أنت تفهم المادة بشكل ممتاز.';
                        feedbackP.className = 'text-emerald-600 font-bold text-lg';
                    } else if (score >= Math.ceil(total * 0.7)) {
                        feedbackP.textContent = 'جيد جداً! راجع الأخطاء لتعزيز فهمك للموضوع.';
                        feedbackP.className = 'text-amber-600 font-bold text-lg';
                    } else {
                        feedbackP.textContent = 'حاول مرة أخرى. المراجعة هي سر التعلم. اقرأ الشرح جيداً ثم أعد المحاولة.';
                        feedbackP.className = 'text-rose-600 font-bold text-lg';
                    }
                }

                // Scroll to result
                var resultCard = document.getElementById('quizResultCard');
                if (resultCard) {
                    resultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        }

        // ========================
        // 6. QUIZ RADIO VISUAL
        // ========================
        document.querySelectorAll('.quiz-container label, #quiz-container label, [data-quiz-labels] label').forEach(function(label) {
            label.addEventListener('click', function() {
                var radio = label.querySelector('input[type="radio"]');
                if (radio) {
                    var name = radio.name;
                    document.querySelectorAll('input[name="' + name + '"]').forEach(function(input) {
                        input.parentElement.classList.remove('bg-indigo-50', 'border-indigo-500');
                        input.parentElement.classList.add('border-slate-100');
                    });
                    label.classList.remove('border-slate-100');
                    label.classList.add('bg-indigo-50', 'border-indigo-500');
                    radio.checked = true;
                }
            });
        });

        // ========================
        // 7. LESSON SIDEBAR SCROLL
        // ========================
        var tocLinks = document.querySelectorAll('.toc-link');
        tocLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                var targetId = link.getAttribute('href').substring(1);
                var target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                tocLinks.forEach(function(l) { l.classList.remove('bg-indigo-50', 'text-indigo-700'); });
                link.classList.add('bg-indigo-50', 'text-indigo-700');
            });
        });

        // ========================
        // 8. ACTIVE SIDEBAR TRACKING
        // ========================
        var sections = document.querySelectorAll('section[id]');
        if (tocLinks.length && sections.length) {
            window.addEventListener('scroll', function() {
                var current = '';
                sections.forEach(function(section) {
                    var top = section.offsetTop - 120;
                    if (window.scrollY >= top) {
                        current = section.getAttribute('id');
                    }
                });
                tocLinks.forEach(function(link) {
                    link.classList.remove('bg-indigo-50', 'text-indigo-700');
                    if (link.getAttribute('href') === '#' + current) {
                        link.classList.add('bg-indigo-50', 'text-indigo-700');
                    }
                });
            });
        }

        // ========================
        // 9. PROGRESS SAVER
        // ========================
        var progressCheckboxes = document.querySelectorAll('[data-save-progress]');
        progressCheckboxes.forEach(function(cb) {
            var key = cb.getAttribute('data-save-progress');
            var saved = localStorage.getItem(key);
            if (saved === 'true') cb.checked = true;
            cb.addEventListener('change', function() {
                localStorage.setItem(key, cb.checked);
            });
        });

        // ========================
        // 10. SMOOTH SCROLL FOR ALL ANCHOR LINKS
        // ========================
        document.querySelectorAll('a[href^="#"]').forEach(function(a) {
            a.addEventListener('click', function(e) {
                var href = a.getAttribute('href');
                if (href !== '#') {
                    var target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });

    });
})();
