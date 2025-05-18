# Views mini pager

### Include

```html
{% include 'compass:views_mini_pager' %}
```

```html
{% include 'compass:views_mini_pager' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
```
### Embed

```html
{% embed 'compass:views_mini_pager' %}
{% endembed %}
```

```html
{% embed 'compass:views_mini_pager' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
  {% block content %}
    <div class="block-compass-views-mini-pager">
      <p class="block-compass-views-mini-pager__above">Example above message.</p>
      <div class="block-compass-views-mini-pager__wrapper">{{ parent() }}</div>
      <p class="block-compass-views-mini-pager__below">Example below message.</p>
    </div>
  {% endblock %}
{% endembed %}
```

### Render

```php
[
  '#type' => 'component',
  '#component' => 'compass:views_mini_pager',
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
