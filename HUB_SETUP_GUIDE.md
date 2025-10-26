# راهنمای راه‌اندازی صفحه Hub

## مقدمه

این راهنما نحوه راه‌اندازی مسیر `/hub` در تم Discourse را توضیح می‌دهد که یک اپلیکیشن React را در iframe نمایش می‌دهد.

## فایل‌های اضافه شده

### 1. JavaScript Files

#### `javascripts/discourse/initializers/hub-route.js`

این فایل مسیر سفارشی `/hub` را به Discourse اضافه می‌کند:

- از Plugin API نسخه 0.8.31 استفاده می‌کند
- Route سفارشی را ثبت می‌کند

#### `javascripts/discourse/routes/hub.js`

Route handler اصلی:

- از `DiscourseRoute` ارث می‌برد
- عنوان صفحه را "Hub" تنظیم می‌کند

#### `javascripts/discourse/controllers/hub.js`

Controller برای مدیریت state صفحه

#### `javascripts/discourse/templates/hub.hbs`

Template Handlebars که iframe را نمایش می‌دهد:

- iframe از مسیر `/discourse-react/index.html` لود می‌شود
- کلاس `hub-container` برای styling

### 2. CSS Styling

#### `common/common.scss`

استایل‌های اضافه شده:

```scss
.hub-container {
  position: fixed; // تمام صفحه
  top: 60px; // زیر header
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: calc(100vh - 60px);

  .hub-iframe {
    width: 100%;
    height: 100%;
    border: none; // بدون border
    display: block;
  }
}
```

## مراحل Deploy

### 1. Commit و Push کردن تغییرات

```bash
# بررسی تغییرات
git status

# اضافه کردن فایل‌های جدید
git add javascripts/discourse/initializers/hub-route.js
git add javascripts/discourse/routes/hub.js
git add javascripts/discourse/controllers/hub.js
git add javascripts/discourse/templates/hub.hbs
git add common/common.scss

# Commit
git commit -m "Add /hub route for React app integration"

# Push به GitHub
git push origin main
```

### 2. آپدیت تم در Discourse

1. وارد پنل ادمین شوید
2. بروید به: **Customize → Themes**
3. تم فعال خود را انتخاب کنید
4. روی دکمه **"Check for Updates"** یا **"Update from Repository"** کلیک کنید
5. Discourse تغییرات جدید را از GitHub می‌کشد

### 3. تست مسیر

مرورگر را باز کنید و به آدرس زیر بروید:

```
https://yourdomain.com/hub
```

یا در مورد شما:

```
https://aliasysdiscourse.ir/hub
```

## پیش‌نیازها

### React App باید در مسیر صحیح باشد

اطمینان حاصل کنید که React app شما در سرور در مسیر زیر قرار دارد:

```
/var/www/discourse-react/
```

و از طریق وب در این مسیر قابل دسترسی باشد:

```
/discourse-react/index.html
```

### تنظیمات Nginx (اگر لازم باشد)

اگر `/discourse-react` قابل دسترسی نیست، به فایل تنظیمات Nginx اضافه کنید:

```nginx
location /discourse-react/ {
    alias /var/www/discourse-react/;
    try_files $uri $uri/ /discourse-react/index.html;

    # CORS headers (در صورت نیاز)
    add_header Access-Control-Allow-Origin *;
}
```

سپس Nginx را reload کنید:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## عیب‌یابی

### مشکل 1: صفحه Hub خالی است

- بررسی کنید که React app در مسیر صحیح قرار دارد
- Console مرورگر را چک کنید (F12)
- مطمئن شوید Nginx به درستی تنظیم شده

### مشکل 2: Route کار نمی‌کند

- مطمئن شوید تم آپدیت شده است
- Cache مرورگر را پاک کنید
- در پنل ادمین Discourse بررسی کنید که تم فعال است

### مشکل 3: CORS Error

- تنظیمات CORS در Nginx را اضافه کنید (بالا)
- یا React app را همان origin Discourse serve کنید

## توسعه بیشتر

### تغییر مسیر iframe

برای تغییر مسیر React app، فایل `javascripts/discourse/templates/hub.hbs` را ویرایش کنید:

```hbs
<iframe
  src="/your-new-path/index.html"
  title="Hub React App"
  class="hub-iframe"
></iframe>
```

### اضافه کردن Route‌های بیشتر

می‌توانید به همین روش Route‌های دیگری هم اضافه کنید:

1. کپی کردن فایل‌های hub-\*
2. تغییر نام به route جدید
3. آپدیت کردن initializer

## منابع

- [Discourse Plugin API Documentation](https://meta.discourse.org/t/how-to-develop-custom-plugins/30515)
- [Discourse Theme Development](https://meta.discourse.org/t/developers-guide-to-discourse-themes/93648)
- [Discourse Routes Guide](https://meta.discourse.org/t/creating-custom-routes/95212)

## پشتیبانی

اگر مشکلی داشتید:

1. لاگ‌های Discourse را بررسی کنید
2. Console مرورگر را چک کنید (F12)
3. در [Discourse Meta](https://meta.discourse.org) سوال بپرسید
