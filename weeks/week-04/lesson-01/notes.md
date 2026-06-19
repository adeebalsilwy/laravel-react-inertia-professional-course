# ملاحظات الدرس 13: تسجيل الدخول وإنشاء حسابات المستخدمين

## المفهوم الأساسي
- **المصادقة (Authentication):** عملية التحقق من هوية المستخدم عبر البريد الإلكتروني وكلمة المرور. بدونها، يمكن لأي شخص الوصول لبيانات FlowPilot.
- **Laravel Breeze:** Starter Kit جاهز يوفر نظام مصادقة متكامل مع React + Tailwind CSS + Inertia.js.
- **Session:** بعد تسجيل الدخول، Laravel ينشئ جلسة (Session) للمستخدم تبقى نشطة حتى تسجيل الخروج أو انتهاء صلاحية المتصفح.

## أين يظهر في FlowPilot
- كل مشاريع المستخدم محمية خلف نظام المصادقة.
- لا يمكن لأي زائر رؤية قائمة المشاريع أو المهام بدون تسجيل الدخول.
- شريط التنقل (Navbar) يعرض اسم المستخدم المسجل أو زر "تسجيل الدخول" حسب الحالة.

## الملفات والمجلدات المهمة
- `routes/auth.php` - مسارات المصادقة (Login, Register, Logout, Password Reset)
- `app/Models/User.php` - نموذج المستخدم مع دوال المصادقة
- `app/Http/Middleware/HandleInertiaRequests.php` - مشاركة بيانات المستخدم مع React
- `resources/js/Pages/Auth/Login.jsx` - صفحة تسجيل الدخول (React)
- `resources/js/Pages/Auth/Register.jsx` - صفحة إنشاء حساب (React)
- `routes/web.php` - مسارات التطبيق الرئيسية

## الأخطاء الشائعة
1. **419 Page Expired:** عدم استخدام CSRF token مع النماذج (Inertia يتعامل مع هذا تلقائياً).
2. **Connection refused:** خادم MySQL غير شغال.
3. **Class not found:** لم يتم تثبيت Breeze بشكل صحيح.
4. **صفحة بيضاء:** خادم Vite (npm run dev) غير شغال.
5. **Password confirmation mismatch:** اسم حقل التأكيد ليس password_confirmation.

## أوامر سريعة للتذكر
```bash
composer create-project laravel/laravel flowpilot
composer require laravel/breeze --dev
php artisan breeze:install react
npm install && npm run dev
php artisan migrate
php artisan serve
```

## ملاحظات إضافية
- الفرق بين Authentication (من أنت؟) و Authorization (ماذا تسمح له أن يفعل؟).
- Middleware 'auth' يحمي المسارات من الزوار.
- استخدام `usePage().props.auth.user` في React للوصول لبيانات المستخدم.
- Breeze يوفر: Login, Register, Forgot Password, Reset Password, Email Verification.
