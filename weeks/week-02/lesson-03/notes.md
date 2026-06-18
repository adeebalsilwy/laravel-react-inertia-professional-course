# ملخص الدرس: Components في React داخل Inertia

## الفكرة الأساسية
Component هو جزء صغير من الواجهة يمكن إعادة استخدامه، مثل زر، بطاقة إحصائية، حقل إدخال، أو عنصر مهمة. React يعتمد على تقسيم الصفحة إلى مكونات صغيرة واضحة المسؤولية.

## لماذا هذا مهم؟
بدون Components ستصبح صفحة React طويلة ومربكة. تقسيم الواجهة يجعل الكود أسهل قراءة ويمنح الطالب طريقة تفكير احترافية.

## داخل FlowPilot
FlowPilot سيحتاج بطاقات مشاريع ومهام ومؤشرات. بناء هذه العناصر كمكونات يوفر الوقت ويحافظ على شكل موحد.

## المثال
function StatCard({ title, value }) {
  return (
    <div className="rounded-2xl border bg-white p-5">
      <p className="text-slate-500">{title}</p>
      <strong className="text-2xl">{value}</strong>
    </div>
  );
}

## نتيجة الدرس
مجموعة مكونات React صغيرة قابلة لإعادة الاستخدام.
