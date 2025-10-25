# راهنمای پیش‌نمایش تغییرات تم 🎨

## روش 1: استفاده از فایل پیش‌نمایش HTML (سریع‌ترین) ⚡

این روش نیازی به اینترنت یا سرور ندارد!

### مراحل:

1. **باز کردن فایل پیش‌نمایش:**

```bash
pnpm preview
```

یا به صورت دستی فایل `preview.html` را در مرورگر باز کنید.

2. **مشاهده تغییرات:**
   - فایل `preview.html` یک نمونه از لیست تاپیک‌های دیسکورس را نشان می‌دهد
   - دکمه "تغییر تم" را بزنید تا بین حالت روشن و تاریک جابجا شوید
   - می‌توانید با F12 و Developer Tools تغییرات CSS را به صورت زنده تست کنید

3. **اعمال تغییرات:**
   - بعد از تست، تغییرات را در فایل‌های SCSS اصلی اعمال کنید
   - فایل‌های اصلی:
     - `common/common.scss` - برای دسکتاپ و موبایل
     - `mobile/mobile.scss` - فقط موبایل
     - `desktop/desktop.scss` - فقط دسکتاپ

---

## روش 2: تست با Browser Developer Tools 🔧

اگر می‌خواهید روی یک سایت discourse واقعی تست کنید:

1. بروید به یک سایت discourse (مثلاً meta.discourse.org)
2. F12 را بزنید
3. تب **Elements** یا **Inspector** را باز کنید
4. CSS های خود را در قسمت Styles اضافه یا تغییر دهید
5. تغییرات را به صورت زنده ببینید
6. بعد از راضی شدن، کدها را کپی کرده و در فایل‌های SCSS خود قرار دهید

---

## روش 3: نصب Discourse محلی 🐳

برای محیط کامل توسعه:

### با Docker:

```bash
# کلون discourse
git clone https://github.com/discourse/discourse.git
cd discourse

# نصب وابستگی‌ها
bundle install

# راه‌اندازی
bin/docker/boot_dev --init

# اجرا
bin/docker/rails s
```

سپس:

1. بروید به http://localhost:3000
2. ادمین شوید
3. در Admin -> Appearance -> Themes تم خود را اضافه کنید

---

## نکات مهم 💡

### تغییرات در Preview.html:

برای تغییر استایل‌ها در فایل preview.html:

1. **تغییر رنگ‌ها:**

```css
:root {
  --primary: #1c1c1c; /* رنگ متن اصلی */
  --secondary: #f9fcff; /* رنگ پس‌زمینه */
  --tertiary: #3877e5; /* رنگ لینک‌ها */
}
```

2. **تغییر border-radius (گردی گوشه‌ها):**

```css
.topic-list-item {
  border-radius: 1em; /* مقدار را تغییر دهید */
}
```

3. **تغییر سایه:**

```css
.topic-list-item {
  box-shadow: 0 0 8px rgb(0, 0, 0, 0.05);
}
```

### اعمال تغییرات در تم واقعی:

بعد از تست در preview:

1. تغییرات را در فایل‌های SCSS اصلی اعمال کنید
2. بررسی خطاها:

```bash
pnpm lint:css
```

3. وقتی سایت بالا آمد، تم را rebuild کنید:
   - Admin Panel → Appearance → Themes
   - روی تم خود کلیک کنید
   - دکمه "Rebuild" را بزنید

---

## دستورات مفید 📝

```bash
# باز کردن پیش‌نمایش
pnpm preview

# بررسی خطاهای CSS
pnpm lint:css

# بررسی خطاهای JavaScript
pnpm lint:js

# بررسی تمام خطاها
pnpm lint

# فرمت کردن کدها
pnpm format
```

---

## مثال: تغییر رنگ کارت‌های تاپیک

### در preview.html:

```css
.topic-list-item {
  border: 2px solid #3877e5; /* بردر آبی */
  background: #ffffff;
}

.topic-list-item:hover {
  box-shadow: 0 0 20px rgba(56, 119, 229, 0.3);
}
```

### سپس در common/common.scss:

```scss
.topic-list-item {
  border: 2px solid var(--tertiary);
  background: var(--secondary);

  &:hover {
    box-shadow: 0 0 20px rgb(var(--tertiary-rgb), 0.3);
  }
}
```

---

## سوالات متداول ❓

**س: چرا تغییراتم در preview نشان داده نمی‌شود؟**

ج: Cache مرورگر را پاک کنید (Ctrl+Shift+R)

**س: چطور می‌توانم تغییرات موبایل را ببینم؟**

ج: در مرورگر F12 بزنید و از Device Toolbar استفاده کنید (Ctrl+Shift+M)

**س: آیا باید هر بار فایل preview را آپدیت کنم؟**

ج: خیر، preview فقط برای تست سریع است. تغییرات نهایی را در فایل‌های SCSS اصلی اعمال کنید.

---

## پشتیبانی 🤝

اگر سوالی دارید یا به کمک نیاز دارید:

- مستندات رسمی: https://meta.discourse.org/c/theme/
- راهنمای توسعه تم: https://meta.discourse.org/t/how-to-develop-custom-themes/60848
