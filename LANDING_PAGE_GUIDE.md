# راهنمای صفحه لندینگ (Landing Page)

## 📄 توضیحات

این تم حالا شامل یک صفحه لندینگ سفارشی است که اپلیکیشن React شما را از GitHub Pages داخل یک iframe نمایش می‌دهد.

## 🔗 دسترسی به صفحه

بعد از نصب تم، می‌توانید از طریق آدرس زیر به صفحه لندینگ دسترسی داشته باشید:

```
https://YOUR-DISCOURSE-DOMAIN.com/landing
```

مثال:

```
https://aliasysdiscourse.ir/landing
```

## 📁 فایل‌های ایجاد شده

1. **`javascripts/discourse/routes/landing.js`**
   - مسیر (route) صفحه لندینگ

2. **`javascripts/discourse/templates/landing.hbs`**
   - قالب HTML صفحه لندینگ با iframe

3. **`javascripts/discourse/initializers/add-landing-route.js`**
   - راه‌اندازی اولیه و ثبت مسیر جدید

4. **`common/landing.scss`**
   - استایل‌های صفحه لندینگ (تمام صفحه، responsive)

## ⚙️ تنظیمات

### تغییر URL اپلیکیشن React

اگر می‌خواهید URL اپلیکیشن React را تغییر دهید:

1. فایل `javascripts/discourse/routes/landing.js` را باز کنید
2. مقدار `iframeUrl` را تغییر دهید:

```javascript
model() {
  return {
    iframeUrl: "YOUR-NEW-URL-HERE"
  };
}
```

### تغییر ارتفاع صفحه

در فایل `common/landing.scss` می‌توانید ارتفاع را تنظیم کنید:

```scss
.landing-page-container {
  min-height: calc(100vh - 60px); // تغییر این مقدار
}
```

## 🎨 افزودن لینک به منو

می‌توانید در فایل `common/header.html` یا از طریق پنل ادمین Discourse، لینک به این صفحه را اضافه کنید:

```html
<a href="/landing" class="landing-link">صفحه اصلی</a>
```

## 🚀 استقرار

1. تمام تغییرات را commit کنید:

```bash
git add .
git commit -m "Add landing page with React app iframe"
```

2. به GitHub push کنید:

```bash
git push origin main
```

3. از پنل ادمین Discourse، تم را به‌روزرسانی کنید (یا منتظر به‌روزرسانی خودکار بمانید)

4. صفحه را تست کنید: `https://your-domain.com/landing`

## 🔧 عیب‌یابی

### اگر صفحه 404 می‌دهد:

- مطمئن شوید تم فعال است
- Cache مرورگر را پاک کنید
- Discourse را restart کنید (اگر دسترسی دارید)

### اگر iframe نمایش داده نمی‌شود:

- بررسی کنید که URL صحیح است
- بررسی کنید که GitHub Pages اپ شما فعال است
- Console مرورگر را برای خطاهای CORS بررسی کنید

### مشکلات CORS:

اگر خطای CORS دیدید، باید تنظیمات GitHub Pages یا سرور React خود را بررسی کنید که header های مناسب را ارسال کند.

## 📱 Responsive

صفحه به صورت خودکار برای موبایل و تبلت بهینه شده است. می‌توانید در `common/landing.scss` تنظیمات responsive را تغییر دهید.
