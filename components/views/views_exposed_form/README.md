# Views exposed form

### Include

```html
{% include 'compass:views_exposed_form' %}
```

```html
{% include 'compass:views_exposed_form' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
```
### Embed

```html
{% embed 'compass:views_exposed_form' %}
{% endembed %}
```

```html
{% embed 'compass:views_exposed_form' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
  {% block content %}
    <div class="block-compass-views-exposed-form">
      <p class="block-compass-views-exposed-form__above">Example above message.</p>
      <div class="block-compass-views-exposed-form__wrapper">{{ parent() }}</div>
      <p class="block-compass-views-exposed-form__below">Example below message.</p>
    </div>
  {% endblock %}
{% endembed %}
```

### Render

```php
[
  '#type' => 'component',
  '#component' => 'compass:views_exposed_form',
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
