# واجب الدرس 14: الصلاحيات Policies وحماية المشاريع

## الهدف
تطبيق مفهوم Policies في FlowPilot لمنع المستخدمين من تعديل أو حذف مشاريع بعضهم البعض.

## المطلوب
1. **إنشاء ProjectPolicy** باستخدام `php artisan make:policy ProjectPolicy --model=Project`.
2. **تسجيل الـ Policy** في `app/Providers/AuthServiceProvider.php` داخل مصفوفة `$policies`.
3. **كتابة دوال Policy**: view (للمالك + أعضاء الفريق)، create (للجميع)، update (للمالك فقط)، delete (للمالك فقط).
4. **استخدام `$this->authorize()`** في جميع دوال ProjectController المناسبة.
5. **اختبار المنع**: أنشئ مستخدمين اثنين، واجعل أحدهما يحاول تعديل مشروع الآخر. تأكد من ظهور 403.
6. **إخفاء الأزرار في React**: استخدم `user?.id === project.user_id` لإخفاء أزرار التعديل والحذف عن غير المالكين.

## الملفات المستهدفة
- `app/Policies/ProjectPolicy.php` - إنشاء وتحرير
- `app/Providers/AuthServiceProvider.php` - تعديل
- `app/Http/Controllers/ProjectController.php` - تعديل
- `resources/js/Pages/Projects/Show.jsx` - تعديل (اختياري)

## معيار القبول
- ✅ المستخدم العادي لا يمكنه تعديل مشروع ليس ملكه.
- ✅ المستخدم العادي لا يمكنه حذف مشروع ليس ملكه.
- ✅ المالك يمكنه فعل كل شيء بمشروعه.
- ✅ أعضاء الفريق يمكنهم رؤية المشروع (إذا طبقت هذا).
- ✅ أزرار التعديل والحذف تخفى لغير المالكين في الواجهة.

## تحدي إضافي
- أضف عمود `is_admin` لجدول users عبر Migration.
- عدّل `delete()` في Policy ليسمح للمشرفين بحذف أي مشروع.
