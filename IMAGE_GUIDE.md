# دليل الصور — IMAGE_GUIDE

هذا الدليل يشرح كل موقع صورة في الموقع، والقسم الذي تظهر فيه، والأبعاد الموصى بها، والمسار الذي يجب استخدامه.

استبدل الصور المؤقتة بصور الورشة الحقيقية لاحقاً دون تغيير تصميم الموقع.

---

## 1. الصورة الرئيسية (Hero)

| الموقع | القسم | الأبعاد الموصى بها | المسار |
|--------|------|---------------------|--------|
| خلفية الصفحة الرئيسية | الرئيسية (Hero) | 1600×900px (16:9) | `public/images/workshop/hero/hero.jpg` |

**الإعداد:** `heroImage` في `src/data/workshopImages.ts`

---

## 2. صور قسم "من نحن" (About)

| الموقع | القسم | الأبعاد الموصى بها | المسار |
|--------|------|---------------------|--------|
| الصورة الكبيرة | من نحن | 1200×900px (4:3) | `public/images/workshop/about/iron.jpg` |
| الصورة الصغيرة (مربع) | من نحن | 400×400px (1:1) | `public/images/workshop/about/wood.jpg` |

**الإعداد:** `aboutImage1`, `aboutImage2` في `src/data/workshopImages.ts`

---

## 3. صور بطاقات الخدمات (Service Cards)

| الموقع | القسم | الأبعاد الموصى بها | المسار |
|--------|------|---------------------|--------|
| بطاقة أعمال الحديد | خدماتنا الرئيسية | 1200×750px (16:10) | `public/images/workshop/services/metal.jpg` |
| بطاقة أعمال الموبيليا | خدماتنا الرئيسية | 1200×750px (16:10) | `public/images/workshop/services/wood.jpg` |

**الإعداد:** `serviceMetalImage`, `serviceWoodImage` في `src/data/workshopImages.ts`

---

## 4. صور أعمال الحديد (Metalwork)

كل فئة لها 6 مواقع صور. الأبعاد الموصى بها: 940×530px (16:9).

| الفئة | المسار المقترح | الإعداد |
|------|----------------|---------|
| الأبواب | `public/images/workshop/iron/doors/1.jpg` ... `6.jpg` | `metalworkImages["metal-doors"]` |
| الشبابيك | `public/images/workshop/iron/windows/1.jpg` ... `6.jpg` | `metalworkImages["metal-windows"]` |
| الدرابزينات | `public/images/workshop/iron/railings/1.jpg` ... `6.jpg` | `metalworkImages["metal-railings"]` |

---

## 5. صور تشكيل ونقش الحديد (Forging)

كل فئة لها 6 مواقع صور. الأبعاد الموصى بها: 940×530px (16:9).

| الفئة | المسار المقترح | الإعداد |
|------|----------------|---------|
| المربع الصم | `public/images/workshop/iron/square-solid/1.jpg` ... `6.jpg` | `forgingImages["square-solid"]` |
| المبسط | `public/images/workshop/iron/flat-bar/1.jpg` ... `6.jpg` | `forgingImages["flat-bar"]` |
| المبروم | `public/images/workshop/iron/twisted/1.jpg` ... `6.jpg` | `forgingImages["twisted"]` |
| لف وتقويس الأنابيب | `public/images/workshop/iron/pipe-bending/1.jpg` ... `6.jpg` | `forgingImages["pipe-bending"]` |
| النقش والزخرفة | `public/images/workshop/iron/engraving/1.jpg` ... `6.jpg` | `forgingImages["engraving"]` |

---

## 6. صور أعمال الموبيليا والأخشاب (Furniture)

كل فئة لها 6 مواقع صور. الأبعاد الموصى بها: 940×530px (16:9).

| الفئة | المسار المقترح | الإعداد |
|------|----------------|---------|
| الأبواب | `public/images/workshop/wood/doors/1.jpg` ... `6.jpg` | `furnitureImages["furn-doors"]` |
| الشبابيك | `public/images/workshop/wood/windows/1.jpg` ... `6.jpg` | `furnitureImages["furn-windows"]` |
| المطابخ | `public/images/workshop/wood/kitchens/1.jpg` ... `6.jpg` | `furnitureImages["furn-kitchens"]` |
| غرف النوم | `public/images/workshop/wood/bedrooms/1.jpg` ... `6.jpg` | `furnitureImages["furn-bedrooms"]` |
| المكتبات | `public/images/workshop/wood/libraries/1.jpg` ... `6.jpg` | `furnitureImages["furn-libraries"]` |
| الأثاث المنزلي | `public/images/workshop/wood/home/1.jpg` ... `6.jpg` | `furnitureImages["furn-home"]` |
| الأثاث المكتبي | `public/images/workshop/wood/office/1.jpg` ... `6.jpg` | `furnitureImages["furn-office"]` |
| الأثاث المدرسي | `public/images/workshop/wood/school/1.jpg` ... `6.jpg` | `furnitureImages["furn-school"]` |
| أثاث الشركات | `public/images/workshop/wood/corporate/1.jpg` ... `6.jpg` | `furnitureImages["furn-corporate"]` |
| أثاث الفنادق | `public/images/workshop/wood/hotels/1.jpg` ... `6.jpg` | `furnitureImages["furn-hotels"]` |

