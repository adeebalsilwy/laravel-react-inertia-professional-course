# ملاحظات الدرس 15: Middleware وحماية الصفحات الخاصة

## المفهوم الأساسي
- **Middleware (البرمجية الوسيطة):** طبقة فحص تقع بين طلب المستخدم (Request) والتطبيق (Controller).
- **الوظيفة:** تفحص كل طلب وتقرر: هل يمر؟ أم يرد برسالة خطأ؟
- **التشبيه:** نقاط التفتيش في المطار - كل نقطة تفحص شيئاً مختلفاً.

## أنواع Middleware في Laravel
1. **Global Middleware:** ينفذ على كل طلب (مثل معالجة الـ CORS).
2. **Group Middleware:** مجموعات مسماة (مثل مجموعة 'web').
3. **Route Middleware (Aliases):** يطبق على مسارات محددة (مثل 'auth', 'guest').

## Middleware الجاهزة
- `auth`: يمنع الزوار غير المسجلين. يعيد التوجيه إلى login.
- `guest`: يسمح فقط للزوار. المسجلين يعيد توجيههم للوحة التحكم.
- `verified`: يتحقق من توثيق البريد الإلكتروني (يتطلب تفعيل MustVerifyEmail).

## إنشاء Middleware مخصص
```bash
php artisan make:middleware CheckProjectAccess
```
ينشئ ملف `app/Http/Middleware/CheckProjectAccess.php`.

## دالة handle
```php
public function handle(Request $request, Closure $next): Response
{
    // منطق الفحص هنا
    if (/* شرط الفشل */) {
        abort(403);
    }
    return $next($request);
}
```

## تسجيل Middleware في Kernel
في `app/Http/Kernel.php`، أضف لمصفوفة `$middlewareAliases`:
```php
'check.project' => \App\Http\Middleware\CheckProjectAccess::class,
```

## تطبيق على المسارات
```php
Route::middleware(['auth', 'check.project'])->group(function () {
    Route::resource('projects', ProjectController::class);
});
```

## Middleware مع Parameters
```php
// تعريف: public function handle(Request $request, Closure $next, ...$roles)
// استخدام: ->middleware('role:admin,manager')
```

## أين يظهر في FlowPilot
- كل مسارات المشاريع محمية بـ auth + check.project.
- Middleware مخصص يتحقق من صلاحية المستخدم للمشروع (مالك أو عضو فريق).

## الأخطاء الشائعة
1. عدم تسجيل Middleware في Kernel → Call to undefined method.
2. نسيان إضافة `use App\Models\Project;` في Middleware.
3. الفرق بين Global و Aliases - Aliases فقط يمكن استخدامها في المسارات.
4. عدم استخدام `abort()` أو `return $next()` بشكل صحيح.
