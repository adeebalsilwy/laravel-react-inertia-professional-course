# ملاحظات الدرس 18: بناء لوحة مهام Kanban

## المفهوم الأساسي
- Kanban: نظام بصري لإدارة سير العمل. نشأ في شركة Toyota لتحسين الإنتاج.
- يعتمد على 3 أعمدة أساسية: "معلق" (Pending)، "قيد التنفيذ" (In Progress)، "مكتمل" (Completed).
- كل مهمة (Task) تنتقل من اليسار إلى اليمين مع تقدم العمل.
- في FlowPilot: المهام تنتمي إلى مشروع (Project) ولكل مهمة حالة (status).

## أين يظهر في FlowPilot
- صفحة `/tasks/board` تعرض لوحة Kanban بثلاثة أعمدة.
- كل عمود يعرض المهام التي تنتمي إلى حالته.
- المستخدم يسحب (drag & drop) المهام بين الأعمدة لتغيير حالتها.
- بدلاً من السحب التقليدي (معقد للمبتدئين)، يمكن استخدام أزرار "← نقل ←" بجانب كل مهمة.

## الموديل والميجراشن
- جدول `tasks` يحتوي على: id, project_id, title, description, status, user_id
- حقل `status` من نوع string بقيم: 'pending', 'in_progress', 'completed'
- يمكننا إضافة enum (نوع خاص) لكن string أسهل للمبتدئين.

## تدفق تغيير الحالة (status update)
1. المستخدم يضغط زر "نقل إلى قيد التنفيذ" في React.
2. Inertia يرسل طلب PATCH إلى `/tasks/{id}/status` مع البيانات `{status: 'in_progress'}`.
3. Laravel يستقبل في دالة مخصصة (مثلاً `updateStatus()`) في TaskController.
4. يعدّل الحالة ويعيد التوجيه مع رسالة نجاح.

## الكود الرئيسي
- Route: `Route::patch('tasks/{task}/status', [TaskController::class, 'updateStatus'])`.
- Controller: دالة `updateStatus(Task $task, Request $request)` تقوم بتحديث status.
- مكون React: ثلاثة أعمدة (`Column.jsx`) كل عمود يمرّر له المهام حسب حالتها.

## أخطاء شائعة
- نسيان كتابة `_method: 'patch'` في طلب Inertia → خطأ 405 Method Not Allowed.
- إرسال status غير صالح (مثلاً 'done' بدلاً من 'completed') → لا يعمل التحديث.
- عدم استخدام `cascadeOnDelete()` في جدول المهام → حذف المشروع يترك مهام يتيمة.
- السحب والإفلات (drag & drop) معقد للمبتدئين → استخدم الأزرار أولاً.

## نصائح
- ابدأ بالأزرار (لا تسحب) لفهم التدفق أولاً.
- أضف ألواناً مختلفة لكل حالة: أحمر للمعلق، أزرق للتنفيذ، أخضر للمكتمل.
- استخدم `$fillable` في Task Model لحقل status.
- اختبر تغيير الحالة يدوياً عبر tinker أو المتصفح.
