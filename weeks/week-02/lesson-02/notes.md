# 📝 ملاحظات الدرس 6: بناء Layout رئيسي وشريط تنقل ثابت

## 🎯 المفاهيم الأساسية
- **Layout (القالب)**: مكون React يلتف حول صفحات التطبيق، يحتوي على العناصر المشتركة (Navbar, Sidebar, Footer) ويستقبل `{children}` كمحتوى متغير.
- **DRY (Don't Repeat Yourself)**: مبدأ برمجي: لا تكرر نفس الكود. Layout هو تطبيق عملي لهذا المبدأ.
- **children**: Prop خاص في React يمثل المحتوى الداخلي الموضوع بين وسمي المكون.

## 📂 الملفات التي سننشئها
| الملف | المسار | الوظيفة |
|-------|--------|---------|
| AppLayout | `resources/js/Layouts/AppLayout.jsx` | القالب الرئيسي (Navbar + Sidebar + Footer) |
| Navbar | `resources/js/Components/Navbar.jsx` | شريط التنقل العلوي |
| Sidebar | `resources/js/Components/Sidebar.jsx` | القائمة الجانبية للروابط |
| Footer | `resources/js/Components/Footer.jsx` | التذييل الثابت |

## 🧩 مكونات الـ Layout
1. **Navbar** - شريط علوي ثابت (sticky) يحتوي على:
   - شعار التطبيق
   - زر القائمة للموبايل (Hamburger ☰)
   - معلومات المستخدم
2. **Sidebar** - قائمة جانبية تحتوي على:
   - روابط التصفح الرئيسية مع أيقونات
   - تمييز الرابط النشط (Active Link)
3. **Main** - منطقة المحتوى الرئيسي (`{children}`)
4. **Footer** - تذييل الصفحة (حقوق الملكية)

## 🎨 كلاسات Tailwind المهمة
| الكلاس | الوظيفة |
|--------|---------|
| `hidden md:block` | إخفاء العنصر في الموبايل، إظهاره في الشاشات المتوسطة+ |
| `md:hidden` | إظهار العنصر فقط في الموبايل |
| `sticky top-0` | تثبيت العنصر في أعلى الصفحة عند التمرير |
| `flex-1` | جعل العنصر يأخذ المساحة المتبقية |
| `min-h-screen` | جعل الارتفاع يساوي ارتفاع الشاشة على الأقل |

## 🔗 ربط Layout بالصفحة
```javascript
// في نهاية ملف الصفحة (مثلاً Dashboard.jsx)
import AppLayout from '../Layouts/AppLayout';
export default function Dashboard() { ... }
Dashboard.layout = page => <AppLayout children={page} />;
```

## 💡 نصائح سريعة
- استخدم `route().current('pattern*')` لتمييز الرابط النشط
- `*` تعني "أي شيء بعد" - مثلاً `projects*` تطابق `/projects` و `/projects/create`
- افصل Navbar و Sidebar في ملفات منفصلة لتسهيل الصيانة
- اختبر التصميم على شاشة الموبايل باستخدام أدوات المطور (F12 → Toggle Device Toolbar)

## 🔗 أين يظهر هذا في FlowPilot؟
جميع صفحات FlowPilot الداخلية (Dashboard، المشاريع، المهام، الفريق، الإعدادات) ستستخدم AppLayout.jsx كقالب رئيسي.
