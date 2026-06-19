# واجب الدرس 16: صفحة الملف الشخصي وإعدادات الحساب

## الهدف
تخصيص صفحة الملف الشخصي التي يوفرها Laravel Breeze وجعلها مناسبة لتطبيق FlowPilot مع إضافة تحسينات عملية.

## المطلوب
1. **استعراض ملفات البروفايل** في <code>resources/js/Pages/Profile/</code>.
2. **تخصيص Edit.jsx**: غيّر النصوص إلى العربية وأضف ألوان FlowPilot.
3. **مراجعة وتعديل UpdateProfileInformationForm.jsx**: تأكد من أن النموذج يعمل بشكل صحيح.
4. **مراجعة UpdatePasswordForm.jsx**: تأكد من وجود current_password, password, password_confirmation.
5. **إضافة رسائل النجاح Flash**: أضف مكوناً يعرض <code>usePage().props.flash.message</code>.
6. **اختبار التحديث**: جرب تغيير الاسم والبريد وكلمة المرور.
7. **[تحدي] إضافة رفع الصورة الشخصية** مع دالة <code>updatePhoto</code> في ProfileController.

## الملفات المستهدفة
- <code>resources/js/Pages/Profile/Edit.jsx</code> - تخصيص
- <code>resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx</code> - مراجعة
- <code>resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx</code> - مراجعة
- <code>app/Http/Controllers/ProfileController.php</code> - مراجعة وتعديل
- <code>resources/js/Pages/Profile/Partials/ProfilePhotoForm.jsx</code> - إنشاء (تحدي)

## معيار القبول
- ✅ عرض بيانات المستخدم في صفحة البروفايل.
- ✅ تحديث الاسم والبريد يعمل مع رسالة نجاح.
- ✅ تغيير كلمة المرور يتطلب القديمة أولاً.
- ✅ رسائل الخطأ تظهر عند إدخال بيانات غير صالحة.
- ✅ [تحدي] رفع وعرض الصورة الشخصية.

## تحدي إضافي
- أضف زر "حذف الحساب" مع Modal تأكيد يتطلب إدخال كلمة المرور.
