# ملاحظات الدرس 10: Migrations و Seeders و Factories للمبتدئين

## ما هي الـ Migration؟
- ملف PHP يصف تغييراً في قاعدة البيانات (إنشاء جدول، إضافة عمود)
- يسمح بتتبع التغييرات والتراجع عنها (Version Control لقاعدة البيانات)
- موجودة في مجلد `database/migrations/`
- ينشئها أمر `php artisan make:migration`

## بنية ملف Migration
- `up()`: ينفذ التغيير (إنشاء جدول، إضافة عمود)
- `down()`: يعكس التغيير (حذف الجدول، حذف العمود)
- `Schema::create('table_name', function(Blueprint $table) { ... })`
- `Schema::dropIfExists('table_name')` في `down()`

## أنواع الأعمدة (Column Types)
- `$table->id()`: المفتاح الأساسي (bigIncrements)
- `$table->string('name', 255)`: نص قصير
- `$table->text('description')`: نص طويل
- `$table->foreignId('user_id')->constrained()`: مفتاح أجنبي
- `$table->boolean('is_active')`: قيمة منطقية
- `$table->enum('status', ['a','b','c'])`: قيمة من قائمة
- `$table->date('deadline')`: تاريخ
- `$table->dateTime('due_date')`: تاريخ ووقت
- `$table->timestamps()`: يضيف created_at و updated_at
- `$table->softDeletes()`: يضيف deleted_at

## التعديلات (Modifiers)
- `->nullable()`: يمكن أن يكون NULL
- `->default('value')`: قيمة افتراضية
- `->unique()`: قيمة فريدة
- `->constrained()`: ينشئ FK تلقائياً
- `->cascadeOnDelete()`: حذف تلقائي عند حذف السجل الأصلي

## أوامر Artisan للـ Migrations
- `php artisan migrate`: تنفيذ Migrations
- `php artisan migrate:rollback`: التراجع عن آخر batch
- `php artisan migrate:refresh`: rollback + migrate
- `php artisan migrate:fresh`: حذف الجداول + إعادة إنشائها
- `php artisan migrate:status`: عرض حالة التنفيذ
- `php artisan make:migration migration_name`: إنشاء ملف جديد

## Seeders
- ملفات تزرع بيانات أولية في قاعدة البيانات
- موجودة في `database/seeders/`
- `php artisan make:seeder XxxSeeder`
- تحتوي على `run()` method
- تستخدم `Model::create([...])` أو `Model::factory()->count(N)->create()`
- تُسجل في `DatabaseSeeder.php` باستخدام `$this->call([...])`
- `php artisan db:seed` لتشغيلها
- `php artisan migrate:fresh --seed` لإعادة الإنشاء مع الزرع

## Factories
- مصانع تولد بيانات وهمية
- موجودة في `database/factories/`
- `php artisan make:factory XxxFactory`
- تستخدم مكتبة Faker عبر `fake()->...`
- تعريف `definition()` method يحدد شكل البيانات
- استخدام: `Model::factory()->count(N)->create()`

## دوال Faker الشائعة
- `fake()->name()`: اسم عشوائي
- `fake()->email()`: بريد إلكتروني عشوائي
- `fake()->sentence(N)`: جملة من N كلمات
- `fake()->paragraph(N)`: N فقرات
- `fake()->randomElement(['a','b'])`: عنصر عشوائي من مصفوفة
- `fake()->numberBetween(1, 100)`: رقم عشوائي
- `fake()->date()`: تاريخ عشوائي
- `fake()->dateTimeBetween('-1 year', '+1 year')`: تاريخ ضمن نطاق

## أخطاء شائعة
1. جدول موجود مسبقاً → استخدم migrate:fresh
2. انتهاك FK → رتب Seeders بشكل صحيح
3. Class not found → سجل Seeder في DatabaseSeeder
4. خطأ في نوع العمود → تحقق من الإملاء
5. فشل اتصال قاعدة البيانات → تأكد من .env

## روابط مهمة
- [توثيق Laravel Migrations](https://laravel.com/docs/12.x/migrations)
- [توثيق Laravel Seeding](https://laravel.com/docs/12.x/seeding)
- [توثيق Laravel Factories](https://laravel.com/docs/12.x/eloquent-factories)
