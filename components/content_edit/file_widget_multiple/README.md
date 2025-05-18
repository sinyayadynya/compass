# File widget multiple

### Include

```html
{% include 'compass:file_widget_multiple' %}
```

```html
{% include 'compass:file_widget_multiple' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
```
### Embed

```html
{% embed 'compass:file_widget_multiple' %}
{% endembed %}
```

```html
{% embed 'compass:file_widget_multiple' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
  {% block content %}
    <div class="block-compass-file-widget-multiple">
      <p class="block-compass-file-widget-multiple__above">Example above message.</p>
      <div class="block-compass-file-widget-multiple__wrapper">{{ parent() }}</div>
      <p class="block-compass-file-widget-multiple__below">Example below message.</p>
    </div>
  {% endblock %}
{% endembed %}
```

### Render

```php
[
  '#type' => 'component',
  '#component' => 'compass:file_widget_multiple',
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
