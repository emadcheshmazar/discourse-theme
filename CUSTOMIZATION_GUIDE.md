# راهنمای سفارشی‌سازی صفحه لیست تاپیک‌ها

## تغییرات رایج

### 1. تغییر شکل کارت‌های تاپیک

در `common/common.scss` خط 414-423:

```scss
.topic-list-item {
  border-radius: 1em; // گرد بودن گوشه‌ها
  border: 1px solid...; // رنگ و ضخامت بردر
  box-shadow: 0 0 8px...; // سایه کارت
  margin-bottom: 0.5em; // فاصله بین کارت‌ها
}
```

### 2. تغییر رنگ هاور (hover)

در `common/common.scss` خط 441-450:

```scss
&:hover {
  box-shadow: 0 0 12px rgb(0, 0, 0, 0.1); // سایه هنگام هاور
  border: 1px solid...; // رنگ بردر هنگام هاور
}
```

### 3. تغییر اندازه و نسبت ستون‌ها

در `common/common.scss` خط 384-399:

```scss
.topic-list-data.default {
  width: 63%; // عرض ستون عنوان
}

.topic-list-data.posters {
  width: 7%; // عرض ستون آواتار
}

.topic-list-data.posts {
  width: 15%; // عرض ستون تعداد پست
}

.topic-list-data.activity {
  width: 15%; // عرض ستون آخرین فعالیت
}
```

### 4. تغییر استایل تگ‌ها

در `common/common.scss` خط 142-153:

```scss
.discourse-tag {
  font-size: $font-down-1;
  border-radius: 0.25em; // گردی گوشه‌ها
  padding: 0.15em 0.25em...; // فضای داخلی
  background-color: var(--primary-low); // رنگ پس‌زمینه
  color: var(--primary) !important; // رنگ متن
}
```

### 5. تغییر استایل Badge کتگوری‌ها

در `common/common.scss` خط 115-136:

```scss
.badge-wrapper.box {
  border-radius: 0.25em; // گردی badge
}
```

### 6. تغییرات موبایل

در `mobile/mobile.scss`:

- برای تنظیم padding آیتم‌ها: خط 225-228
- برای تغییر چیدمان تگ‌ها: خط 201-206
- برای استایل هدر: خط 184-190

## متغیرهای رنگی قابل استفاده

```scss
var(--primary)           // رنگ اصلی متن
var(--secondary)         // رنگ پس‌زمینه
var(--tertiary)          // رنگ لینک‌ها
var(--quaternary)        // رنگ ثانویه
var(--primary-low)       // رنگ اصلی کم‌رنگ
var(--primary-rgb)       // RGB رنگ اصلی
```

## نکات مهم

1. تغییرات در `common/common.scss` روی دسکتاپ و موبایل اعمال می‌شود
2. تغییرات در `mobile/mobile.scss` فقط روی موبایل اعمال می‌شود
3. بعد از هر تغییر، باید تم را در پنل ادمین Rebuild کنید
4. از Developer Tools مرورگر برای تست استفاده کنید
