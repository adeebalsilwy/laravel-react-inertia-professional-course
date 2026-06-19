# واجب الدرس 15: Middleware وحماية الصفحات الخاصة

## الهدف
إنشاء Middleware مخصص يفحص صلاحية الوصول للمشاريع وتطبيقه على مسارات FlowPilot.

## المطلوب
1. **إنشاء Middleware** باسم `CheckProjectAccess` باستخدام Artisan.
2. **كتابة منطق الفحص**: تحقق من وجود المشروع، ثم تحقق من أن المستخدم هو المالك أو عضو في الفريق.
3. **تسجيل Middleware** في `app/Http/Kernel.php` في `$middlewareAliases`.
4. **تطبيق Middleware** على مسارات `projects` في `routes/web.php`.
5. **اختبار Middleware**: إنشاء مستخدمين اثنين، أحدهما يحاول فتح مشروع الآخر → يجب أن يظهر 403.

## الملفات المستهدفة
- `app/Http/Middleware/CheckProjectAccess.php` - إنشاء وتحرير
- `app/Http/Kernel.php` - تعديل (إضافة alias)
- `routes/web.php` - تعديل (تطبيق middleware)
- `app/Models/Project.php` - للمراجعة

## معيار القبول
- ✅ إنشاء Middleware مخصص.
- ✅ تسجيله في Kernel.php.
- ✅ تطبيقه على مسارات المشاريع.
- ✅ المستخدم غير المالك يحصل على 403.
- ✅ المستخدم المالك يمر بدون مشاكل.

## تحدي إضافي
- أنشئ Middleware `CheckRole` يقبل أدوار مسموح بها كـ Parameters.
- طبقه على مسار `/admin` بحيث يسمح فقط للأدوار `admin` و `manager`.