---

## 7. صور "أعمال حديد أخرى" (Other Iron Works)

هذه الفئة تحتوي حالياً على **24 صورة مؤقتة** (4 فئات × 3 أنواع × 2 صور).

كل نوع له صورتان. الأبعاد الموصى بها: 940×530px (16:9).

| الفئة الكبرى | النوع | المسار المقترح |
|-------------|------|----------------|
| الأثاث الحديدي والعصري | المطابخ والخزائن الحديدية | `public/images/workshop/other-iron/metal-kitchens/1.jpg`, `2.jpg` |
| الأثاث الحديدي والعصري | الطاولات والمكاتب | `public/images/workshop/other-iron/tables-desks/1.jpg`, `2.jpg` |
| الأثاث الحديدي والعصري | الأسرّة والأرفف المعلقة | `public/images/workshop/other-iron/beds-shelves/1.jpg`, `2.jpg` |
| أعمال الديكور والتنسيق الخارجي | المظلات والبرجولات | `public/images/workshop/other-iron/pergolas/1.jpg`, `2.jpg` |
| أعمال الديكور والتنسيق الخارجي | المشبات والشوايات | `public/images/workshop/other-iron/barbecue/1.jpg`, `2.jpg` |
| أعمال الديكور والتنسيق الخارجي | أحواض النباتات والتعريشات | `public/images/workshop/other-iron/planters/1.jpg`, `2.jpg` |
| التشكيلات الفنية والديكورات الداخلية | القواطع والفاصلات | `public/images/workshop/other-iron/partitions/1.jpg`, `2.jpg` |
| التشكيلات الفنية والديكورات الداخلية | الثريات ووحدات الإضاءة | `public/images/workshop/other-iron/chandeliers/1.jpg`, `2.jpg` |
| التشكيلات الفنية والديكورات الداخلية | إطارات المرايا والمجسمات الفنية | `public/images/workshop/other-iron/mirror-frames/1.jpg`, `2.jpg` |
| التجهيزات الصناعية والحلول الخاصة | سلالم الطوارئ والسلالم الحلزونية | `public/images/workshop/other-iron/stairs/1.jpg`, `2.jpg` |
| التجهيزات الصناعية والحلول الخاصة | تجهيزات المحلات والمتاجر | `public/images/workshop/other-iron/display-racks/1.jpg`, `2.jpg` |
| التجهيزات الصناعية والحلول الخاصة | المقطورات والهياكل الميكانيكية | `public/images/workshop/other-iron/trailers/1.jpg`, `2.jpg` |

**الإعداد:** `otherIronCategories` في `src/data/workshopImages.ts`

---

## 8. معرض الأعمال (Gallery)

معرض الأعمال يجمع الصور من جميع الفئات أعلاه تلقائياً. لا حاجة لإعداد منفصل — عند استبدال صور الفئات بصور حقيقية، ستظهر تلقائياً في المعرض.

---

## كيفية استبدال الصور

1. ضع الصورة في المسار المناسب تحت `public/images/workshop/`
2. افتح `src/data/workshopImages.ts`
3. استبدل القيمة الفارغة `""` بالمسار الجديد، مثلاً:
   ```ts
   export const heroImage = "/images/workshop/hero/hero.jpg";
   ```
4. ستظهر الصورة تلقائياً في الموقع. المواقع الفارغة تظهر كـ placeholder نظيف.

---

## معلومات الورشة

جميع معلومات الورشة (الاسم، الهاتف، واتساب، العنوان، البريد، ساعات العمل، الخريطة، التواصل الاجتماعي) تُضبط في ملف واحد:

**`src/data/workshopInfo.ts`**

اترك الحقول فارغة حتى تتوفر المعلومات الحقيقية. الموقع يتعامل مع القيم الفارغة بأناقة دون روابط مكسورة.
