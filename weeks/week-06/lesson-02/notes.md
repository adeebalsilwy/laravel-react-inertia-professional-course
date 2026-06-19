# ملاحظات الدرس 22: البحث والفلاتر المتقدمة

## المفاهيم الأساسية
- **when()**: دالة Laravel تنفذ callback إذا تحقق الشرط. بديل ذكي عن if.
- **where()**: تضيف شرط AND للاستعلام.
- **orWhere()**: تضيف شرط OR للاستعلام.
- **LIKE**: عامل SQL للبحث النصي الجزئي مع % (نسبة مئوية).
- **appends()**: تحافظ على معاملات URL في روابط الترقيم.
- **Preserve State**: إبقاء حالة الفلاتر عند التنقل بين الصفحات.

## الأوامر والكود
- `$request->input('search')` - قراءة معامل البحث
- `$request->only(['search', 'status'])` - استخراج مجموعة من المعاملات
- `->when($search, fn($q, $s) => $q->where(...))` - استعلام شرطي
- `->paginate(10)->appends($request->only([...]))` - ترقيم مع حفظ الفلاتر

## أين يظهر في FlowPilot
- `app/Http/Controllers/ProjectController.php` - بحث وفلاتر المشاريع
- `app/Http/Controllers/TaskController.php` - بحث وفلاتر المهام
- `resources/js/Pages/Projects/Index.jsx` - واجهة البحث في React

## الأخطاء الشائعة
1. نسيان `appends()` → تفقد الفلاتر عند تغيير الصفحة
2. استخدام `where()` بدلاً من `orWhere()` للبحث في حقول متعددة
3. عدم التحقق من null للتواريخ الاختيارية
4. عدم تمرير `filters` إلى Inertia كـ props
