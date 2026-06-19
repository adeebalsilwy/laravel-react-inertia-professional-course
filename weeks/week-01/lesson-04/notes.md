# ملاحظات الدرس 4: Git وتنظيم المستودع وحفظ التقدم

## المفهوم الأساسي
- **Git:** نظام التحكم في الإصدارات (Version Control System). يسجل تاريخ المشروع بالكامل.
- **Repository (مستودع):** مجلد .git/ المخفي الذي يحتوي على كل تاريخ المشروع.
- **Commit:** لقطة (Snapshot) للمشروع في لحظة زمنية محددة. كل Commit له Hash, Message, Author, Timestamp.
- **Staging Area:** منطقة وسطى بين الملفات و Commit. تختار أي الملفات تريد حفظها.
- **Branch (فرع):** نسخة موازية من المشروع. تسمح بتجربة أفكار جديدة دون التأثير على main.
- **.gitignore:** ملف يحدد الملفات والمجلدات التي يتجاهلها Git (مثل vendor/, node_modules/, .env).

## أوامر Git الأساسية
| الأمر | الوظيفة |
|-------|---------|
| `git init` | إنشاء مستودع Git جديد |
| `git add .` | إضافة جميع الملفات إلى Staging Area |
| `git add filename.js` | إضافة ملف محدد إلى Staging |
| `git commit -m "رسالة"` | حفظ Commit جديد |
| `git status` | عرض حالة الملفات الحالية |
| `git log` | عرض تاريخ الـ Commits |
| `git branch` | عرض قائمة الفروع |
| `git branch name` | إنشاء فرع جديد |
| `git checkout name` | التبديل إلى فرع آخر |
| `git checkout -b name` | إنشاء فرع جديد والتبديل إليه |
| `git config --global user.name "..."` | ضبط اسم المستخدم |
| `git config --global user.email "..."` | ضبط البريد الإلكتروني |

## في FlowPilot
- أول Commit: "تأسيس مشروع FlowPilot مع Laravel 12 و React و Inertia"
- مستقبلاً: Commit لكل درس/ميزة جديدة
- Git يحمي تقدمنا ويسمح بالتجربة دون خوف

## أخطاء شائعة
- نسيان git init ← "fatal: not a git repository"
- نسيان تعيين user.name/user.email ← "Please tell me who you are"
- عدم وجود .gitignore ← حجم مستودع ضخم
- رسائل Commit غير واضحة ← اجعلها دقيقة ومفيدة
- CRLF vs LF على Windows ← استخدم `git config --global core.autocrlf true`