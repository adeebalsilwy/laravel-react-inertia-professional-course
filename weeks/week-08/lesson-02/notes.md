# ملخص الدرس: Deployment Workflow

## الفكرة الأساسية
النشر هو نقل التطبيق إلى خادم أو منصة استضافة وتشغيله للمستخدمين. Workflow يعني ترتيب الخطوات حتى لا ننسى شيئاً.

## لماذا هذا مهم؟
النشر العشوائي يسبب أخطاء كثيرة مثل صلاحيات الملفات أو عدم تشغيل migrations أو نسيان build.

## داخل FlowPilot
FlowPilot يصبح قابلاً للعرض خارج جهاز الطالب، ويمكن تقديمه كمشروع نهائي.

## المثال
git pull origin main
composer install --no-dev --optimize-autoloader
npm ci
npm run build
php artisan migrate --force
php artisan queue:restart

## نتيجة الدرس
خطة نشر عملية يمكن اتباعها عند رفع FlowPilot.
