# 📝 ملاحظات الدرس 5: فهم المسارات في Laravel وربطها بصفحات React

## 🎯 المفاهيم الأساسية
- **Route (المسار)**: هو رابط URL يحدد أي كود سيعمل عندما يزور المستخدم صفحة معينة. يُكتب في `routes/web.php` باستخدام `Route::get()` أو `Route::post()`.
- **Controller (وحدة التحكم)**: ملف منفصل (`app/Http/Controllers/`) ينظم كود معالجة الطلبات. يُنشأ بأمر `php artisan make:controller`.
- **Inertia::render()**: دالة ترسل البيانات من Laravel إلى صفحات React. تأخذ معاملين: (1) مسار صفحة React، (2) البيانات المرسلة كمصفوفة.
- **Named Routes (المسارات المسماة)**: نعطي المسار اسماً باستخدام `->name('route.name')` ثم نستخدمه في React عبر التابع `route('route.name')`.

## 🔄 دورة حياة الطلب (Request Lifecycle)
1. المستخدم يكتب رابطاً في المتصفح (مثلاً `/projects`)
2. Laravel يبحث في `routes/web.php` عن Route يطابق الرابط
3. الـ Route يوجّه الطلب إلى الـ Controller المناسب
4. الـ Controller يجمع البيانات (من قاعدة بيانات أو مصفوفة)
5. الـ Controller يستدعي `Inertia::render()` ليرسل البيانات
6. Inertia يمرّر البيانات إلى صفحة React
7. صفحة React تعرض الواجهة للمستخدم

## 📂 الملفات المستخدمة في هذا الدرس
| الملف | المسار | الوظيفة |
|-------|--------|---------|
| ملف المسارات | `routes/web.php` | تعريف كل مسارات التطبيق |
| Controller | `app/Http/Controllers/ProjectController.php` | معالجة طلبات المشاريع |
| صفحة React | `resources/js/Pages/Projects/Index.jsx` | عرض واجهة المشاريع |

## 📋 أنواع المسارات (HTTP Methods)
| الدالة | الاستخدام | مثال |
|--------|-----------|-------|
| `Route::get()` | عرض صفحة أو بيانات | `Route::get('/projects', ...)` |
| `Route::post()` | إرسال بيانات جديدة | `Route::post('/projects', ...)` |
| `Route::put()` | تحديث بيانات موجودة | `Route::put('/projects/{id}', ...)` |
| `Route::delete()` | حذف بيانات | `Route::delete('/projects/{id}', ...)` |

## 💡 نصائح سريعة
- دائماً استخدم Named Routes (`->name()`) بدلاً من كتابة الروابط نصياً
- اسم الـ Controller يبدأ بحرف كبير (ProjectController) وليس (projectController)
- اسم صفحة React في `Inertia::render()` يجب أن يطابق مسار الملف بالضبط
- إذا واجهت خطأ 404، تأكد من الرابط في المتصفح يطابق الرابط في `Route::get()`
- استخدم `php artisan route:list` في الطرفية لعرض كل المسارات المسجّلة

## 🔗 أين يظهر هذا في FlowPilot؟
صفحة `/projects` في FlowPilot هي أول تطبيق عملي لفهم المسارات. كل صفحات التطبيق (Dashboard، المهام، الفريق) ستتبع نفس النمط: Route → Controller → Inertia → React.
