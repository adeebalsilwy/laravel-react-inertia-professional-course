# ملخص الدرس: Queries وتحسين القراءة

## الفكرة الأساسية
Query هو طلب قراءة أو بحث من قاعدة البيانات. في Laravel نستخدم Eloquent لبناء الاستعلامات بطريقة مفهومة مثل latest وwhere وwith.

## لماذا هذا مهم؟
التطبيق البطيء يزعج المستخدم. إذا قرأنا المشاريع ثم قرأنا مهام كل مشروع بشكل منفصل سنقع في مشكلة N+1، لذلك نستخدم eager loading.

## داخل FlowPilot
Dashboard وصفحة المشاريع في FlowPilot ستعتمدان على استعلامات منظمة وسريعة.

## المثال
$projects = Project::query()
    ->withCount(["tasks", "tasks as done_tasks_count" => fn($q) => $q->where("status", "done")])
    ->latest()
    ->paginate(10);

## نتيجة الدرس
قراءة بيانات المشاريع بشكل أسرع وأنظف.
