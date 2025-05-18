# Menu local task

### Include

```html
{% include 'compass:menu_local_task' %}
```

```html
{% include 'compass:menu_local_task' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
```
### Embed

```html
{% embed 'compass:menu_local_task' %}
{% endembed %}
```

```html
{% embed 'compass:menu_local_task' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
  {% block content %}
    <div class="block-compass-menu-local-task">
      <p class="block-compass-menu-local-task__above">Example above message.</p>
      <div class="block-compass-menu-local-task__wrapper">{{ parent() }}</div>
      <p class="block-compass-menu-local-task__below">Example below message.</p>
    </div>
  {% endblock %}
{% endembed %}
```

### Render

```php
[
  '#type' => 'component',
  '#component' => 'compass:menu_local_task',
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
