# واجب الدرس 17: إنشاء المشاريع وإدارتها CRUD

## الهدف
تطبيق دورة CRUD الكاملة على جدول المشاريع في FlowPilot. بناء ProjectController متكامل مع التحقق من البيانات ورسائل النجاح.

## المطلوب

### 1. إنشاء الملفات
- `app/Http/Controllers/ProjectController.php` (يدوياً أو عبر Artisan)
- `app/Http/Requests/StoreProjectRequest.php` (Form Request للتحقق)
- `resources/js/Pages/Projects/Index.jsx` (صفحة عرض المشاريع)
- `resources/js/Pages/Projects/Create.jsx` (صفحة إنشاء مشروع)
- `resources/js/Pages/Projects/Edit.jsx` (صفحة تعديل مشروع)

### 2. تعديل الملفات
- `routes/web.php`: إضافة `Route::resource('projects', ProjectController::class)`
- `app/Models/Project.php`: إضافة `$fillable` أو `$guarded`

### 3. تنفيذ دوال التحكم (7 دوال)
- `index()`: جلب كل المشاريع وعرضها عبر Inertia
- `create()`: عرض صفحة إنشاء مشروع جديد
- `store(StoreProjectRequest $request)`: حفظ مشروع مع التحقق
- `show(Project $project)`: عرض مشروع واحد
- `edit(Project $project)`: عرض صفحة تعديل مشروع
- `update(StoreProjectRequest $request, Project $project)`: تحديث بيانات المشروع
- `destroy(Project $project)`: حذف المشروع

### 4. إضافة رسائل النجاح
- بعد `store()`: `return redirect()->route('projects.index')->with('success', 'تم إنشاء المشروع بنجاح');`
- بعد `update()`: رسالة نجاح التعديل
- بعد `destroy()`: رسالة نجاح الحذف

## معايير التقييم
- [ ] 7 دوال موجودة وكاملة في Controller.
- [ ] التحقق من البيانات: اسم المشروع مطلوب، الحد الأدنى 3 أحرف.
- [ ] رسائل النجاح تظهر بعد كل عملية.
- [ ] Route::resource() مسجل بشكل صحيح.
- [ ] واجهات React تستقبل البيانات من Inertia.
- [ ] الأخطاء تظهر للمستخدم في النموذج.

## التحدي الإضافي
أضف زر "نسخ" (Duplicate) ينشئ مشروعاً جديداً بنفس بيانات مشروع موجود. استخدم دالة `store()` مع تعديل بسيط.

## طريقة التسليم
1. شغّل `php artisan serve` واختبر كل عملية.
2. صوّر فيديو قصير (دقيقة) تشرح فيه الكود وتعرض النتيجة.
3. ارفع الرابط في منصة الدورة.
