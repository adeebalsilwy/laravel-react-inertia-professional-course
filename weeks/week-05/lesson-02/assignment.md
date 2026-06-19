# واجب الدرس 18: بناء لوحة مهام Kanban

## الهدف
بناء لوحة Kanban داخل FlowPilot تعرض مهام كل مشروع في 3 أعمدة (pending, in_progress, completed) مع القدرة على تغيير حالة المهمة عبر أزرار أو drag & drop.

## المطلوب

### 1. إنشاء الملفات
- `app/Models/Task.php` (موديل المهام)
- `database/migrations/xxxx_create_tasks_table.php` (جدول المهام)
- `app/Http/Controllers/TaskController.php` مع دوال: index, updateStatus
- `resources/js/Pages/Tasks/Board.jsx` (صفحة لوحة Kanban)
- `resources/js/Components/KanbanColumn.jsx` (مكون العمود الواحد)

### 2. هيكل جدول tasks
- `id` (bigIncrements)
- `project_id` (foreignId → constrained → cascadeOnDelete)
- `title` (string, 255)
- `description` (text, nullable)
- `status` (string, default: 'pending') — القيم المسموحة: pending, in_progress, completed
- `user_id` (foreignId)
- `timestamps()

### 3. دوال التحكم
- `index()`: تجلب كل المهام مع التصفية حسب المشروع (اختياري) وتعرض Board.jsx.
- `updateStatus(Request $request, Task $task)`: تحقق أن status الجديد صالح (in_array) ثم تحدثه.

### 4. واجهة Kanban
- ثلاثة أعمدة بعناوين: معلقة، قيد التنفيذ، مكتملة.
- كل عمود يظهر البطاقات (cards) الخاصة به.
- بجانب كل بطاقة: أزرار "نقل ←" و "→ نقل" لتغيير الحالة.
- استخدم Tailwind لتلوين كل عمود بلون مختلف.

### 5. إضافة التحقق من صحة الحالة
```php
$request->validate(['status' => 'required|in:pending,in_progress,completed']);
```

## معايير التقييم
- [ ] Task model مع $fillable و belongsTo(Project::class).
- [ ] جدول tasks يحتوي على جميع الأعمدة المطلوبة.
- [ ] دالة updateStatus تتحقق من صحة الحالة.
- [ ] ثلاث أعمدة تظهر في الصفحة مع ألوان مختلفة.
- [ ] أزرار تغيير الحالة تعمل وتحديث Inertia يعيد تحميل الصفحة.
- [ ] رسالة نجاح تظهر بعد تغيير الحالة.

## التحدي الإضافي
أضف إحصائيات صغيرة فوق الأعمدة: "إجمالي المهام: 7 | معلقة: 3 | قيد التنفيذ: 2 | مكتملة: 2" مع نسب مئوية (مثلاً شريط تقدم).

## طريقة التسليم
1. اختبر أن المهام تظهر في الأعمدة الصحيحة.
2. صوّر فيديو تشرح فيه الكود وتعرض تغيير حالة مهمة.
3. اشرح كيف يعمل تدفق data: من React إلى Inertia إلى Laravel إلى قاعدة البيانات والعودة.
