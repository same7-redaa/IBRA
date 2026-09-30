---
name: Server Strict Rules
description: Rules for interacting with the deployment server and protected directories.
---

# قواعد التعامل مع السيرفر (Server Strict Rules)

يجب على الذكاء الاصطناعي (AI) الالتزام المطلق بهذه القواعد عند التفاعل مع السيرفر أو كتابة سكربتات النشر (Deployment):

## 1. مناطق محظورة (Protected Areas - DO NOT TOUCH)
يُمنع منعاً باتاً التعديل، الحذف، أو المساس بأي شكل من الأشكال بالمجلدات التالية أو إعدادات (Nginx/الخدمات) المرتبطة بها:
*   موقع `samehreda.com` (متواجد في مسار `/var/www/domains/samehreda.com/`).
*   مشروع `aura-nest` (متواجد في مسار `/var/www/aura-nest/`).

## 2. المشاريع الجديدة
*   باقي السيرفر متاح بالكامل لنا.
*   عند إعداد أو نشر أي مشروع جديد، يجب إنشاء بيئة نظيفة ومجلد جديد تماماً (Clean Setup) مخصص لهذا المشروع فقط دون التداخل مع المشاريع المذكورة أعلاه.
