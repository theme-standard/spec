### Definition

Theme is a [JSON](http://www.json.org/) that defines the look and related functionality of a component. A component is allowed to implement a __subset__ of this standard.

### Reserved Properties

Reserved properties are `style`, `styles` and `classes`. It is allowed to use all of them in one Theme.

### Options

Any property name other than reserved one, can be used as an option.
Option values are any legal JSON values.

Example

```json
{
  "option1": "value1",
  "option2": "value2"
}
```

### Style

A `style` property is reserved for style objects. Style object may have any property names and values which can be rendered inline, defined by the [css-style-attr](https://www.w3.org/TR/css-style-attr/) specification.

Example

```json
{
  "style": {
    "padding": "10px",
    "box-sizing": "border-box"
  }
}
```

### Styles

A `styles` object is a map of named `style` objects, where `name` is any valid JSON property name and `value` is a `style` object.

```json
{
  "styles": {
    "button": {
      "padding": "10px",
      "box-sizing": "border-box"
    }
  }
}
```

### Classes

A `classes` object is a map of names and class names. Name is any valid property name. Value is a set of space-separated tokens representing the various classes. [html class attribute spec](https://www.w3.org/TR/2011/WD-html5-20110525/elements.html#classes).

```json
{
  "classes": {
    "button": "button-df3d4",
    "icon": "icon-j4h4g"
  }
}
```
