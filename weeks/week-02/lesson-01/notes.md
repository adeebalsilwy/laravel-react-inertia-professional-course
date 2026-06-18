# ملخص الدرس: Routing في Laravel وInertia Responses

## الفكرة الأساسية
Route هو العنوان الذي يزوره المستخدم في المتصفح. في Laravel يمكن أن يعيد route صفحة عادية أو Controller أو استجابة Inertia. عندما نستخدم Inertia::render فإن Laravel يطلب من React عرض صفحة معينة ويرسل لها البيانات المطلوبة.

## لماذا هذا مهم؟
المبتدئ يحتاج أن يفهم أن كل شاشة في FlowPilot تبدأ غالباً من route. إذا لم نفهم routing فلن نعرف كيف يصل المستخدم إلى Dashboard أو صفحة المشاريع أو المهام.

## داخل FlowPilot
صفحات FlowPilot مثل dashboard وprojects وtasks ستبدأ كلها من نظام routing منظم.

## المثال
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'welcome' => 'مرحباً بك في FlowPilot'
    ]);
})->name('dashboard');

## نتيجة الدرس
مسارات أولية تعرض صفحات React من Laravel عبر Inertia.
