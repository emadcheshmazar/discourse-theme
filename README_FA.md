# تم Air دیسکورس 🎨

یک تم مدرن و تمیز برای فروم‌های دیسکورس با امکانات پیشرفته

<div dir="rtl">

## 📸 پیش‌نمایش

### حالت روشن

![Light Mode](screenshots/light.png)

### حالت تاریک

![Dark Mode](screenshots/dark.png)

---

## ✨ ویژگی‌ها

- 🌓 **حالت روشن و تاریک** - با امکان تغییر آسان
- 🎯 **طراحی کارت‌محور** - برای لیست تاپیک‌ها
- 🔍 **نوار جستجوی مدرن** - با طراحی زیبا
- 📦 **باکس‌های دسته‌بندی مدرن** - نمایش بهتر دسته‌بندی‌ها
- 💬 **پشتیبانی از چت** - با استایل سفارشی
- 📱 **Responsive** - برای موبایل و دسکتاپ
- ⚡ **عملکرد بالا** - بهینه‌سازی شده

---

## 🚀 شروع سریع

### 1. نصب پیش‌نیازها

```bash
# نصب pnpm
npm install -g pnpm@9.15.5

# نصب وابستگی‌ها
pnpm install
```

### 2. پیش‌نمایش تغییرات

```bash
# باز کردن فایل پیش‌نمایش
pnpm preview
```

این دستور فایل `preview.html` را باز می‌کند که می‌توانید تغییرات را بدون نیاز به سرور ببینید.

### 3. توسعه

```bash
# بررسی خطاهای CSS
pnpm lint:css

# بررسی خطاهای JavaScript
pnpm lint:js

# فرمت کردن کدها
pnpm format
```

---

## 📁 ساختار پروژه

```
discourse-theme/
├── 📁 common/              # استایل‌ها و HTML مشترک
│   ├── common.scss         # استایل اصلی
│   └── header.html         # HTML هدر
├── 📁 desktop/             # استایل‌های دسکتاپ
│   └── desktop.scss
├── 📁 mobile/              # استایل‌های موبایل
│   └── mobile.scss
├── 📁 javascripts/         # کدهای JavaScript
│   └── discourse/
│       └── initializers/
├── 📁 scss/                # استایل‌های اضافی
│   ├── chat-desktop.scss
│   ├── chat-mobile.scss
│   ├── sidebar-desktop.scss
│   └── showcased-categories.scss
├── 📁 locales/             # ترجمه‌ها
│   └── en.yml
├── 📁 settings.yml         # تنظیمات تم
├── 📁 about.json           # اطلاعات تم
└── 📁 preview.html         # فایل پیش‌نمایش
```

---

## 🎨 سفارشی‌سازی

### تغییر رنگ‌ها

رنگ‌ها در `about.json` تعریف شده‌اند:

```json
{
  "color_schemes": {
    "air-light": {
      "primary": "1c1c1c",
      "secondary": "f9fcff",
      "tertiary": "3877e5"
    }
  }
}
```

### تغییر استایل لیست تاپیک‌ها

در `common/common.scss` خطوط 372-582:

```scss
.topic-list-item {
  border-radius: 1em; // گردی گوشه‌ها
  border: 1px solid...; // بردر
  box-shadow: 0 0 8px...; // سایه
  margin-bottom: 0.5em; // فاصله بین کارت‌ها
}
```

### تغییر عرض ستون‌ها

```scss
.topic-list-data.default {
  width: 63%;
} // عنوان
.topic-list-data.posters {
  width: 7%;
} // آواتار
.topic-list-data.posts {
  width: 15%;
} // تعداد پست
.topic-list-data.activity {
  width: 15%;
} // آخرین فعالیت
```

برای راهنمای کامل، فایل [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) را ببینید.

---

## 🔍 پیش‌نمایش تغییرات

### روش 1: فایل HTML ساده (سریع‌ترین)

```bash
pnpm preview
```

### روش 2: Browser DevTools

1. بروید به meta.discourse.org
2. F12 را بزنید
3. CSS خود را تست کنید

### روش 3: نصب محلی Discourse

```bash
# کلون و نصب
git clone https://github.com/discourse/discourse.git
cd discourse
bin/docker/boot_dev --init
bin/docker/rails s
```

راهنمای کامل در [PREVIEW_GUIDE_FA.md](PREVIEW_GUIDE_FA.md)

---

## 📝 دستورات مفید

| دستور           | توضیح                   |
| --------------- | ----------------------- |
| `pnpm install`  | نصب وابستگی‌ها          |
| `pnpm preview`  | باز کردن پیش‌نمایش      |
| `pnpm lint`     | بررسی تمام خطاها        |
| `pnpm lint:css` | بررسی خطاهای CSS        |
| `pnpm lint:js`  | بررسی خطاهای JavaScript |
| `pnpm format`   | فرمت کردن کدها          |

---

## 🔧 نصب در دیسکورس

### روش 1: از طریق Git Repository

1. در پنل ادمین بروید به: `Admin` → `Appearance` → `Themes`
2. `Install` → `From a git repository` را بزنید
3. آدرس repository خود را وارد کنید
4. `Install` را بزنید

### روش 2: آپلود مستقیم

1. فایل‌های تم را در یک فولدر قرار دهید
2. در پنل ادمین: `Admin` → `Appearance` → `Themes`
3. `Install` → `Upload a theme` را بزنید
4. فایل‌ها را انتخاب کنید

### تنظیمات مهم

⚠️ برای عملکرد صحیح تم:

1. **حداقل 2 color scheme** باید فعال باشد
   - `Admin` → `Customize` → `Colors`
   - "color scheme can be selected by users" را فعال کنید

2. **Search Banner Plugin Outlet** را تنظیم کنید
   - به `below-site-header` تغییر دهید

3. **نمایش دسته‌بندی‌ها**
   - `Admin` → `Settings` → `Categories`
   - به "boxes with subcategories" تغییر دهید

---

## 🧪 تست

```bash
# تست Ruby
bundle exec rspec

# تست JavaScript (اگر وجود داشت)
pnpm test
```

---

## 🤝 مشارکت

1. Fork کنید
2. یک branch جدید بسازید (`git checkout -b feature/amazing`)
3. تغییرات را commit کنید (`git commit -m 'Add amazing feature'`)
4. Push کنید (`git push origin feature/amazing`)
5. یک Pull Request باز کنید

---

## 📚 منابع

- [مستندات رسمی Discourse](https://meta.discourse.org)
- [راهنمای توسعه تم](https://meta.discourse.org/t/how-to-develop-custom-themes/60848)
- [راهنمای نصب تم](https://meta.discourse.org/t/how-do-i-install-a-theme-or-theme-component/63682)
- [راهنمای مبتدی](https://meta.discourse.org/t/beginners-guide-to-using-discourse-themes/91966)

---

## 📄 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است. فایل [LICENSE](LICENSE) را ببینید.

---

## 🌟 تشکر

این تم بر اساس [Discourse Air Theme](https://github.com/discourse/discourse-air) ساخته شده است.

---

## 💬 پشتیبانی

اگر سوال یا مشکلی دارید:

- [ایجاد Issue در GitHub](../../issues)
- [انجمن Discourse](https://meta.discourse.org)

---

**ساخته شده با ❤️ برای جامعه Discourse**

</div>

