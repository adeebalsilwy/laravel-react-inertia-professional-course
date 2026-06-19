# واجب الدرس 21: API Resources وتنظيم البيانات

## الهدف من الواجب
تطبيق مفهوم API Resources عملياً بإنشاء TaskResource وتنظيف بيانات المهام قبل إرسالها لواجهة FlowPilot.

## الخطوات المطلوبة
1. **إنشاء TaskResource** بأمر `php artisan make:resource TaskResource`
2. **تعبئة toArray()** بالحقول: id, title, status, project_id, assigned_user_name, due_date
3. **إضافة حقل شرطي priority** باستخدام `$this->when()` ليُرسَل فقط للأولويات العالية
4. **ربط الـ Resource بالـ Controller** عبر `TaskResource::collection()` واستيراده بـ `use`
5. **اختبار النتيجة** عبر صفحة React والتأكد من صحة الـ JSON

## معايير القبول
- ظهور البيانات النظيفة في Network tab كما هو مطلوب
- عدم ظهور أي حقول حساسة أو داخلية
- عمل الحقل الشرطي بشكل صحيح
- القدرة على شرح الكود شفوياً

## نماذج للتسليم
- `TaskResource.php` كامل المحتوى
- `TaskController.php` مع التعديلات
- Screenshot من Network tab
- شرح كتابي (3-5 جمل)
