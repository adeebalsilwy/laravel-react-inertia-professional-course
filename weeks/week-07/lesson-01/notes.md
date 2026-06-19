# 📓 ملاحظات الدرس 25: الاختبارات الآلية (Testing)

## 🎯 المفاهيم الأساسية
- **Testing (الاختبارات):** كتابة كود برمجي يختبر كوداً آخر آلياً، بدون تدخل بشري.
- **Feature Test:** يختبر ميزة كاملة من وجهة نظر المستخدم (مثل فتح صفحة، إرسال نموذج).
- **Unit Test:** يختبر وحدة صغيرة جداً من الكود (مثل دالة رياضية أو كلاس مستقل).
- **Pest:** إطار الاختبار الافتراضي في Laravel 12 (يأتي مع Laravel مباشرة).

## 🛠️ الأوامر الهامة
| الأمر | الشرح |
|-------|--------|
| `php artisan make:test ProjectTest` | ينشئ ملف اختبار Feature |
| `php artisan make:test ProjectTest --unit` | ينشئ ملف اختبار Unit |
| `php artisan test` | يشغل جميع الاختبارات في المشروع |
| `php artisan test --filter ProjectTest` | يشغل اختبارات معينة فقط |

## 📝 دوال التحقق (Assertions) الأكثر استخداماً
| الدالة | المعنى |
|--------|--------|
| `assertStatus(200)` | الصفحة فتحت بنجاح |
| `assertStatus(302)` | تم التوجيه (Redirect) |
| `assertStatus(403)` | ممنوع (Forbidden) |
| `assertStatus(404)` | الصفحة غير موجودة |
| `assertDatabaseHas('table', [...])` | السجل موجود في قاعدة البيانات |
| `assertDatabaseMissing('table', [...])` | السجل غير موجود في قاعدة البيانات |
| `assertSessionHasErrors('field')` | يوجد خطأ في التحقق من الحقل |
| `assertSee('text')` | الصفحة تحتوي على النص المحدد |

## 🔗 التطبيق في FlowPilot
- `tests/Feature/ProjectTest.php` — اختبارات إدارة المشاريع.
- `tests/Feature/TaskTest.php` — اختبارات إدارة المهام.
- `tests/Feature/PolicyTest.php` — اختبارات صلاحيات الوصول.

## ⚠️ تذكير مهم
- دائماً استخدم `use RefreshDatabase;` في كلاس الاختبار لعزل كل اختبار عن الآخر.
- استخدم `$this->actingAs($user)` للموارد المحمية بمصادقة.
- اختبر السيناريوهات الإيجابية (ينجح) والسيناريوهات السلبية (يفشل).

## 📖 للقراءة الإضافية
- [Laravel Testing Documentation](https://laravel.com/docs/testing)
- [Pest PHP Framework](https://pestphp.com/)
