# 📄 واجب الدرس 8: إنشاء Dashboard أولية لمؤشرات FlowPilot

## 🎯 الهدف
بناء أول Dashboard حقيقي لـ FlowPilot يدمج كل ما تعلمته في الأسبوع الثاني.

## 📋 المطلوب بالتفصيل

### المهمة 1: DashboardController (3 نقاط)
- أنشئ Controller: `php artisan make:controller DashboardController`
- أضف دالة `index()` ترجع stats (totalProjects, completedTasks, teamMembers, pendingTasks)
- أضف مصفوفة recentProjects تحتوي على 3 مشاريع
- استخدم `Inertia::render('Dashboard', ['stats' => $stats, 'recentProjects' => $recentProjects])`

### المهمة 2: المسار (1 نقطة)
- أضف Route في web.php: `Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');`

### المهمة 3: صفحة Dashboard.jsx (4 نقاط)
- استقبل Props: stats و recentProjects
- استخدم usePage() لاستخراج auth.user.name
- اعرض تحية ترحيبية: "أهلاً بك يا [الاسم]"
- اعرض 4 StatCards في Grid متجاوب
- اعرض recentProjects باستخدام ProjectCard

### المهمة 4: التصميم المتجاوب (1 نقطة)
- StatCards: عمود واحد موبايل → 4 أعمدة سطح مكتب
- ProjectCards: عمود واحد موبايل → 3 أعمدة سطح مكتب

### المهمة 5: ربط Layout (1 نقطة)
- استخدم `Dashboard.layout = page => <AppLayout children={page} />`

## ✅ معايير القبول (10 نقاط)
- /dashboard يعمل بدون أخطاء (3 نقاط)
- 4 بطاقات إحصائيات تظهر (2 نقطة)
- قائمة المشاريع تظهر (2 نقطة)
- التحية الترحيبية (1 نقطة)
- التصميم متجاوب (1 نقطة)
- الكود منظم (1 نقطة)

## ⭐ تحديات إضافية
1. أضف شريط تقدم (ProgressBar) بنسبة إنجاز المشاريع
2. أضف Activity Feed (آخر النشاطات)
3. أضف روابط سريعة (Quick Actions): مشروع جديد، مهمة جديدة

## 📬 طريقة التسليم
1. لقطة شاشة Desktop
2. لقطة شاشة Mobile
3. محتوى: DashboardController.php, Dashboard.jsx, routes/web.php
