---
title: "Laravel Lessons"
date: 2023-10-05
draft: false
tags: ["docs", "laravel"]
thumbnail: "https://laravel.com/img/logotype.min.svg"
slug: laravel
---
## Eloquent ORM

### Generating Model Classes

- execute with database migration

```bash
php artisan make:model MODEL -m
```

## Database: Migrations

### Running Migrations

```bash
php artisan migrate
```

### Generating Migrations

```bash
php artisan make:migration create_flights_table
```

### Adding Columns on Existing Tables

```bash
php artisan make:migration add_address_to_students --table="students"
```

### Refs 

https://devdojo.com/bobbyiliev/how-to-add-a-new-column-to-an-existing-table-in-a-laravel-migration

## Eloquent: Relationships
### One To Many => HasMany

```php
public function comments(): HasMany
{
  return $this->hasMany(Comment::class);
}
```

### One To Many (Inverse) => BelongsTo

```php
public function post(): BelongsTo
{
  return $this->belongsTo(Post::class);
}
```
---

---
### Many To Many Relationships => BelongsToMany

```php
public function tags(): BelongsToMany
{
    return $this->belongsToMany(Tag::class);
}
```

this requires a seperate database table to reference id's

```php
Schema::create('product_tag', function (Blueprint $table) {
    $table->foreignId('product_id')->constrained();
    $table->foreignId('tag_id')->constrained();
});
```

