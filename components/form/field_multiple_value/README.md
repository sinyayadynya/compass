# Field multiple value

### Include

```html
{% include 'compass:field_multiple_value' %}
```

```html
{% include 'compass:field_multiple_value' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
```
### Embed

```html
{% embed 'compass:field_multiple_value' %}
{% endembed %}
```

```html
{% embed 'compass:field_multiple_value' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
  {% block content %}
    <div class="block-compass-field-multiple-value">
      <p class="block-compass-field-multiple-value__above">Example above message.</p>
      <div class="block-compass-field-multiple-value__wrapper">{{ parent() }}</div>
      <p class="block-compass-field-multiple-value__below">Example below message.</p>
    </div>
  {% endblock %}
{% endembed %}
```

### Render

```php
[
  '#type' => 'component',
  '#component' => 'compass:field_multiple_value',
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
