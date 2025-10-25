# راهنمای راه‌اندازی محیط توسعه

## روش 1: نصب Discourse محلی با Docker (پیشنهاد می‌شود)

### پیش‌نیازها:

- Docker Desktop
- Git

### مراحل نصب:

1. **نصب Docker Desktop:**

```bash
# دانلود و نصب از: https://www.docker.com/products/docker-desktop
```

2. **کلون و نصب Discourse:**

```bash
# ریپوی discourse را کلون کنید
git clone https://github.com/discourse/discourse.git
cd discourse

# اجرای با docker
docker-compose up -d
```

3. **وصل کردن تم:**

```bash
# در پنل ادمین:
# Settings -> Appearance -> Themes -> Install -> From a git repository
# آدرس: file:///path/to/your/theme
```

---

## روش 2: استفاده از Discourse Theme CLI

### نصب:

```bash
gem install discourse_theme
```

### استفاده:

```bash
# در دایرکتوری تم
discourse_theme watch .
```

این دستور تغییرات را به صورت خودکار به سایت discourse شما sync می‌کند.

---

## روش 3: پیش‌نمایش با HTML/CSS ساده

برای تست سریع CSS بدون نیاز به discourse:

### ایجاد فایل پیش‌نمایش:

```html
<!-- preview.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Theme Preview</title>
    <link rel="stylesheet" href="common/common.scss" />
  </head>
  <body>
    <!-- محتوای تستی -->
  </body>
</html>
```

---

## روش 4: استفاده از Browser DevTools

1. بروید به یک سایت discourse دیگر (مثل meta.discourse.org)
2. F12 برای باز کردن DevTools
3. تب Sources -> Overrides
4. CSS های خود را override کنید و تغییرات را ببینید

---

## روش 5: استفاده از Theme Creator آنلاین

1. بروید به: https://meta.discourse.org
2. از Theme Creator استفاده کنید
3. کدهای خود را paste کنید
4. پیش‌نمایش ببینید
