# Views view grouping

### Include

```html
{% include 'compass:views_view_grouping' %}
```

```html
{% include 'compass:views_view_grouping' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
```
### Embed

```html
{% embed 'compass:views_view_grouping' %}
{% endembed %}
```

```html
{% embed 'compass:views_view_grouping' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
  {% block content %}
    <div class="block-compass-views-view-grouping">
      <p class="block-compass-views-view-grouping__above">Example above message.</p>
      <div class="block-compass-views-view-grouping__wrapper">{{ parent() }}</div>
      <p class="block-compass-views-view-grouping__below">Example below message.</p>
    </div>
  {% endblock %}
{% endembed %}
```

### Render

```php
[
  '#type' => 'component',
  '#component' => 'compass:views_view_grouping',
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
