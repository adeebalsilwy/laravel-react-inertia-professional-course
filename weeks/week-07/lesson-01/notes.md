# ملخص الدرس: Testing للوحدات والميزات

## الفكرة الأساسية
الاختبار هو كود يتأكد أن ميزة معينة تعمل كما نتوقع. Feature Test يختبر مساراً كاملاً مثل إنشاء مشروع أو منع مستخدم من تعديل مشروع لا يملكه.

## لماذا هذا مهم؟
كلما كبر المشروع زادت احتمالية كسر ميزة أثناء تعديل ميزة أخرى. الاختبارات تعطينا ثقة قبل التسليم.

## داخل FlowPilot
FlowPilot سيصبح مشروعاً موثوقاً وليس مجرد واجهة تعمل بالصدفة.

## المثال
public function test_user_can_create_project(): void
{
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route("projects.store"), ["name" => "تطبيق تجريبي"])
        ->assertRedirect();

    $this->assertDatabaseHas("projects", ["name" => "تطبيق تجريبي"]);
}

## نتيجة الدرس
اختبارات أساسية تحمي ميزات FlowPilot.
