# واجب الدرس 11: فهم Eloquent Models والعلاقات بين البيانات

## الهدف
إنشاء Models مع العلاقات الكاملة لتطبيق FlowPilot باستخدام Eloquent ORM.

## المهارات المستهدفة
- إنشاء Models باستخدام Artisan
- تعريف العلاقات: belongsTo, hasMany, belongsToMany
- استخدام $fillable لحماية البيانات
- إنشاء Accessors و Mutators
- الاستعلام بـ Eloquent
- فهم وحل مشكلة N+1

## الخطوات

### 1. إنشاء Models
```bash
php artisan make:model Project -m
php artisan make:model Task -m
php artisan make:model Team -m
```
(User model موجود مسبقاً)

### 2. إضافة العلاقات إلى User Model
```php
public function ownedProjects() { return $this->hasMany(Project::class); }
public function memberOfProjects() { return $this->belongsToMany(Project::class)->withPivot('role','joined_at'); }
public function assignedTasks() { return $this->hasMany(Task::class, 'assigned_to'); }
```

### 3. Project Model
- $fillable = ['user_id', 'name', 'description', 'status', 'deadline']
- user() → belongsTo(User::class)
- tasks() → hasMany(Task::class)
- members() → belongsToMany(User::class)->withPivot('role','joined_at')
- Accessor: getStatusAttribute يترجم status إلى العربية

### 4. Task Model
- $fillable = ['project_id', 'assigned_to', 'title', 'description', 'status', 'priority', 'due_date']
- project() → belongsTo(Project::class)
- assignee() → belongsTo(User::class, 'assigned_to')

### 5. اختبار Tinker
```bash
php artisan tinker
```
اختبر جميع العلاقات وخذ Screenshot.

### 6. اختبار N+1
```php
// قبل: foreach (Project::all() as $p) { $p->user->name; } ← 1+N استعلام
// بعد: foreach (Project::with('user')->get() as $p) { $p->user->name; } ← 2 استعلامات
```

## معايير التقييم (20 درجة)
- Models منشأة: 4
- علاقات صحيحة: 6
- $fillable: 3
- Accessor: 3
- اختبار Tinker: 2
- فهم N+1: 2

## التحدي الإضافي
- Accessor للـ priority
- Mutator لـ name (title case)
- علاقة team في Project
- Query Scope للـ active

## التسليم
- Screenshot من Tinker
- كود الـ Models
- ملف نصي باستعلامات Tinker
- رفع كـ ZIP
