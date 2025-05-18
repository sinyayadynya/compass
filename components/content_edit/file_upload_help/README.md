# File upload help

### Include

```html
{% include 'compass:file_upload_help' %}
```

```html
{% include 'compass:file_upload_help' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
```
### Embed

```html
{% embed 'compass:file_upload_help' %}
{% endembed %}
```

```html
{% embed 'compass:file_upload_help' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
  {% block content %}
    <div class="block-compass-file-upload-help">
      <p class="block-compass-file-upload-help__above">Example above message.</p>
      <div class="block-compass-file-upload-help__wrapper">{{ parent() }}</div>
      <p class="block-compass-file-upload-help__below">Example below message.</p>
    </div>
  {% endblock %}
{% endembed %}
```

### Render

```php
[
  '#type' => 'component',
  '#component' => 'compass:file_upload_help',
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
