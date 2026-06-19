# ملاحظات الدرس 16: صفحة الملف الشخصي وإعدادات الحساب

## المفهوم الأساسي
- **صفحة الملف الشخصي (Profile Page):** المكان الذي يستطيع المستخدم من خلاله رؤية وتحديث بياناته الشخصية.
- **Breeze يوفرها جاهزة:** ملفات React موجودة في <code>resources/js/Pages/Profile/</code>.
- **وظائف الصفحة:** عرض البيانات، تعديل الاسم والبريد، تغيير كلمة المرور، حذف الحساب.

## أين يظهر في FlowPilot
- صفحة الإعدادات مقسمة لأقسام: معلومات شخصية، أمان، صورة شخصية.
- المستخدم يمكنه تحديث اسمه وبريده وكلمة المرور.
- رسائل نجاح تظهر بعد كل عملية.

## الملفات المهمة
- <code>resources/js/Pages/Profile/Edit.jsx</code> - الصفحة الرئيسية
- <code>resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx</code> - نموذج تعديل الاسم والبريد
- <code>resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx</code> - نموذج تغيير كلمة المرور
- <code>app/Http/Controllers/ProfileController.php</code> - Controller مع دوال edit, update, destroy
- <code>app/Http/Middleware/HandleInertiaRequests.php</code> - مشاركة بيانات المستخدم و flash messages

## أهم دوال Inertia React
- <code>useForm({name: '', email: ''})</code> - إدارة النموذج
- <code>put('/profile')</code> - إرسال طلب تحديث
- <code>errors.name</code> - أخطاء التحقق من Laravel
- <code>processing</code> - حالة الإرسال (true/false)
- <code>usePage().props.auth.user</code> - بيانات المستخدم
- <code>usePage().props.flash.message</code> - رسالة النجاح المؤقتة

## قواعد التحقق الشائعة
- <code>required</code> - الحقل مطلوب
- <code>string</code> - يجب أن يكون نصاً
- <code>email</code> - بصيغة بريد صحيحة
- <code>max:255</code> - حد أقصى 255 حرف
- <code>min:8</code> - حد أدنى 8 أحرف
- <code>confirmed</code> - يتطلب وجود <code>_confirmation</code>
- <code>current_password</code> - يطابق كلمة المرور الحالية
- <code>Rule::unique(User::class)->ignore($id)</code> - قيمة فريدة مع تجاهل السجل الحالي

## الأخطاء الشائعة
1. عدم تطابق أسماء الحقول في React مع Laravel.
2. نسيان <code>e.preventDefault()</code> في النموذج.
3. نسيان إنشاء الرابط الرمزي للتخزين (<code>php artisan storage:link</code>).
4. Flash messages لا تظهر لأن HandleInertiaRequests لا يشاركها.
