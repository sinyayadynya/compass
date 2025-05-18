# Field  node  uid

### Include

```html
{% include 'compass:field__node__uid' %}
```

```html
{% include 'compass:field__node__uid' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
```
### Embed

```html
{% embed 'compass:field__node__uid' %}
{% endembed %}
```

```html
{% embed 'compass:field__node__uid' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
  {% block content %}
    <div class="block-compass-field--node--uid">
      <p class="block-compass-field--node--uid__above">Example above message.</p>
      <div class="block-compass-field--node--uid__wrapper">{{ parent() }}</div>
      <p class="block-compass-field--node--uid__below">Example below message.</p>
    </div>
  {% endblock %}
{% endembed %}
```

### Render

```php
[
  '#type' => 'component',
  '#component' => 'compass:field__node__uid',
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
