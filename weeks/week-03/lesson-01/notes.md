# ملاحظات الدرس 9: تصميم قاعدة بيانات FlowPilot قبل كتابة الجداول

## المفاهيم الأساسية
- **قاعدة البيانات (Database):** نظام يخزن المعلومات بشكل دائم ومنظم على الخادم. في هذا الكورس نستخدم MySQL/MariaDB.
- **الجدول (Table):** هيكل ينظم بيانات متشابهة. كل كيان (مستخدم، مشروع، مهمة) له جدول منفصل.
- **العمود (Column):** معلومة محددة داخل الجدول (مثل name, status, created_at).
- **السجل (Row):** عنصر واحد مكتمل داخل الجدول (مثل مشروع "تطبيق الموقع").
- **Primary Key (PK):** معرف فريد لكل سجل. عادةً رقم يتزايد تلقائياً (id).
- **Foreign Key (FK):** عمود يشير إلى PK في جدول آخر، لإنشاء علاقة بين الجدولين.

## أنواع العلاقات
1. **One-to-Many (1:M):** سجل واحد في الجدول A يرتبط بسجلات متعددة في الجدول B.
   - مثال: User → Projects (مستخدم يملك عدة مشاريع)
   - التطبيق: إضافة FK (user_id) في جدول Projects

2. **Many-to-Many (M:N):** سجلات في الجدول A ترتبط بسجلات متعددة في الجدول B والعكس.
   - مثال: Projects ↔ Users (أعضاء الفريق)
   - التطبيق: جدول Pivot (project_user) يحوي FK لكل من الجدولين

3. **One-to-One (1:1):** سجل واحد في A يرتبط بسجل واحد في B.
   - مثال: User → Profile (كل مستخدم له ملف شخصي واحد)

## هيكل FlowPilot (التصميم الأولي)

### جدول users
| العمود | النوع | ملاحظات |
|--------|------|---------|
| id | bigIncrements | PK |
| name | string(255) | Required |
| email | string(255) | Required, unique |
| password | string(255) | Required, hashed |
| timestamps | - | created_at, updated_at |

### جدول projects
| العمود | النوع | ملاحظات |
|--------|------|---------|
| id | bigIncrements | PK |
| user_id | foreignId | FK → users.id |
| name | string(255) | Required |
| description | text | Nullable |
| status | enum | pending, active, completed |
| deadline | date | Nullable |
| timestamps | - | created_at, updated_at |
| softDeletes | - | deleted_at |

### جدول tasks
| العمود | النوع | ملاحظات |
|--------|------|---------|
| id | bigIncrements | PK |
| project_id | foreignId | FK → projects.id |
| assigned_to | foreignId | FK → users.id, nullable |
| title | string(255) | Required |
| description | text | Nullable |
| status | enum | pending, in_progress, completed |
| priority | enum | low, medium, high, critical |
| due_date | date | Nullable |
| timestamps | - | created_at, updated_at |
| softDeletes | - | deleted_at |

### جدول teams
| العمود | النوع | ملاحظات |
|--------|------|---------|
| id | bigIncrements | PK |
| owner_id | foreignId | FK → users.id |
| name | string(255) | Required |
| description | text | Nullable |
| timestamps | - | created_at, updated_at |

### جدول project_user (Pivot)
| العمود | النوع | ملاحظات |
|--------|------|---------|
| id | bigIncrements | PK |
| project_id | foreignId | FK → projects.id |
| user_id | foreignId | FK → users.id |
| role | string(50) | Nullable (developer, designer, etc.) |
| joined_at | date | Nullable |
| timestamps | - | created_at, updated_at |

## أنواع البيانات (Data Types)
- **bigIncrements:** رقم كبير متزايد تلقائياً (لـ PK)
- **string(255):** نص قصير (اسم، عنوان، بريد إلكتروني)
- **text:** نص طويل (وصف، محتوى)
- **foreignId:** مفتاح أجنبي (يرتبط تلقائياً بـ id في الجدول الآخر)
- **boolean:** true/false (نعم/لا)
- **enum:** قيمة من قائمة محددة مسبقاً
- **date:** تاريخ فقط (YYYY-MM-DD)
- **dateTime:** تاريخ ووقت
- **timestamps():** يضيف created_at و updated_at
- **softDeletes():** يضيف deleted_at للحذف الناعم

## خطوات التصميم (7 خطوات)
1. تحديد الكيانات (Entities)
2. تحديد الأعمدة لكل كيان
3. اختيار أنواع البيانات المناسبة
4. تحديد العلاقات بين الكيانات
5. رسم مخطط ERD
6. إضافة الحقول المساعدة (timestamps, softDeletes)
7. كتابة توثيق التصميم

## الأخطاء الشائعة
1. تجاهل المفاتيح الأساسية
2. وضع كل شيء في جدول واحد (عدم التطبيع)
3. نسيان جدول Pivot في Many-to-Many
4. اختيار نوع بيانات خاطئ
5. البدء بالكود بدون تخطيط

## روابط مهمة
- الدرس التالي: [Migrations و Seeders](../lesson-02/index.html)
- أداة رسم ERD مجانية: draw.io, Lucidchart
- توثيق Laravel: https://laravel.com/docs/12.x/migrations
