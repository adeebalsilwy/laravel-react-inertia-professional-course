# ملاحظات الدرس 3: تصميم الواجهة الأولى باستخدام Tailwind CSS

## المفهوم الأساسي
- **Tailwind CSS:** إطار عمل CSS بنمط Utility-First. كل "كلاس" يمثل خاصية CSS واحدة.
- **Utility-First:** بدلاً من كتابة CSS في ملف منفصل، تكتب كلاسات جاهزة داخل className في JSX.
- **Responsive:** استخدام prefixes (md:, lg:, xl:) لجعل التصميم يتكيف مع حجم الشاشة.
- **Hover/Transition:** إضافة تفاعل للمستخدم عند المرور بالماوس.

## كلاسات أساسية
| الكلاس | المعنى | القيمة |
|--------|--------|--------|
| `p-4` | Padding 16px | 1rem |
| `m-2` | Margin 8px | 0.5rem |
| `text-xl` | حجم نص 20px | 1.25rem |
| `font-black` | وزن الخط 900 | الأثقل |
| `bg-white` | خلفية بيضاء | #ffffff |
| `rounded-lg` | زوايا دائرية 8px | 0.5rem |
| `shadow-md` | ظل متوسط | 0 4px 6px -1px... |
| `flex` | تفعيل Flexbox | display: flex |
| `grid grid-cols-3` | شبكة بـ 3 أعمدة | grid-template-columns |

## ملفات الإعداد
- `tailwind.config.js` - تخصيص الألوان والخطوط والإعدادات
- `resources/css/app.css` - يستورد Tailwind (base, components, utilities)
- بعد تعديل الإعدادات، أعد تشغيل `npm run dev`

## في FlowPilot
- سنستخدم Tailwind لتصميم: Dashboard، بطاقات المشاريع، نماذج الإدخال، شريط التنقل، الجداول
- الألوان المخصصة (flowpilot, flowpilot-accent) ستميز هوية المشروع

## أخطاء شائعة
- نسيان تشغيل Vite بعد تثبيت Tailwind
- خطأ إملائي في اسم الكلاس (حساس للحالة)
- عدم إعادة تشغيل npm run dev بعد تعديل tailwind.config.js
- استخدام `class` بدلاً من `className` في JSX