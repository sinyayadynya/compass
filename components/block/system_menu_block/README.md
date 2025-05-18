# System menu block

### Include

```html
{% include 'compass:system_menu_block' %}
```

```html
{% include 'compass:system_menu_block' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
```
### Embed

```html
{% embed 'compass:system_menu_block' %}
{% endembed %}
```

```html
{% embed 'compass:system_menu_block' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
  {% block content %}
    <div class="block-compass-system-menu-block">
      <p class="block-compass-system-menu-block__above">Example above message.</p>
      <div class="block-compass-system-menu-block__wrapper">{{ parent() }}</div>
      <p class="block-compass-system-menu-block__below">Example below message.</p>
    </div>
  {% endblock %}
{% endembed %}
```

### Render

```php
[
  '#type' => 'component',
  '#component' => 'compass:system_menu_block',
  '#props' => [
    'example_array_prop' => [
      ['example_one' => "#", 'example_two' => "First Example replacement item"],
      ['example_one' => "#", 'example_two' => "Second Example replacement item"],
    ],
  ],
//   '#slots' => [
//     'content' => [
//       '#type' => 'html_tag',
//       '#tag' => 'p',
//       '#value' => 'This is the replacement of the component contents.',
//     ],
//   ],
];
```
