# 📝 ملاحظات الدرس 7: فهم مكونات React وتقسيم الواجهة إلى أجزاء

## 🎯 المفاهيم الأساسية
- **Component (المكون)**: دالة JavaScript تعيد JSX. تمثل قطعة مستقلة من واجهة المستخدم. اسم المكون يبدأ بحرف كبير.
- **Props (الخصائص)**: بيانات تُمرر من المكون الأب إلى المكون الابن. هي "قراءة فقط" (Read-only).
- **Component Composition (تركيب المكونات)**: بناء واجهات معقدة من مكونات أصغر وأبسط.
- **map()**: دالة JavaScript للتكرار على مصفوفة وعرض قائمة من المكونات.
- **key**: مفتاح فريد لكل عنصر في قائمة map() - يساعد React في التحديث بكفاءة.
- **Conditional Rendering (العرض الشرطي)**: استخدام && أو ? : لعرض محتوى بناءً على شرط.

## 📂 المكونات التي سننشئها في FlowPilot
| المكون | المسار | الوظيفة |
|--------|--------|---------|
| ProjectCard | `resources/js/Components/ProjectCard.jsx` | بطاقة مشروع (عنوان، حالة، وصف) |
| StatusBadge | `resources/js/Components/StatusBadge.jsx` | شارة حالة ملونة |
| TaskBadge | `resources/js/Components/TaskBadge.jsx` | عنصر مهمة مع Checkbox |
| StatCard | `resources/js/Components/StatCard.jsx` | بطاقة إحصائية (رقم + عنوان) |
| UserCard | `resources/js/Components/UserCard.jsx` | بطاقة عضو فريق |
| EmptyState | `resources/js/Components/EmptyState.jsx` | رسالة "لا توجد بيانات" |
| Badge | `resources/js/Components/Badge.jsx` | شارة عامة بأنماط مختلفة |

## 🧩 قواعد كتابة المكونات
1. اسم المكون بحرف كبير: `ProjectCard` ✅ وليس `projectCard` ❌
2. المكون الواحد = ملف واحد = مسؤولية واحدة
3. استخدم `export default function Name() { ... }`
4. Props تُفكّك في معامل الدالة: `function Card({ title, desc })`
5. كل عنصر في map() يحتاج `key` فريد
6. Props لا تتغير من داخل المكون الابن

## 💡 أنماط العرض الشرطي
```jsx
// إذا تحقق الشرط:
{isLoading && <p>جار التحميل...</p>}

// إذا/إلا:
{items.length > 0 ? (
  items.map(item => <Card key={item.id} item={item} />)
) : (
  <EmptyState />
)}
```

## 🔗 أين يظهر هذا في FlowPilot؟
كل الواجهات في FlowPilot ستُبنى من مكونات قابلة لإعادة الاستخدام: ProjectCard في صفحة المشاريع، StatCard في Dashboard، StatusBadge في كل مكان، TaskBadge في صفحة المهام.
