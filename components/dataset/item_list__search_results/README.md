# Item list  search results

### Include

```html
{% include 'compass:item_list__search_results' %}
```

```html
{% include 'compass:item_list__search_results' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
```
### Embed

```html
{% embed 'compass:item_list__search_results' %}
{% endembed %}
```

```html
{% embed 'compass:item_list__search_results' ignore missing with {example_array_prop: [
  {example_one: "#", example_two: "First Example replacement item"},
  {example_one: "#", example_two: "Second Example replacement item"}
]} only %}
  {% block content %}
    <div class="block-compass-item-list--search-results">
      <p class="block-compass-item-list--search-results__above">Example above message.</p>
      <div class="block-compass-item-list--search-results__wrapper">{{ parent() }}</div>
      <p class="block-compass-item-list--search-results__below">Example below message.</p>
    </div>
  {% endblock %}
{% endembed %}
```

### Render

```php
[
  '#type' => 'component',
  '#component' => 'compass:item_list__search_results',
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
