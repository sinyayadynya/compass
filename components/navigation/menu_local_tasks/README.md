# Menu local tasks

### Include

```html
{% include 'compass:menu_local_tasks' %}
```

```html
{% include 'compass:menu_local_tasks' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
```
### Embed

```html
{% embed 'compass:menu_local_tasks' %}
{% endembed %}
```

```html
{% embed 'compass:menu_local_tasks' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
  {% block content %}
    <div class="block-compass-menu-local-tasks">
      <p class="block-compass-menu-local-tasks__above">Example above message.</p>
      <div class="block-compass-menu-local-tasks__wrapper">{{ parent() }}</div>
      <p class="block-compass-menu-local-tasks__below">Example below message.</p>
    </div>
  {% endblock %}
{% endembed %}
```

### Render

```php
[
  '#type' => 'component',
  '#component' => 'compass:menu_local_tasks',
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
