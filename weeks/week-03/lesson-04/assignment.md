# واجب الدرس 12: قراءة البيانات بكفاءة وتحسين الاستعلامات

## الهدف
تطبيق 6 تقنيات لتحسين استعلامات Eloquent في مشروع FlowPilot.

## المهارات المستهدفة
- Eager Loading بـ ::with() (علاقات متداخلة، withCount)
- Query Scopes
- ::when() للاستعلام الشرطي
- Chunking للبيانات الكبيرة
- Caching بـ Cache::remember()
- select() للأعمدة المحددة

## الخطوات

### 1. إضافة Query Scopes إلى Project Model
```php
public function scopeActive($query) { return $query->where('status', 'active'); }
public function scopeStatus($query, $status) { return $query->where('status', $status); }
public function scopeWithEssential($query) {
    return $query->with(['user:id,name', 'tasks'])
        ->withCount(['tasks as completed_count' => fn($q) => $q->where('status','completed')]);
}
```

### 2. إنشاء Controller محسّن
```bash
php artisan make:controller ProjectController
```
في index():
- استخدم select('id','name','status','deadline')
- استخدم withEssential()
- استخدم ::when() للبحث والفلترة
- استخدم paginate(10)

### 3. إضافة Caching
لفّ الاستعلام بـ Cache::remember('projects.index', 3600, function() { ... })

### 4. مسح Cache عند التحديث
في booted() من Project Model:
```php
static::created(fn() => Cache::forget('projects.index'));
static::updated(fn() => Cache::forget('projects.index'));
static::deleted(fn() => Cache::forget('projects.index'));
```

### 5. اختبار الأداء
استخدم DB::enableQueryLog() في Tinker. قارن عدد الاستعلامات قبل وبعد.

### 6. Chunking Command
```bash
php artisan make:command ArchiveOldProjects
```
استخدم chunkById لأرشفة المشاريع التي انتهت مدتها.

## معايير التقييم (20 درجة)
- Query Scopes: 4
- Controller محسّن: 4
- Caching: 4
- Boot events: 3
- اختبار الأداء: 3
- Chunking: 2

## التحدي الإضافي
- scopeForUser
- withExists('tasks', 'has_tasks')
- Debug Middleware
- Lazy Collections (cursor())

## التسليم
- كود Models
- كود Controller
- كود Command
- Screenshots
- ملف ZIP
