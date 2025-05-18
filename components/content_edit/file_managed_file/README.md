# File managed file

### Include

```html
{% include 'compass:file_managed_file' %}
```

```html
{% include 'compass:file_managed_file' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
```
### Embed

```html
{% embed 'compass:file_managed_file' %}
{% endembed %}
```

```html
{% embed 'compass:file_managed_file' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
  {% block content %}
    <div class="block-compass-file-managed-file">
      <p class="block-compass-file-managed-file__above">Example above message.</p>
      <div class="block-compass-file-managed-file__wrapper">{{ parent() }}</div>
      <p class="block-compass-file-managed-file__below">Example below message.</p>
    </div>
  {% endblock %}
{% endembed %}
```

### Render

```php
[
  '#type' => 'component',
  '#component' => 'compass:file_managed_file',
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
