# ملاحظات الدرس 5: فهم المسارات في Laravel وربطها بصفحات React

- المفهوم الأساسي: Route هو الرابط الذي يستقبل طلب المستخدم في Laravel. Controller هو الملف الذي يعالج الطلب. Inertia::render يعرض صفحة React بدلاً من Blade. هذه الرحلة هي أساس كل صفحة داخل FlowPilot.
- أين يظهر في FlowPilot: صفحة المشاريع في FlowPilot تبدأ من /projects، ثم ينتقل الطلب إلى ProjectController، ثم تعرض صفحة Projects/Index.
- أهم ملف أو مكان تنفيذ: routes/web.php
- راجع الأخطاء الشائعة بعد التطبيق.
