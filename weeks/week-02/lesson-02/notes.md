# ملخص الدرس: Layouts وNavigation ثابت

## الفكرة الأساسية
Layout هو قالب عام يحيط بالصفحات. بدلاً من تكرار الهيدر والقائمة الجانبية في كل صفحة، نضعها مرة واحدة داخل Layout ونضع محتوى الصفحة في مكان مخصص.

## لماذا هذا مهم؟
التكرار يجعل المشروع صعب التعديل. إذا تغير اسم رابط أو شكل القائمة سنضطر لتعديله في كل صفحة. Layout يحل هذه المشكلة ويجعل التطبيق احترافياً.

## داخل FlowPilot
Dashboard وWorkspace وصفحات المشاريع ستستخدم نفس Layout حتى يشعر المستخدم أن التطبيق واحد ومتماسك.

## المثال
export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="border-b bg-white p-4">FlowPilot</nav>
      <main className="p-6">{children}</main>
    </div>
  );
}

## نتيجة الدرس
Layout رئيسي جاهز لتغليف صفحات FlowPilot.
