# واجب الدرس 13: تسجيل الدخول وإنشاء حسابات المستخدمين

## الهدف
تطبيق مفهوم المصادقة عملياً داخل مشروع FlowPilot باستخدام Laravel Breeze مع React و Inertia.js.

## المطلوب
1. **إنشاء مشروع Laravel جديد** باسم `flowpilot`.
2. **تثبيت Laravel Breeze** باستخدام الأمر `composer require laravel/breeze --dev`.
3. **تثبيت Breeze مع React** باستخدام الأمر `php artisan breeze:install react`.
4. **تشغيل التهجير (Migration)** لإنشاء جدول `users` في قاعدة البيانات.
5. **إنشاء حساب مستخدم جديد** من صفحة `/register`.
6. **تسجيل الدخول** وتأكيد ظهور اسم المستخدم في Dashboard.
7. **اختبار حماية المسارات** بمحاولة فتح `/dashboard` في نافذة Incognito.
8. **تخصيص واجهة تسجيل الدخول** (تغيير الألوان والنصوص لتناسب FlowPilot).

## الملفات المطلوب مراجعتها
- `routes/auth.php` - مسارات المصادقة
- `app/Models/User.php` - نموذج المستخدم
- `resources/js/Pages/Auth/Login.jsx` - صفحة تسجيل الدخول
- `resources/js/Pages/Auth/Register.jsx` - صفحة التسجيل
- `routes/web.php` - مسارات التطبيق
- `app/Http/Middleware/HandleInertiaRequests.php` - مشاركة بيانات المستخدم

## معيار القبول
- ✅ المستخدم يستطيع إنشاء حساب جديد.
- ✅ المستخدم يستطيع تسجيل الدخول والخروج.
- ✅ الزوار غير المسجلين يتم تحويلهم إلى صفحة الدخول.
- ✅ اسم المستخدم يظهر في الواجهة بعد تسجيل الدخول.

## تحدي إضافي
- قم بإنشاء صفحة Dashboard مخصصة تعرض معلومات المستخدم (الاسم، البريد، تاريخ الإنشاء).
- استخدم `usePage().props.auth.user` لجلب البيانات.
