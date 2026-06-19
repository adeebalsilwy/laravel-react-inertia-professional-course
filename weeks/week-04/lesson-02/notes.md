# ملاحظات الدرس 14: الصلاحيات Policies وحماية المشاريع

## المفهوم الأساسي
- **Policies (الترخيص/Authorization):** تحدد من يمكنه فعل ماذا في التطبيق بعد المصادقة.
- **الفرق عن Authentication:** Authentication تثبت الهوية (من أنت؟)، Policies تحدد الصلاحيات (ماذا يُسمح لك؟).
- **تشبيه:** Authentication = دخول العمارة. Policy = قفل الشقة الخاصة بك.

## أين يظهر في FlowPilot
- المستخدم يرى فقط مشاريعه (أو المشاريع التي هو عضو فيها).
- المالك فقط يمكنه تعديل أو حذف المشروع.
- أعضاء الفريق يمكنهم رؤية المشروع والتعاون دون تعديل.

## الأوامر المهمة
```bash
php artisan make:policy ProjectPolicy --model=Project
```

## الملفات المهمة
- `app/Policies/ProjectPolicy.php` - ملف الـ Policy مع دوال: view, create, update, delete
- `app/Providers/AuthServiceProvider.php` - تسجيل الـ Policy في مصفوفة `$policies`
- `app/Http/Controllers/ProjectController.php` - استخدام `$this->authorize()`
- `resources/js/Pages/Projects/Show.jsx` - التحقق في React

## دوال Policy الأساسية
- `view(User $user, Project $project)` - هل يمكن للمستخدم رؤية هذا المشروع؟
- `create(User $user)` - هل يمكن للمستخدم إنشاء مشروع جديد؟
- `update(User $user, Project $project)` - هل يمكن تعديل المشروع؟
- `delete(User $user, Project $project)` - هل يمكن حذف المشروع؟

## قاعدة أمان مهمة
- التحقق في Laravel (Backend) هو الأساس. React (Frontend) هو تحسين تجربة مستخدم فقط.
- لا تعتمد أبداً على التحقق الأمامي وحده.

## الأخطاء الشائعة
1. عدم تسجيل Policy في AuthServiceProvider → خطأ 403 حتى للمالك.
2. نسيان `$this->authorize()` في Controller → المستخدم يمكنه فعل أي شيء.
3. إنشاء Policy بدون `--model` → لا توجد دوال افتراضية.
4. استخدام `create` مع كائن موجود → خطأ لأنها لا تأخذ Project كمعامل.
