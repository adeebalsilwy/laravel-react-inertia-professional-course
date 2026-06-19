# ملاحظات الدرس 2: تثبيت Laravel 12 وربطه بـ React و Inertia

## المفهوم الأساسي
- **Laravel 12:** إطار عمل PHP للـ Back-end. يدير قواعد البيانات، المصادقة، المسارات، والمنطق.
- **React 18+:** مكتبة JavaScript للـ Front-end. تبني واجهات تفاعلية سريعة.
- **Inertia.js:** جسر يربط Laravel بـ React دون بناء REST API منفصل.
- **Breeze:** قالب بداية (Starter Kit) من Laravel يضيف Inertia + React + Tailwind + Auth تلقائياً.
- **Vite:** أداة بناء JavaScript حديثة (تستخدمها Laravel 12 بدلاً من Laravel Mix).

## الأوامر الأساسية
| الأمر | الشرح |
|-------|--------|
| `composer create-project laravel/laravel flowpilot` | إنشاء مشروع Laravel جديد |
| `composer require laravel/breeze --dev` | تثبيت Breeze |
| `php artisan breeze:install react` | نشر Breeze مع خيار React |
| `npm install` | تحميل مكتبات JavaScript |
| `php artisan serve` | تشغيل خادم Laravel المحلي |
| `npm run dev` | تشغيل خادم Vite للتطوير |

## هيكل المجلدات المهم
- `app/Http/Controllers/` - وحدات التحكم (منطق التطبيق)
- `routes/web.php` - مسارات الويب
- `resources/js/Pages/` - صفحات React
- `resources/js/Components/` - مكونات React القابلة لإعادة الاستخدام
- `config/` - ملفات الإعدادات
- `database/migrations/` - هيكل قاعدة البيانات

## أخطاء شائعة
- نسيان تشغيل `npm run dev` ← الصفحة تظهر بدون CSS
- إغلاق إحدى نافذتي Terminal ← الخادم يتوقف
- مشكلة `APP_KEY` ← شغل `php artisan key:generate`
- خطأ `Route [login] not defined` ← أعد تشغيل Breeze

## في FlowPilot
مجلد `flowpilot` هو بيت المشروع. كل التعديلات القادمة ستكون داخل هذا المجلد. احتفظ به واعمل عليه نسخة احتياطية.