# Views view summary

### Include

```html
{% include 'compass:views_view_summary' %}
```

```html
{% include 'compass:views_view_summary' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
```
### Embed

```html
{% embed 'compass:views_view_summary' %}
{% endembed %}
```

```html
{% embed 'compass:views_view_summary' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
  {% block content %}
    <div class="block-compass-views-view-summary">
      <p class="block-compass-views-view-summary__above">Example above message.</p>
      <div class="block-compass-views-view-summary__wrapper">{{ parent() }}</div>
      <p class="block-compass-views-view-summary__below">Example below message.</p>
    </div>
  {% endblock %}
{% endembed %}
```

### Render

```php
[
  '#type' => 'component',
  '#component' => 'compass:views_view_summary',
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
