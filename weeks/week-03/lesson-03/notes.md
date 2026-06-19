# ملاحظات الدرس 11: فهم Eloquent Models والعلاقات بين البيانات

## ما هو Eloquent ORM؟
- **ORM** = Object-Relational Mapping: يترجم البيانات بين قاعدة البيانات (جداول) و PHP (كائنات)
- **Model** يمثل جدولاً. كل **كائن (instance)** يمثل سجلاً. كل **خاصية (property)** تمثل عموداً
- تقع Models في `app/Models/`

## إنشاء Models
```bash
php artisan make:model Project
php artisan make:model Project -m    # مع Migration
php artisan make:model Project -mc   # مع Migration + Controller
php artisan make:model Project -mcs  # مع Migration + Controller + Seeder
```

## Mass Assignment Protection
- `$fillable` = قائمة الحقول المسموح ملؤها (القائمة البيضاء)
- `$guarded` = قائمة الحقول الممنوعة (القائمة السوداء)
- استخدم `$fillable` دائماً للأمان

## العلاقات (Relationships)

### belongsTo (ينتمي إلى)
- استخدمها عندما يحتوي جدولك على FK
- مثال: Task → Project (لأن task فيها project_id)
```php
public function project() { return $this->belongsTo(Project::class); }
```

### hasMany (يملك عدة)
- استخدمها عندما يكون FK في الجدول الآخر
- مثال: Project → Tasks
```php
public function tasks() { return $this->hasMany(Task::class); }
```

### belongsToMany (متعدد لمتعدد)
- استخدمها مع جدول Pivot
- مثال: Project ↔ Users (members)
```php
public function members() {
    return $this->belongsToMany(User::class)->withPivot('role', 'joined_at');
}
```

## الاستعلام بـ Eloquent
- `::all()`: جميع السجلات
- `::find($id)`: سجل بالـ ID
- `::findOrFail($id)`: سجل بالـ ID أو 404
- `::where('col', 'val')->get()`: بشرط
- `::with('relation')`: Eager Loading
- `->first()`: أول سجل
- `->count()`: عدد السجلات
- `->pluck('col')`: أعمدة كمصفوفة
- `->latest()`: الأحدث أولاً
- `->take(N)`: عدد محدود

## مشكلة N+1
- تحدث عندما تجلب سجلات ثم تجلب علاقة كل سجل في حلقة
- كل سجل يسبب استعلام إضافي → N+1 استعلام
- الحل: `::with('relation')` → استعلامين فقط

## Accessors و Mutators

### Accessor (عند القراءة)
```php
public function getXxxAttribute($value) { return modified_value; }
// $model->xxx يستدعي الـ Accessor
```

### Mutator (عند الكتابة)
```php
public function setXxxAttribute($value) {
    $this->attributes['xxx'] = modified_value;
}
// $model->xxx = 'value' يستدعي الـ Mutator
```

## أخطاء شائعة
1. **1054 Unknown column**: علاقة تبحث عن عمود غير موجود
2. **Call to undefined method**: العلاقة غير معرفة في الـ Model
3. **N+1**: أداء بطيء بسبب استعلامات متعددة
4. **MassAssignmentException**: لم تحدد $fillable
5. **علاقة عكسية خاطئة**: من يملك FK يستخدم belongsTo

## روابط مهمة
- [توثيق Eloquent](https://laravel.com/docs/12.x/eloquent)
- [توثيق العلاقات](https://laravel.com/docs/12.x/eloquent-relationships)
- [توثيق Accessors/Mutators](https://laravel.com/docs/12.x/eloquent-mutators)
