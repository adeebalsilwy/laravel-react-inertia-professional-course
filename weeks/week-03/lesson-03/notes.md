# ملخص الدرس: Eloquent Models والعلاقات

## الفكرة الأساسية
Eloquent هو نظام Laravel للتعامل مع قاعدة البيانات ككائنات واضحة بدلاً من كتابة SQL في كل مرة. Model يمثل جدولاً مثل Project أو Task.

## لماذا هذا مهم؟
العلاقات تجعل الكود مفهوماً. بدلاً من سؤال قاعدة البيانات يدوياً عن مهام مشروع معين، نكتب project->tasks ونحصل على النتيجة.

## داخل FlowPilot
صفحة المشروع في FlowPilot ستحتاج عرض المهام والتعليقات والمرفقات، وهذا يعتمد على علاقات Eloquent.

## المثال
class Project extends Model
{
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}

class Task extends Model
{
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}

## نتيجة الدرس
Models مترابطة يمكن استخدامها في Controllers وصفحات Inertia.
