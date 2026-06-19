# ملاحظات الدرس 12: قراءة البيانات بكفاءة وتحسين الاستعلامات

## لماذا الأداء مهم؟
- تطبيق بطيء = خسارة المستخدمين
- هدفنا: أقل من 500ms لكل صفحة
- مع 1000 مستخدم، كل استعلام إضافي يسبب تأخيراً ملحوظاً

## 1. Eager Loading (::with())
- يجلب العلاقات مقدماً لمنع N+1
- with(['relation', 'relation.nested'])
- with(['relation' => fn($q) => $q->where(...)]) للشروط
- withCount(['relation']) → $model->relation_count
- with('relation:column1,column2') لتحديد الأعمدة

## 2. Lazy Loading vs Eager Loading
- Lazy: يجلب العلاقة عند استخدامها (افتراضي)
- Eager: يجلب العلاقة مسبقاً (مع ::with())
- استخدم Eager عندما تعلم أنك ستحتاج العلاقة
- تجنب Lazy في الحلقات (foreach)

## 3. Query Scopes
- Local Scope: دالة تبدأ بـ scope (scopeActive)
- الاستدعاء: Model::active()->get() (بدون scope)
- Scope مع معاملات: scopeStatus($query, $status)
- Global Scope: تطبق على كل استعلام (تستخدم بحذر)

## 4. ::when() للاستعلام الشرطي
```php
Model::when($condition, fn($q, $v) => $q->where('col', $v))
```
- ينفذ الـ Closure فقط إذا كان الشرط true
- مثالي للـ Search و Filter Forms

## 5. Chunking
- يقسم النتائج الكبيرة إلى أجزاء
- `Model::chunk(100, fn($records) => ...)`
- `Model::chunkById(100, fn($records) => ...)` للعمليات الحساسة
- يمنع استهلاك الذاكرة الزائد

## 6. Caching (Cache::remember)
```php
$data = Cache::remember('key', $seconds, fn() => ...);
```
- يحفظ النتيجة في ذاكرة سريعة
- TTL (Time To Live) بالمدة بالثواني
- امسح الـ Cache عند التحديث: Cache::forget('key')
- استخدم Cache::rememberForever() للبيانات الثابتة

## 7. select() للأعمدة المحددة
- `Model::select('id', 'name')->get()` بدلاً من `Model::all()`
- في العلاقات: `with('relation:column1,column2')` (يجب تضمين id)
- يقلل حجم البيانات المنقولة بين MySQL و PHP

## 8. تقنيات إضافية
- `->paginate(N)`: تقسيم النتائج إلى صفحات
- `->cursor()`: Lazy Collection (يجلب سجلاً واحداً كل مرة)
- `->exists()`: التحقق من وجود سجلات (أسرع من count)
- `DB::enableQueryLog()`: لقياس عدد الاستعلامات في Tinker

## أخطاء شائعة
1. N+1 في الحلقات (نسيان ::with())
2. ::all() لبيانات ضخمة (استخدم chunk/paginate)
3. Cache قديم (نسيان مسحه)
4. select() بدون id في العلاقات (تسبب أخطاء)
5. Global Scopes غير متوقعة

## روابط مهمة
- [توثيق Eager Loading](https://laravel.com/docs/12.x/eloquent-relationships#eager-loading)
- [توثيق Query Scopes](https://laravel.com/docs/12.x/eloquent#query-scopes)
- [توثيق Cache](https://laravel.com/docs/12.x/cache)
- [توثيق Chunking](https://laravel.com/docs/12.x/eloquent#chunking)
