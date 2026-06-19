# واجب الدرس 4: Git وتنظيم المستودع وطريقة حفظ التقدم

## الهدف
تطبيق Git لحفظ مشروع FlowPilot في أول Commit رسمي، وتهيئة المستودع للحفاظ على تقدم المشروع.

## المطلوب بالتفصيل

### الجزء 1: ضبط Git وتفعيل المستودع (إجباري)
1. افتح Terminal داخل مجلد `flowpilot`.
2. ضبط هوية Git:
   - `git config --global user.name "اسمك الكامل"`
   - `git config --global user.email "بريدك@example.com"`
3. تفعيل المستودع: `git init`
4. تأكد من ظهور: "Initialized empty Git repository in .../flowpilot/.git/"

### الجزء 2: التحقق من .gitignore (إجباري)
1. تحقق من وجود ملف `.gitignore` في جذر المشروع.
2. تأكد من احتوائه على `/vendor` و `/node_modules` و `.env`.
3. إذا كان موجوداً، ممتاز. إذا لا، أنشئه بهذه المحتويات.

### الجزء 3: أول Commit (إجباري)
1. أضف جميع الملفات: `git add .`
2. احفظ الـ Commit: `git commit -m "تأسيس مشروع FlowPilot مع Laravel 12 و React و Inertia"`
3. تحقق من الحالة: `git status` (يجب: "nothing to commit, working tree clean")
4. عرض التاريخ: `git log` (يجب أن يظهر Commit واحد)

### الجزء 4: تحدي إضافي (اختياري)
- إنشاء فرع: `git branch feature-welcome`
- التبديل له: `git checkout feature-welcome`
- عرض الفروع: `git branch` (الفرع النشط عليه *)
- العودة لـ main: `git checkout main`

### الجزء 5: أسئلة فهم (إجباري)
1. الفرق بين git add و git commit؟
2. لماذا نستخدم .gitignore؟ ولماذا نتجاهل vendor/؟
3. مثال على رسالة Commit جيدة وأخرى سيئة.
4. اشرح لماذا يعتبر Git "آلة الزمن".

## معيار القبول
- git log يعرض Commit واحد على الأقل.
- git status يظهر "nothing to commit".
- .gitignore موجود ويحتوي على vendor و node_modules.
- إجابات نظرية صحيحة.

## طريقة التسليم
- صورتان: git log + git status.
- نص: إجابات الأسئلة.
- (اختياري) صورة git branch مع فرعين.

## مخاطر شائعة
- لا تنس git init قبل أي شيء.
- تأكد من الرسالة: اكتب وصفاً واضحاً.
- لا تنس .gitignore (خاصة vendor/ و node_modules/).
- إذا أخطأت في رسالة commit: استخدم `git commit --amend -m "رسالة جديدة"` (فقط إذا لم تدفع بعد).