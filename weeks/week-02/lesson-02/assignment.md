# 📄 واجب الدرس 6: بناء Layout رئيسي وشريط تنقل ثابت

## 🎯 الهدف
بناء Layout رئيسي لتطبيق FlowPilot يحتوي على Navbar و Sidebar و Footer، وربطه بصفحة Dashboard.

## 📋 المطلوب بالتفصيل

### المهمة 1: إنشاء AppLayout.jsx (4 نقاط)
- أنشئ مجلد `resources/js/Layouts/`
- أنشئ ملف `AppLayout.jsx` بمكون يستقبل `{children}`
- أضف <code>useState</code> للتحكم في إظهار/إخفاء القائمة الجانبية
- استخدم `flex` و `min-h-screen` من Tailwind للتخطيط العام

### المهمة 2: إضافة Navbar (2 نقطة)
- أضف Header علوي ثابت (sticky)
- ضع شعار "FlowPilot" وزر القائمة (للموبايل) واسم مستخدم وهمي

### المهمة 3: إضافة Sidebar مع روابط (2 نقطة)
- أضف 4 روابط على الأقل: Dashboard، المشاريع، المهام، الفريق
- استخدم <code>&lt;Link&gt;</code> من Inertia
- أضف تمييز الرابط النشط باستخدام <code>route().current()</code>

### المهمة 4: ربط Layout بصفحة Dashboard (1 نقطة)
- استخدم خاصية <code>layout</code> في Dashboard.jsx

### المهمة 5: تصميم متجاوب (1 نقطة)
- القائمة الجانبية مخفية في الموبايل (<code>hidden md:block</code>)
- زر القائمة يظهر فقط في الموبايل (<code>md:hidden</code>)

## ✅ معايير القبول (10 نقاط)
- الـ Layout يعمل مع Dashboard (3 نقاط)
- الرابط النشط يظهر بلون مختلف (2 نقطة)
- التصميم متجاوب (2 نقطة)
- استخدام Link من Inertia (1 نقطة)
- لا أخطاء في Console (1 نقطة)
- كود نظيف ومنظم (1 نقطة)

## ⭐ التحديات الإضافية
1. قسّم الـ Layout إلى مكونات منفصلة (Navbar, Sidebar, Footer)
2. أضف Footer بعبارة حقوق الملكية
3. استخدم <code>usePage()</code> لعرض اسم المستخدم الحقيقي

## 📬 طريقة التسليم
1. لقطة شاشة لسطح المكتب (Desktop)
2. لقطة شاشة للموبايل (Mobile)
3. محتوى الملفات: AppLayout.jsx، Dashboard.jsx
