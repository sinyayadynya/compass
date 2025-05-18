# Breadcrumb

Only **{% include|embed 'provider:component' %}** are required.

### Include
```html
{% include 'compass:breadcrumb' ignore missing with {breadcrumb: [
  {url: "#", text: "First Example replacement item"},
  {url: "#", text: "Second Example replacement item"}
]} only %}
```
### Embed

```html
{% embed 'compass:breadcrumb' ignore missing with {breadcrumb: [
  {url: "#", text: "First Example replacement item"},
  {url: "#", text: "Second Example replacement item"}
]} only %}
  {% block content %}
    <div class="block-compass-breadcrumb">
      <p class="block-compass-breadcrumb__above">Example above message.</p>
      <div class="block-compass-breadcrumb__wrapper">{{ parent() }}</div>
      <p class="block-compass-breadcrumb__below">Example below message.</p>
    </div>
  {% endblock %}
{% endembed %}
```

### Render

```php
[
  '#type' => 'component',
  '#component' => 'compass:breadcrumb',
  '#props' => [
    'breadcrumb' => [
      ['url' => "#", 'text' => "First Example replacement item"],
      ['url' => "#", 'text' => "Second Example replacement item"],
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
