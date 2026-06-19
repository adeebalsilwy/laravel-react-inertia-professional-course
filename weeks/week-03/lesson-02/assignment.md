# واجب الدرس 10: Migrations و Seeders و Factories

## الهدف من الواجب
تطبيق عملي لمفاهيم Migrations و Seeders و Factories في Laravel. ستقوم بإنشاء جداول قاعدة بيانات FlowPilot وزراعتها ببيانات اختبارية.

## المهارات المستهدفة
- إنشاء وتشغيل Migrations باستخدام Artisan
- كتابة الكود داخل up() و down()
- استخدام أنواع الأعمدة المختلفة (id, foreignId, string, text, enum, timestamps, softDeletes)
- إنشاء Seeders لزراعة البيانات الأولية
- إنشاء Factories مع Faker لتوليد بيانات وهمية
- تنظيم DatabaseSeeder

## المتطلبات
- مشروع Laravel 12 مثبت
- MySQL أو MariaDB
- اتصال قاعدة بيانات فعال (ملف .env مضبوط)

## الخطوات

### 1. إعداد المشروع
```bash
composer create-project laravel/laravel flowpilot
cd flowpilot
```
عدّل ملف `.env` ليتصل بقاعدة بيانات باسم `flowpilot`.

### 2. إنشاء 4 Migrations
```bash
php artisan make:migration create_projects_table
php artisan make:migration create_tasks_table
php artisan make:migration create_teams_table
php artisan make:migration create_project_user_table
```

### 3. كتابة Migrations

**projects:** id, user_id (FK→users), name, description (nullable), status (default 'pending'), deadline (nullable), timestamps, softDeletes

**tasks:** id, project_id (FK→projects), assigned_to (FK→users, nullable), title, description (nullable), status (enum: pending/in_progress/completed, default 'pending'), priority (enum: low/medium/high/critical, default 'medium'), due_date (nullable), timestamps, softDeletes

**teams:** id, owner_id (FK→users), name, description (nullable), timestamps

**project_user:** id, project_id (FK→projects), user_id (FK→users), role (nullable), joined_at (nullable), timestamps

### 4. إنشاء Seeders
```bash
php artisan make:seeder UserSeeder
php artisan make:seeder ProjectSeeder
php artisan make:seeder TaskSeeder
```

UserSeeder: إنشاء 3 مستخدمين (أحمد، سارة، محمد)
ProjectSeeder: استخدام Factory لإنشاء 10 مشاريع للمستخدم الأول
TaskSeeder: استخدام Factory لإنشاء 30 مهمة موزعة على المشاريع

### 5. إنشاء Factories
```bash
php artisan make:factory ProjectFactory
php artisan make:factory TaskFactory
```

استخدم دوال Faker: sentence(), paragraph(), randomElement(), dateTimeBetween()

### 6. تنظيم DatabaseSeeder
```php
$this->call([
    UserSeeder::class,
    ProjectSeeder::class,
    TaskSeeder::class,
]);
```

### 7. التنفيذ
```bash
php artisan migrate:fresh --seed
```

### 8. التحقق
```bash
php artisan migrate:status
```
افتح phpMyAdmin وتأكد من وجود الجداول والبيانات.

## التحدي الإضافي
1. أضف أعمدة إضافية لجدول project_user: hourly_rate (decimal), is_manager (boolean)
2. أنشئ Seeder يوزع 5 أعضاء عشوائياً لكل مشروع
3. أنشئ Migration لإضافة عمود color إلى جدول projects

## معايير التقييم (20 درجة)
- جميع Migrations تعمل: 5 درجات
- صحة الأعمدة والعلاقات: 4 درجات
- Seeders تعمل: 4 درجات
- Factories مع Faker: 3 درجات
- DatabaseSeeder منظم: 2 درجات
- توثيق وصور: 2 درجات

## طريقة التسليم
1. تصدير SQL + صور
2. ضغط في مجلد
3. رفع على Google Drive
4. مشاركة الرابط
