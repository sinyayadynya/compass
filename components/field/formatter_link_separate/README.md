# Formatter link separate

### Include

```html
{% include 'compass:formatter_link_separate' %}
```

```html
{% include 'compass:formatter_link_separate' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
```
### Embed

```html
{% embed 'compass:formatter_link_separate' %}
{% endembed %}
```

```html
{% embed 'compass:formatter_link_separate' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
  {% block content %}
    <div class="block-compass-formatter-link-separate">
      <p class="block-compass-formatter-link-separate__above">Example above message.</p>
      <div class="block-compass-formatter-link-separate__wrapper">{{ parent() }}</div>
      <p class="block-compass-formatter-link-separate__below">Example below message.</p>
    </div>
  {% endblock %}
{% endembed %}
```

### Render

```php
[
  '#type' => 'component',
  '#component' => 'compass:formatter_link_separate',
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
