---
title: "Laravel Lessons"
date: 2023-10-05
draft: false
tags: ["docs", "laravel", "filamentphp"]
thumbnail: "https://user-images.githubusercontent.com/41773797/257018536-8d5a0b12-4643-4b5c-964a-56f0db91b90a.png"
slug: filamentphp
---

https://codingwisely.com/blog/enhancing-laravel-filament-v3-development-with-vite-and-livewire-hot-reload

# Installation

```bash
composer require filament/filament:"^3.0-stable" -W
 
php artisan filament:install --panels
```

## Create a user

```bash
php artisan make:filament-user
```



```bash
php artisan make:filament-resource Category --simple --generate
```

# Resources 
## Relation Managers

```bash
php artisan make:filament-relation-manager ProductResource tags name
```

