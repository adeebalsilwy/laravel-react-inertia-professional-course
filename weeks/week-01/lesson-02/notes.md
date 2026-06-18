# ملخص الدرس: تثبيت Laravel 12 وربطه بـ React وInertia

## الفكرة الأساسية
Laravel يوفر هيكل التطبيق الخلفي، وReact توفر واجهة تفاعلية، أما Inertia فيجعل الصفحة تبدو مثل تطبيق React حديث مع بقاء المسارات والمنطق داخل Laravel. هذا يعني أن الطالب يستطيع بناء تطبيق كامل بدون أن يتشتت بين API منفصل وواجهة منفصلة في البداية.

## لماذا هذا مهم؟
نستخدم Inertia لأن الدورة موجهة لبناء تطبيق احترافي بسرعة وبطريقة مفهومة. الطالب سيرى أن Controller في Laravel يستطيع إرسال صفحة React مع بياناتها، وهذا يختصر كثيراً من التعقيد على المبتدئ.

## داخل FlowPilot
هذه الخطوة هي نقطة ولادة FlowPilot. بعدها يصبح لدينا تطبيق واحد يجمع بين قوة Laravel ومرونة React.

## المثال
composer create-project laravel/laravel flowpilot
cd flowpilot
composer require inertiajs/inertia-laravel
npm install @inertiajs/react react react-dom
php artisan inertia:middleware

## نتيجة الدرس
صفحة React أولى يتم عرضها من خلال Laravel باستخدام Inertia.
