# Text format wrapper

### Include

```html
{% include 'compass:text_format_wrapper' %}
```

```html
{% include 'compass:text_format_wrapper' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
```
### Embed

```html
{% embed 'compass:text_format_wrapper' %}
{% endembed %}
```

```html
{% embed 'compass:text_format_wrapper' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
  {% block content %}
    <div class="block-compass-text-format-wrapper">
      <p class="block-compass-text-format-wrapper__above">Example above message.</p>
      <div class="block-compass-text-format-wrapper__wrapper">{{ parent() }}</div>
      <p class="block-compass-text-format-wrapper__below">Example below message.</p>
    </div>
  {% endblock %}
{% endembed %}
```

### Render

```php
[
  '#type' => 'component',
  '#component' => 'compass:text_format_wrapper',
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
