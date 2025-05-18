# Vertical tabs

### Include

```html
{% include 'compass:vertical_tabs' %}
```

```html
{% include 'compass:vertical_tabs' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
```
### Embed

```html
{% embed 'compass:vertical_tabs' %}
{% endembed %}
```

```html
{% embed 'compass:vertical_tabs' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
  {% block content %}
    <div class="block-compass-vertical-tabs">
      <p class="block-compass-vertical-tabs__above">Example above message.</p>
      <div class="block-compass-vertical-tabs__wrapper">{{ parent() }}</div>
      <p class="block-compass-vertical-tabs__below">Example below message.</p>
    </div>
  {% endblock %}
{% endembed %}
```

### Render

```php
[
  '#type' => 'component',
  '#component' => 'compass:vertical_tabs',
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
