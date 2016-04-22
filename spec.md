### Definition

Theme is a [JSON](http://www.json.org/) that defines the look and related functionality of a component. A component is allowed to implement a __subset__ of this standard.

### Reserved Properties

Reserved properties are `style`, `styles` and `classes`.

### Options

Any property name other than reserved one, can be used as an option.
Option values are any legal JSON values.

### Style

A `style` property is reserved for style objects. Style object may have any property names and values which can be rendered inline, defined by the [css-style-attr](https://www.w3.org/TR/css-style-attr/) specification.

### Styles

A `styles` object is a map of named `style` objects, where `name` is any valid JSON property name and `value` is a `style` object.

### Classes

A `classes` object is a map of names and class names. Name is any valid property name. Value is a set of space-separated tokens representing the various classes. [html class attribute spec](https://www.w3.org/TR/2011/WD-html5-20110525/elements.html#classes).
