# ملاحظات الدرس 21: API Resources وتنظيم البيانات

## المفاهيم الأساسية
- **API Resource**: طبقة (Layer) بين قاعدة البيانات وواجهة المستخدم لتحويل البيانات وتنقيتها.
- **toArray()**: الدالة التي تحدد الحقول المرسلة للواجهة.
- **Collection Resource**: تطبيق الـ Resource على قائمة كاملة.
- **Conditional Attribute**: حقل يُرسَل فقط إذا تحقق شرط (مثلاً للمدير فقط).

## الأوامر المستخدمة
- `php artisan make:resource ProjectResource` - إنشاء Resource للمشاريع
- `php artisan make:resource TaskResource` - إنشاء Resource للمهام

## الكود الأساسي
- `ProjectResource::collection($projects)` - في الـ Controller لتطبيق Resource على القائمة
- `$this->when(condition, value)` - إرسال شرطي
- `$this->whenLoaded('relation')` - إرسال علاقة فقط إذا كانت محملة مسبقاً

## أين يظهر في FlowPilot
- `app/Http/Resources/ProjectResource.php` - Resource المشاريع
- `app/Http/Resources/TaskResource.php` - Resource المهام

## الأخطاء الشائعة
1. نسيان `use` في الـ Controller ← خطأ Class not found
2. عدم استخدام `?` مع الحقول الفارغة ← خطأ Call to member function on null
3. إرسال `password` أو بيانات حساسة بالخطأ
4. مشكلة N+1 عند استخدام `->count()` داخل Resource
