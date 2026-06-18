# ملخص الدرس: إنشاء المشاريع وإدارتها

## الفكرة الأساسية
CRUD يعني إنشاء Create، قراءة Read، تعديل Update، وحذف Delete. وهو أساس أغلب تطبيقات الإدارة.

## لماذا هذا مهم؟
المشاريع هي قلب FlowPilot. بدون إنشاء وإدارة المشاريع لن نستطيع إضافة مهام أو فرق أو تقارير.

## داخل FlowPilot
بعد هذا الدرس يستطيع الطالب إنشاء مشروع جديد وتعديله وحذفه من واجهة FlowPilot.

## المثال
public function store(StoreProjectRequest $request)
{
    $project = Project::create($request->validated() + [
        "user_id" => auth()->id(),
    ]);

    return redirect()->route("projects.show", $project);
}

## نتيجة الدرس
نظام إدارة مشاريع كامل أولي داخل FlowPilot.
